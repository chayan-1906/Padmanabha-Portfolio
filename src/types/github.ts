export interface Collaborator {
	login: string;
	html_url: string;
}

export interface GitHubRepository {
	id: number;
	name: string;
	full_name: string;
	description: string | null;
	html_url: string;
	clone_url: string;
	homepage: string | null;
	language: string | null;
	stargazers_count: number;
	watchers_count: number;
	forks_count: number;
	created_at: string;
	updated_at: string;
	pushed_at: string;
	size: number;
	topics: string[];
	fork: boolean;
	private: boolean;
	archived: boolean;
	disabled: boolean;
	collaborators: Collaborator[];
}

export interface DemoConfig {
	type: 'live' | 'apk' | 'guide' | 'github' | 'none';
	url: string;
	label: string;
}

export interface EnhancedGitHubRepo extends GitHubRepository {
	demoConfig: DemoConfig;
	logoUrl?: string;
	collaborators: Collaborator[];
}
