import {getSections, getSkills, getWorkExperiences} from '@/lib/hygraph';
import {Section} from "@/types/section";
import {ACTIVE_PORTFOLIO_ID} from '@/constants';
import {ExperienceClient} from "@/components/experiences/experiences-client";

async function ExperienceSection() {
	const [sections, skills, workExperiences] = await Promise.all([
		getSections(ACTIVE_PORTFOLIO_ID),
		getSkills(ACTIVE_PORTFOLIO_ID),
		getWorkExperiences(ACTIVE_PORTFOLIO_ID),
	]);

	const experienceSection = sections.find((section: Section) => section.name === 'Experience');

	if (!experienceSection || !workExperiences.length) {
		return null;
	}

	console.log(workExperiences[1].role);

	return (
		<ExperienceClient experienceSection={experienceSection} skills={skills} workExperiences={workExperiences}/>
	);
}

export {ExperienceSection};
