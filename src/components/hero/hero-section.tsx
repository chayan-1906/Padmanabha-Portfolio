import {getTechStacks} from '@/lib/hygraph';
import {HeroClient} from './hero-client';
import {ACTIVE_PORTFOLIO_ID} from "@/constants";
import {HeroSectionProps} from '@/types/hero';

async function HeroSection({personalInfo, skillsData, socialLinks}: HeroSectionProps) {
	const techStacks = await getTechStacks(ACTIVE_PORTFOLIO_ID);

	if (!personalInfo) {
		return null;
	}

	return (
		<HeroClient personalInfo={personalInfo} skillsData={skillsData} techStacks={techStacks} socialLinks={socialLinks}/>
	);
}

export {HeroSection};
