import {AchievementClient} from "./achievement-client";
import {AchievementSectionProps} from "@/types/achievement";
import {Section} from "@/types/section";

function AchievementSection({sections, githubStats}: AchievementSectionProps) {
	const achievementSection = sections.find((section: Section) => section.name === 'Achievements');

	if (!achievementSection || !githubStats) {
		return null;
	}

	return (
		<AchievementClient achievementSection={achievementSection} githubStats={githubStats}/>
	);
}

export {AchievementSection};
