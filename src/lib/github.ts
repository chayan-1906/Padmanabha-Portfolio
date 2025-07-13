import {GitHubRepo} from "@/types/github";

async function getGitHubRepositories(): Promise<GitHubRepo[]> {
	try {
		const response = await fetch('https://api.github.com/users/chayan-1906/repos?per_page=100', {
			headers: {
				'Accept': 'application/vnd.github.v3+json',
			},
			next: {revalidate: 3600}, // Cache for 1 hour
		});

		if (!response.ok) {
			throw new Error('Failed to fetch GitHub repos');
		}

		const repos: GitHubRepo[] = await response.json();

		// Filter out forks and sort by updated date
		return repos
			.filter(repo => !repo.fork)
			.sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());
	} catch (error) {
		console.error('Error fetching GitHub repos:', error);
		return [];
	}
}

export function getFeaturedProjects(repos: GitHubRepo[]) {
	const featuredRepoNames = [
		'Jira',
		'DocMingle-Next.js',
		'Busgo-React-Native',
		'BusGo-Node.js',
		'Music-Aceternity-Next.js',
		'Mstry-Message-Next.js',
		'Interior-Next.js',
		'MF-Stx-Cal-Next.js'
	];

	return repos
		.filter(repo => featuredRepoNames.includes(repo.name))
		.sort((a, b) => featuredRepoNames.indexOf(a.name) - featuredRepoNames.indexOf(b.name))
		.slice(0, 6);
}

export {getGitHubRepositories}
