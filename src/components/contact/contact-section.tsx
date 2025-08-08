import {Section} from "@/types/section";
import {ContactClient} from "./contact-client";
import {ContactSectionProps} from "@/types/contact";

async function ContactSection({sections, socialLinks, personalInfo}: ContactSectionProps) {
	const contactSection = sections.find((section: Section) => section.name === 'Contact');

	if (!contactSection) {
		return null;
	}

	return (
		<ContactClient contactSection={contactSection} socialLinks={socialLinks} personalInfo={personalInfo}/>
	);
}

export {ContactSection};
