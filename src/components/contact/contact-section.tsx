import {getSections, getSocialLinks} from '@/lib/hygraph';
import {Section} from "@/types/section";
import {ACTIVE_PORTFOLIO_ID} from '@/constants';
import {ContactClient} from "./contact-client";

async function ContactSection() {
	const [sections, socialLinks] = await Promise.all([
		getSections(ACTIVE_PORTFOLIO_ID),
		getSocialLinks(ACTIVE_PORTFOLIO_ID),
	]);

	const contactSection = sections.find((section: Section) => section.name === 'Contact');

	if (!contactSection) {
		return null;
	}

	return (
		<ContactClient contactSection={contactSection} socialLinks={socialLinks}/>
	);
}

export {ContactSection};
