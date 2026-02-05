import {cache} from "react";
import {cacheLife, cacheTag} from "next/cache";
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

const getRepositoryWithCollaborators = cache(async (githubUrl: string) => {
    "use cache";
    cacheTag('github-repos');
    cacheLife('weeks');

    const [owner, repo] = parseGitHubUrl(githubUrl);
    const headers = {
        Accept: 'application/vnd.github.v3+json',
        Authorization: `token ${GITHUB_TOKEN}`,
    };

    const [repoRes, collabRes] = await Promise.all([
        fetch(`https://api.github.com/repos/${owner}/${repo}`, {headers}),
        fetch(`https://api.github.com/repos/${owner}/${repo}/collaborators`, {headers}),
    ]);

    const repoData = repoRes.ok ? await repoRes.json() : null;
    // console.log('repoData:', repoData);
    const collaborators = collabRes.ok ? await collabRes.json() : [];

    return {...repoData, collaborators};
});

async function enrichProjectsWithGitHubData(projects: Project[]) {
    return Promise.all(projects.map(async (project: Project) => {
        const repositoryData = await getRepositoryWithCollaborators(project.gitHubUrl);
        return {
            ...project,
            description: repositoryData?.description,
            topics: repositoryData?.topics || [],
            language: repositoryData?.language || [],
            stargazers_count: repositoryData?.stargazers_count || 0,
            forks_count: repositoryData?.forks_count || 0,
            collaborators: repositoryData?.collaborators || [],
        };
    }));
}

// for projects section
async function getFeaturedProjectsWithGitHubData() {
    const projects: Project[] = await getFeaturedProjects();
    return await enrichProjectsWithGitHubData(projects);
}

// for projects page
async function getAllProjectsWithGitHubData() {
    const projects: Project[] = await getAllProjects();
    return await enrichProjectsWithGitHubData(projects);
}

// for achievements section
const getGitHubUserStats = cache(async (username: string) => {
    "use cache";
    cacheTag('github-user-stats');
    cacheLife('weeks');

    const headers = {
        Accept: 'application/vnd.github.v3+json',
        Authorization: `token ${GITHUB_TOKEN}`,
    };

    const response: Response = await fetch(`https://api.github.com/users/${username}`, {headers});

    return response.ok ? await response.json() : null;
});

export {getFeaturedProjectsWithGitHubData, getAllProjectsWithGitHubData, getGitHubUserStats};
