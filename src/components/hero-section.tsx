import {getPersonalInfo, getSocialLinks, getTechStacks} from '@/lib/hygraph';
import {HeroClient} from './hero/hero-client';
import {ACTIVE_PORTFOLIO_ID} from "@/constants";

async function HeroSection() {
	const [personalInfo, socialLinks, techStacks] = await Promise.all([
		getPersonalInfo(ACTIVE_PORTFOLIO_ID),
		getSocialLinks(ACTIVE_PORTFOLIO_ID),
		getTechStacks(ACTIVE_PORTFOLIO_ID),
	]);

	if (!personalInfo) {
		return null;
	}

	return (
		<HeroClient personalInfo={personalInfo} socialLinks={socialLinks} techStacks={techStacks}/>
	);
}

export {HeroSection};
