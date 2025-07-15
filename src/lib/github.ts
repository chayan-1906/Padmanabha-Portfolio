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

function getFeaturedProjects(repositories: GitHubRepo[]): GitHubRepo[] {
	return repositories
		.filter(repository => repository.topics.includes('featured'))
		.slice(0, 6);
}

export {getGitHubRepositories, getFeaturedProjects};
