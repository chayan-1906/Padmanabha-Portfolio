import {DemoConfig, EnhancedGitHubRepo, GitHubRepo} from "@/types/github";
import {PERSONAL_INFO} from "@/constants";

async function getGitHubRepositories(): Promise<GitHubRepo[]> {
	try {
		const response = await fetch(`https://api.github.com/users/${PERSONAL_INFO.github.split('/').pop()}/repos?per_page=100`, {
			headers: {
				'Accept': 'application/vnd.github.v3+json',
				'Authorization': `token ${process.env.GITHUB_TOKEN}`,
			},
			next: {revalidate: 3600},
		});

		if (!response.ok) {
			throw new Error('Failed to fetch GitHub repositories');
		}

		const repos: GitHubRepo[] = await response.json();

		return repos
			.filter(repo => !repo.fork) // filter out forked repositories
			.sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());
	} catch (error) {
		console.error('Error fetching GitHub repositories:', error);
		return [];
	}
}

async function getEnhancedGitHubRepositories(): Promise<EnhancedGitHubRepo[]> {
	const repositories = await getGitHubRepositories();

	const enhancedRepos = await Promise.all(
		repositories.map(async (repo) => {
			const demoConfig = await getDemoConfig(repo);
			return {
				...repo,
				demoConfig,
			};
		}),
	);

	return enhancedRepos;
}

async function getDemoConfig(repo: GitHubRepo): Promise<DemoConfig> {
	try {
		// Fetch README.md content
		const readmeResponse = await fetch(`https://api.github.com/repos/${repo.full_name}/readme`, {
			headers: {
				'Accept': 'application/vnd.github.v3+json',
				'Authorization': `token ${process.env.GITHUB_TOKEN}`,
			},
			next: {revalidate: 3600},
		});

		if (readmeResponse.ok) {
			const readmeData = await readmeResponse.json();
			const readmeContent = Buffer.from(readmeData.content, 'base64').toString('utf-8');

			// Parse README for demo links
			const demoConfig = parseReadmeForDemoLinks(readmeContent, repo);
			if (demoConfig) {
				return demoConfig;
			}
		}
	} catch (error) {
		console.error(`Error fetching README for ${repo.name}:`, error);
	}

	// Fallback to homepage or default
	return getFallbackDemoConfig(repo);
}

function parseReadmeForDemoLinks(readmeContent: string, repo: GitHubRepo): DemoConfig | null {
	// Live site patterns
	const liveSitePatterns = [
		/Live\s+Site[^:]*:\s*\[([^\]]+)]\(([^)]+)\)/gi,
		/Live\s+Demo[^:]*:\s*\[([^\]]+)]\(([^)]+)\)/gi,
		/Demo[^:]*:\s*\[([^\]]+)]\(([^)]+)\)/gi,
		/\[Live\s+Site[^\]]*]\(([^)]+)\)/gi,
		/\[Live\s+Demo[^\]]*]\(([^)]+)\)/gi,
		/https?:\/\/[^\s]+\.vercel\.app/gi,
		/https?:\/\/[^\s]+\.netlify\.app/gi,
	];

	// APK download patterns - fixed to avoid badge URLs
	const apkPatterns = [
		/\[!\[Download\s+APK][^\]]*]\(([^)]+)\)/gi,
		/\[Download\s+APK][^\]]*]\(([^)]+)\)/gi,
		/\[.*Download.*APK.*]\(([^)]+)\)/gi,
	];

	// User guide patterns
	const userGuidePatterns = [
		/User\s+Guide[^:]*:\s*\[([^\]]+)]\(([^)]+)\)/gi,
		/\[User\s+Guide[^\]]*]\(([^)]+)\)/gi,
		/User\s+Guide\s*--\s*(https?:\/\/[^\s]+)/gi,
		/https?:\/\/[^\s]*notion\.site[^\s]*/gi,
	];

	// Check for live site links
	for (const pattern of liveSitePatterns) {
		const match = pattern.exec(readmeContent);
		if (match) {
			const url = match[2] || match[1];
			if (url) {
				return {
					type: 'live',
					url: url.trim(),
					label: 'Live Demo',
				};
			}
		}
	}

	// Check for APK download links
	for (const pattern of apkPatterns) {
		const match = pattern.exec(readmeContent);
		if (match) {
			const url = match[1];
			if (url && !url.includes('img.shields.io')) {
				return {
					type: 'apk',
					url: url.trim(),
					label: 'Download APK',
				};
			}
		}
	}

	// Check for user guide links
	for (const pattern of userGuidePatterns) {
		const match = pattern.exec(readmeContent);
		if (match) {
			const url = match[2] || match[1];
			if (url) {
				return {
					type: 'guide',
					url: url.trim(),
					label: 'User Guide',
				};
			}
		}
	}

	return null;
}

function getFallbackDemoConfig(repo: GitHubRepo): DemoConfig {
	const topics = repo.topics;
	const homepage = repo.homepage;

	// Check for MCP servers
	if (topics.includes('mcp-server') || topics.includes('model-context-protocol')) {
		return {
			type: 'guide',
			url: homepage || repo.html_url,
			label: 'User Guide',
		};
	}

	// Check for mobile apps
	if (topics.includes('demo-apk-download-apk') || topics.includes('react-native') || topics.includes('flutter')) {
		return {
			type: 'apk',
			url: homepage || repo.html_url,
			label: 'Download APK',
		};
	}

	// Check for web apps
	if (homepage && (topics.includes('nextjs') || topics.includes('react') || topics.includes('web'))) {
		return {
			type: 'live',
			url: homepage,
			label: 'Live Demo',
		};
	}

	// Backend or no demo projects
	if (topics.includes('backend') || topics.includes('api') || topics.includes('server')) {
		return {
			type: 'none',
			url: '',
			label: '',
		};
	}

	// Default to GitHub
	return {
		type: 'github',
		url: repo.html_url,
		label: 'View Code',
	};
}

function getTopFeaturedProjects(repositories: EnhancedGitHubRepo[]): EnhancedGitHubRepo[] {
	return repositories.filter(repository => repository.topics.includes('portfolio') && repository.topics.includes('featured'));
}

function getAllFeaturedProjects(repositories: EnhancedGitHubRepo[]): EnhancedGitHubRepo[] {
	return repositories.filter(repository => repository.topics.includes('featured'));
}

export {getGitHubRepositories, getEnhancedGitHubRepositories, getDemoConfig, getTopFeaturedProjects, getAllFeaturedProjects};
