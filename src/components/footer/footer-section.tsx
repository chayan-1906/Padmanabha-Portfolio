import {getPersonalInfo, getSections, getSocialLinks} from '@/lib/hygraph';
import {FooterClient} from "./footer-client";
import {ACTIVE_PORTFOLIO_ID} from '@/constants';

async function Footer() {
	const [sections, socialLinks, personalInfo] = await Promise.all([
		getSections(ACTIVE_PORTFOLIO_ID),
		getSocialLinks(ACTIVE_PORTFOLIO_ID),
		getPersonalInfo(ACTIVE_PORTFOLIO_ID),
	]);

	if (!personalInfo || !socialLinks) {
		return null;
	}

	return (
		<FooterClient sections={sections} socialLinks={socialLinks} personalInfo={personalInfo}/>
	);
}

export {Footer};
