import {Project} from "@/types/project";
import {GITHUB_TOKEN} from "@/config/config";
import {getAllProjects, getFeaturedProjects} from "@/lib/hygraph";

function parseGitHubUrl(githubUrl: string): [string, string] {
	if (!githubUrl) {
		throw new Error('GitHub URL is missing');
	}

	const match = githubUrl.match(/github\.com\/([^/]+)\/([^/]+)/);
	if (!match) {
		throw new Error(`Invalid GitHub repository URL: ${githubUrl}`);
	}

	const [, owner, repo] = match;
	return [owner, repo];
}

async function getRepositoryWithCollaborators(githubUrl: string) {
	const [owner, repo] = parseGitHubUrl(githubUrl);
	const headers = {
		Accept: 'application/vnd.github.v3+json',
		Authorization: `token ${GITHUB_TOKEN}`,
	};

	const [repoRes, collabRes] = await Promise.all([
		fetch(`https://api.github.com/repos/${owner}/${repo}`, {headers, next: {revalidate: 3600}}),
		fetch(`https://api.github.com/repos/${owner}/${repo}/collaborators`, {headers, next: {revalidate: 3600}}),
	]);

	const repoData = repoRes.ok ? await repoRes.json() : null;
	const collaborators = collabRes.ok ? await collabRes.json() : [];

	return {...repoData, collaborators};
}

async function enrichProjectsWithGitHubData(projects: Project[]) {
	return Promise.all(projects.map(async (project: Project) => {
		const repositoryData = await getRepositoryWithCollaborators(project.gitHubUrl);
		return {
			...project,
			description: repositoryData?.description,
			topics: repositoryData?.topics || [],
			language: repositoryData?.language || [],
			stargazers_count: repositoryData?.stargazers_count || 0,
			collaborators: repositoryData?.collaborators || [],
		};
	}));
}

// for projects section
async function getFeaturedProjectsWithGitHubData() {
	const projects = await getFeaturedProjects();
	return await enrichProjectsWithGitHubData(projects);
}

// for projects page
async function getAllProjectsWithGitHubData() {
	const projects = await getAllProjects();
	return await enrichProjectsWithGitHubData(projects);
}

export {getFeaturedProjectsWithGitHubData, getAllProjectsWithGitHubData};
