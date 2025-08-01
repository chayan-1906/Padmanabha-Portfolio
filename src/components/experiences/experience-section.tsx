import {getSections, getSkills, getWorkExperiences} from '@/lib/hygraph';
import {Section} from "@/types/section";
import {ACTIVE_PORTFOLIO_ID} from '@/constants';
import {ExperienceClient} from "@/components/experiences/experiences-client";

async function ExperienceSection() {
	const [sections, skillsData, workExperiences] = await Promise.all([
		getSections(ACTIVE_PORTFOLIO_ID),
		getSkills(ACTIVE_PORTFOLIO_ID),
		getWorkExperiences(ACTIVE_PORTFOLIO_ID),
	]);

	const experienceSection = sections.find((section: Section) => section.name === 'Experience');

	if (!experienceSection || !workExperiences.length) {
		return null;
	}

	// Group skills by category (keeping icons as strings)
	const groupedSkills: Record<string, any> = {};

	skillsData.forEach((skill: any) => {
		const categoryKey = skill.category.title.toLowerCase();

		if (!groupedSkills[categoryKey]) {
			groupedSkills[categoryKey] = {
				title: skill.category.title,
				color: skill.category.color,
				icon: skill.category.icon,
				items: [],
			};
		}

		groupedSkills[categoryKey].items.push({
			name: skill.name,
			level: skill.level,
			icon: skill.icon,
		});
	});

	return (
		<ExperienceClient experienceSection={experienceSection} skills={groupedSkills} workExperiences={workExperiences}/>
	);
}

export {ExperienceSection};
