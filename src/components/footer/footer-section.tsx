import {FooterClient} from "./footer-client";
import {FooterSectionProps} from '@/types/footer';

async function Footer({sections, socialLinks, personalInfo}: FooterSectionProps) {
	if (!personalInfo || !socialLinks) {
		return null;
	}

	return (
		<FooterClient sections={sections} socialLinks={socialLinks} personalInfo={personalInfo}/>
	);
}

export {Footer};
