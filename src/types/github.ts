export interface GitHubRepo {
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
}
