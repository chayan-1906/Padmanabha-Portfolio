import {Section} from "@/types/section";
import {getEducations} from "@/lib/hygraph";
import {ACTIVE_PORTFOLIO_ID} from "@/constants";
import {EducationSectionProps} from "@/types/education";
import {EducationClient} from "@/components/educations/education-client";

async function EducationSection({sections}: EducationSectionProps) {
	const educations = await getEducations(ACTIVE_PORTFOLIO_ID);

	const educationSection = sections.find((section: Section) => section.name === 'Education');

	if (!educationSection || !educations.length) {
		return null;
	}

	return (
		<EducationClient educationSection={educationSection} educations={educations}/>
	);
}

export {EducationSection};
