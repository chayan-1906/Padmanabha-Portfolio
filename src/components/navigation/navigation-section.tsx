import {getPersonalInfo, getSections} from '@/lib/hygraph';
import {NavigationClient} from './navigation-client';
import {ACTIVE_PORTFOLIO_ID} from '@/constants';

async function NavigationSection() {
	const [sections, personalInfo] = await Promise.all([
		getSections(ACTIVE_PORTFOLIO_ID),
		getPersonalInfo(ACTIVE_PORTFOLIO_ID),
	]);

	if (!personalInfo || !sections.length) {
		return null;
	}

	return (
		<NavigationClient sections={sections} personalInfo={personalInfo}/>
	);
}

export {NavigationSection};
