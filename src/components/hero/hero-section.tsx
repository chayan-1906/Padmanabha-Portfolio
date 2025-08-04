import {getTechStacks} from '@/lib/hygraph';
import {HeroClient} from './hero-client';
import {ACTIVE_PORTFOLIO_ID} from "@/constants";
import {HeroSectionProps} from '@/types/hero';

async function HeroSection({personalInfo, socialLinks}: HeroSectionProps) {
	const techStacks = await getTechStacks(ACTIVE_PORTFOLIO_ID);

	if (!personalInfo) {
		return null;
	}

	return (
		<HeroClient personalInfo={personalInfo} socialLinks={socialLinks} techStacks={techStacks}/>
	);
}

export {HeroSection};
