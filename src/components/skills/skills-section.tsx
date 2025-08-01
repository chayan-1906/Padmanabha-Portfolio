import {getSections, getSkills} from '@/lib/hygraph';
import {Section} from "@/types/section";
import {SkillsClient} from './skills-client';
import {ACTIVE_PORTFOLIO_ID} from '@/constants';

async function SkillsSection() {
	const [sections, skillsData] = await Promise.all([
		getSections(ACTIVE_PORTFOLIO_ID),
		getSkills(ACTIVE_PORTFOLIO_ID),
	]);

	const skillsSection = sections.find((section: Section) => section.name === 'Skills');

	console.log('SkillsSection - Raw data:', {skillsSection, skillsData});

	if (!skillsSection || !skillsData.length) {
		console.log('SkillsSection - No data, returning null');
		return null;
	}

	// Group skills by category (keeping icons as strings)
	const groupedSkills: Record<string, any> = {};

	skillsData.forEach((skill: any) => {
		console.log('Processing skill:', skill);

		if (!skill.category) {
			console.warn('Skill missing category:', skill);
			return;
		}

		const categoryKey = skill.category.title?.toLowerCase();

		if (!categoryKey) {
			console.warn('Category missing title:', skill.category);
			return;
		}

		if (!groupedSkills[categoryKey]) {
			groupedSkills[categoryKey] = {
				title: skill.category.title,
				color: skill.category.color,
				icon: skill.category.icon, // Keep as string
				items: [],
			};
		}

		groupedSkills[categoryKey].items.push({
			name: skill.name,
			level: skill.level,
			icon: skill.icon, // Keep as string
		});
	});

	console.log('SkillsSection - Grouped skills:', groupedSkills);

	return (
		<SkillsClient skillsSection={skillsSection} skills={groupedSkills}/>
	);
}

export {SkillsSection};
