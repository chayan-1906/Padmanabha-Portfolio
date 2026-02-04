import {Suspense} from 'react';
import {Section} from "@/types/section";
import {ACTIVE_PORTFOLIO_ID} from '@/constants';
import {getWorkExperiences} from '@/lib/hygraph';
import {ExperiencesSectionProps} from "@/types/experiences";
import {GroupedSkillCategory, SkillItem} from "@/types/skills";
import {ExperienceClient} from "@/components/experiences/experiences-client";

async function ExperienceSection({sections, skillsData}: ExperiencesSectionProps) {
	const workExperiences = await getWorkExperiences(ACTIVE_PORTFOLIO_ID);

	const experienceSection = sections.find((section: Section) => section.name === 'Experience');

	if (!experienceSection || !workExperiences.length) {
		return null;
	}

	const groupedSkillsMap: Record<string, GroupedSkillCategory> = {};

	skillsData.forEach((skill: SkillItem) => {
		if (!skill.category) {
			console.warn('Skill missing category:', skill);
			return;
		}

		const categoryKey = skill.category.title?.toLowerCase();

		if (!categoryKey) {
			console.warn('Category missing title:', skill.category);
			return;
		}

		if (!groupedSkillsMap[categoryKey]) {
			groupedSkillsMap[categoryKey] = {
				title: skill.category.title,
				color: skill.category.color,
				gradient: skill.category.gradient,
				icon: skill.category.icon,
				order: skill.category.order,
				items: [],
			};
		}

		groupedSkillsMap[categoryKey].items.push({
			name: skill.name,
			level: skill.level,
			icon: skill.icon,
		});
	});

	const sortedSkills = Object.entries(groupedSkillsMap)
		// .sort(([, a], [, b]) => a.order - b.order)
		.reduce((acc, [key, value]) => {
			acc[key] = value;
			return acc;
		}, {} as Record<string, GroupedSkillCategory>);

	return (
		<Suspense fallback={null}>
			<ExperienceClient experienceSection={experienceSection} skills={sortedSkills} workExperiences={workExperiences}/>
		</Suspense>
	);
}

export {ExperienceSection};
