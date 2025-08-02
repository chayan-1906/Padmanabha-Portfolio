import {getEducations, getSections} from '@/lib/hygraph';
import {Section} from "@/types/section";
import {ACTIVE_PORTFOLIO_ID} from '@/constants';
import {EducationClient} from "@/components/educations/education-client";

async function EducationSection() {
	const [sections, educations] = await Promise.all([
		getSections(ACTIVE_PORTFOLIO_ID),
		getEducations(ACTIVE_PORTFOLIO_ID),
	]);

	const educationSection = sections.find((section: Section) => section.name === 'Education');

	if (!educationSection || !educations.length) {
		return null;
	}

	return (
		<EducationClient educationSection={educationSection} educations={educations}/>
	);
}

export {EducationSection};
