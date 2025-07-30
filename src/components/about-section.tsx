import {getSections} from '@/lib/hygraph';
import {Section} from "@/types/about";
import {ACTIVE_PORTFOLIO_ID} from '@/constants';
import {AboutClient} from './about/about-client';

async function AboutSection() {
	const sections = await getSections(ACTIVE_PORTFOLIO_ID);
	const aboutSection = sections.find((section: Section) => section.name === 'About');

	if (!aboutSection) {
		return null;
	}

	return <AboutClient aboutSection={aboutSection}/>;
}

export {AboutSection};
