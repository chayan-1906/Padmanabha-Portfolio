import {getSections, getSkills} from '@/lib/hygraph';
import {Section} from "@/types/section";
import {SkillsClient} from './skills-client';
import {SkillCategory} from '@/types/skills';
import {ACTIVE_PORTFOLIO_ID, SKILLS} from '@/constants';

async function SkillsSection() {
	const [sections, skillsData] = await Promise.all([
		getSections(ACTIVE_PORTFOLIO_ID),
		getSkills(ACTIVE_PORTFOLIO_ID),
	]);

	const skillsSection = sections.find((section: Section) => section.name === 'Skills');

	if (!skillsSection || !skillsData.length) {
		return null;
	}

	// Group skills by category and merge with constants metadata
	const groupedSkills: Record<string, SkillCategory> = {};

	skillsData.forEach((skill: any) => {
		const category = skill.category;
		const categoryConfig = SKILLS[category as keyof typeof SKILLS];

		if (!groupedSkills[category]) {
			groupedSkills[category] = {
				title: categoryConfig.title,
				color: categoryConfig.color,
				icon: categoryConfig.icon,
				items: []
			};
		}

		// Find matching skill from constants for icon
		const constantSkill = categoryConfig.items.find(item => item.name === skill.name);

		groupedSkills[category].items.push({
			name: skill.name,
			level: skill.level,
			icon: constantSkill?.icon || categoryConfig.icon
		});
	});

	return (
		<SkillsClient skillsSection={skillsSection} skills={groupedSkills}/>
	);
}

export {SkillsSection};
