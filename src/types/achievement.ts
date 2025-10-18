import {Section} from "@/types/section";

export interface GitHubStats {
	login: string;
	name: string;
	avatar_url: string;
	bio: string;
	public_repos: number;
	followers: number;
	following: number;
	created_at: string;
	updated_at: string;
}

export interface AchievementSectionProps {
	sections: Section[];
	githubStats: GitHubStats | null;
}

export interface AchievementClientProps {
	achievementSection: Section;
	githubStats: GitHubStats;
}
