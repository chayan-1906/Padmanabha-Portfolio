import {GitHubRepo} from "@/types/github";
import {PERSONAL_INFO} from "@/constants";

async function getGitHubRepositories(): Promise<GitHubRepo[]> {
	try {
		const response = await fetch(`https://api.github.com/users/${PERSONAL_INFO.github.split('/').pop()}/repos?per_page=100`, {
			headers: {
				'Accept': 'application/vnd.github.v3+json',
			},
			next: {revalidate: 3600},
		});

		if (!response.ok) {
			throw new Error('Failed to fetch GitHub repositories');
		}

		const repos: GitHubRepo[] = await response.json();

		return repos
			.filter(repo => !repo.fork)
			.sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());
	} catch (error) {
		console.error('Error fetching GitHub repositories:', error);
		return [];
	}
}

async function getReadmeContent(owner: string, repo: string): Promise<string> {
	try {
		const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/readme`, {
			headers: {
				'Accept': 'application/vnd.github.v3+json',
			},
			next: {revalidate: 3600},
		});

		if (!response.ok) {
			return '';
		}

		const data = await response.json();
		return atob(data.content);
	} catch (error) {
		console.error('Error fetching README:', error);
		return '';
	}
}

function extractLinkFromSection(readme: string, sectionTitle: string): string | null {
	const lines = readme.split('\n');
	let inSection = false;

	for (let i = 0; i < lines.length; i++) {
		const line = lines[i].trim();

		// Check if we found the section
		if (line.includes(sectionTitle)) {
			inSection = true;
			continue;
		}

		// If we're in the section, look for URLs
		if (inSection) {
			// Stop if we hit another section header
			if (line.startsWith('#') && !line.includes(sectionTitle)) {
				break;
			}

			// Look for URLs in markdown format [text](url) or plain URLs
			const urlMatch = line.match(/\[.*?\]\((https?:\/\/[^\s)]+)\)/) || line.match(/(https?:\/\/[^\s]+)/);
			if (urlMatch) {
				return urlMatch[1];
			}
		}
	}

	return null;
}

function isBackendRepo(topics: string[]): boolean {
	const backendIndicators = ['backend', 'api', 'server', 'nodejs', 'express'];
	return backendIndicators.some(indicator => topics.includes(indicator));
}

interface DemoLink {
	type: 'website' | 'apk' | 'guide' | 'github';
	url: string;
	label: string;
	icon: 'ExternalLink' | 'Download' | 'Github';
}

async function getDemoLink(project: GitHubRepo): Promise<DemoLink | null> {
	// Parse topics for demo configuration
	const demoTopic = project.topics.find(topic => topic.startsWith('demo-'));

	if (demoTopic) {
		const parts = demoTopic.split('-');
		if (parts.length >= 3) {
			const type = parts[1]; // apk, guide, etc.
			const label = parts.slice(2).join(' ').replace(/-/g, ' ');

			// Fetch README content
			// TODO: To be fixed
			const owner = project.owner.login;
			const readmeContent = await getReadmeContent(owner, project.name);

			let sectionTitle = '';
			let url = '';

			// Determine section title based on type
			if (type === 'apk') {
				sectionTitle = 'Download & Try';
			} else if (type === 'guide') {
				sectionTitle = '📖 User Guide';
			}

			// Extract link from README section
			if (sectionTitle && readmeContent) {
				const extractedUrl = extractLinkFromSection(readmeContent, sectionTitle);
				if (extractedUrl) {
					url = extractedUrl;
				}
			}

			// If no URL found in README, fallback to homepage
			if (!url && project.homepage) {
				url = project.homepage;
			}

			// If still no URL, return null for demo types
			if (!url) {
				return null;
			}

			return {
				type: type as 'website' | 'apk' | 'guide',
				url,
				label: label.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
				icon: type === 'apk' ? 'Download' : 'ExternalLink',
			};
		}
	}

	// If homepage exists, show live demo
	if (project.homepage) {
		return {
			type: 'website',
			url: project.homepage,
			label: 'Live Demo',
			icon: 'ExternalLink',
		};
	}

	// For backend repos without homepage/demo, don't show button
	if (isBackendRepo(project.topics)) {
		return null;
	}

	// Default fallback for frontend repos
	return {
		type: 'github',
		url: project.html_url,
		label: 'View Code',
		icon: 'Github',
	};
}

function getTopFeaturedProjects(repositories: GitHubRepo[]): GitHubRepo[] {
	return repositories.filter(repository => repository.topics.includes('portfolio') && repository.topics.includes('featured'));
}

function getAllFeaturedProjects(repositories: GitHubRepo[]): GitHubRepo[] {
	return repositories.filter(repository => repository.topics.includes('featured'));
}

export {getGitHubRepositories, getTopFeaturedProjects, getAllFeaturedProjects, getDemoLink};
export type {DemoLink};
