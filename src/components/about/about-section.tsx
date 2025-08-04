import {Section} from "@/types/section";
import {AboutClient} from './about-client';
import {AboutSectionProps} from "@/types/about";

async function AboutSection({sections}: AboutSectionProps) {
	const aboutSection = sections.find((section: Section) => section.name === 'About');

	if (!aboutSection) {
		return null;
	}

	return (
		<AboutClient aboutSection={aboutSection}/>
	);
}

export {AboutSection};
