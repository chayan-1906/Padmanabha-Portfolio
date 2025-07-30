import {getSections} from '@/lib/hygraph';
import {Section} from "@/types/section";
import {AboutClient} from './about-client';
import {ACTIVE_PORTFOLIO_ID} from '@/constants';

async function AboutSection() {
	const sections = await getSections(ACTIVE_PORTFOLIO_ID);
	const aboutSection = sections.find((section: Section) => section.name === 'About');

	if (!aboutSection) {
		return null;
	}

	return (
		<AboutClient aboutSection={aboutSection}/>
	);
}

export {AboutSection};
