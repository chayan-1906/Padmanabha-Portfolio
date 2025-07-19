import {PERSONAL_INFO} from "@/constants";
import {Collaborator, DemoConfig, EnhancedGitHubRepo, GitHubRepo} from "@/types/github";

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
			.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()); // Sort by creation date (newest first)
	} catch (error) {
		console.error('Error fetching GitHub repositories:', error);
		return [];
	}
}

async function getEnhancedGitHubRepositories(): Promise<EnhancedGitHubRepo[]> {
	const repositories = await getGitHubRepositories();

	const enhancedRepos = await Promise.all(
		repositories.map(async (repo) => {
			const [demoConfig, logoUrl, collaborators] = await Promise.all([
				getDemoConfig(repo),
				getLogoUrl(repo),
				getCollaborators(repo)
			]);
			return {
				...repo,
				demoConfig,
				logoUrl,
				collaborators,
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

async function getLogoUrl(repo: GitHubRepo): Promise<string | undefined> {
	try {
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

			return parseLogoFromReadme(readmeContent);
		}
	} catch (error) {
		console.error(`Error fetching logo for ${repo.name}:`, error);
	}

	return undefined;
}

async function getCollaborators(repo: GitHubRepo): Promise<Collaborator[]> {
	try {
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

			return parseCollaboratorsFromReadme(readmeContent);
		}
	} catch (error) {
		console.error(`Error fetching collaborators for ${repo.name}:`, error);
	}

	return [];
}

function parseLogoFromReadme(readmeContent: string): string | undefined {
	// Logo patterns
	const logoPatterns = [
		/!\[logo]\(([^)]+)\)/i,
		/!\[Logo]\(([^)]+)\)/i,
		/!\[[^\]]*logo[^\]]*]\(([^)]+)\)/i,
		/<img[^>]*src=["']([^"']+)["'][^>]*alt=["'][^"']*logo[^"']*["'][^>]*>/i,
		/<img[^>]*alt=["'][^"']*logo[^"']*["'][^>]*src=["']([^"']+)["'][^>]*>/i,
	];

	for (const pattern of logoPatterns) {
		const match = pattern.exec(readmeContent);
		if (match) {
			const url = match[1];
			if (url && url.startsWith('http')) {
				return url.trim();
			}
		}
	}

	return undefined;
}

function parseCollaboratorsFromReadme(readmeContent: string): Collaborator[] {
	const collaborators: Collaborator[] = [];

	// Find the Collaborators section
	const collaboratorSectionPattern = /^##\s+Collaborators?\s*$/im;
	const match = collaboratorSectionPattern.exec(readmeContent);

	if (!match) {
		return collaborators;
	}

	// Extract content after the "## Collaborators" heading until the next heading or end
	const startIndex = match.index + match[0].length;
	const nextHeadingPattern = /^##\s+/m;
	const nextHeadingMatch = readmeContent.slice(startIndex).search(nextHeadingPattern);

	const sectionContent = nextHeadingMatch === -1
		? readmeContent.slice(startIndex)
		: readmeContent.slice(startIndex, startIndex + nextHeadingMatch);

	// Parse collaborator links in format: - [Name](https://github.com/username/)
	const collaboratorPattern = /^-\s*\[([^\]]+)]\(([^)]+)\)/gm;
	let collaboratorMatch;

	while ((collaboratorMatch = collaboratorPattern.exec(sectionContent)) !== null) {
		const name = collaboratorMatch[1].trim();
		const url = collaboratorMatch[2].trim();

		// Validate GitHub URL
		if (url.includes('github.com')) {
			collaborators.push({
				name, githubUrl: url,
			});
		}
	}

	return collaborators;
}

function parseReadmeForDemoLinks(readmeContent: string, repo: GitHubRepo): DemoConfig | null {
	// Live site patterns
	const liveSitePatterns = [
		/Live\s+Site[^:]*:\s*\[([^\]]+)]\(([^)]+)\)/i,
		/Live\s+Demo[^:]*:\s*\[([^\]]+)]\(([^)]+)\)/i,
		/Demo[^:]*:\s*\[([^\]]+)]\(([^)]+)\)/i,
		/\[Live\s+Site[^\]]*]\(([^)]+)\)/i,
		/\[Live\s+Demo[^\]]*]\(([^)]+)\)/i,
		/https?:\/\/[^\s]+\.vercel\.app/i,
		/https?:\/\/[^\s]+\.netlify\.app/i,
	];

	// APK download patterns - fixed to avoid badge URLs
	const apkPatterns = [
		/\[!\[Download\s+APK][^\]]*]\(([^)]+)\)/i,
		/\[Download\s+APK][^\]]*]\(([^)]+)\)/i,
		/\[.*Download.*APK.*]\(([^)]+)\)/i,
	];

	// User guide patterns
	const userGuidePatterns = [
		/User\s+Guide[^:]*:\s*\[([^\]]+)]\(([^)]+)\)/i,
		/\[User\s+Guide[^\]]*]\(([^)]+)\)/i,
		/User\s+Guide\s*--\s*(https?:\/\/[^\s]+)/i,
		/https?:\/\/[^\s]*notion\.site[^\s]*/i,
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
