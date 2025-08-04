import {NavigationClient} from './navigation-client';
import {NavigationSectionProps} from '@/types/navigation';

async function NavigationSection({sections, personalInfo}: NavigationSectionProps) {
	if (!personalInfo || !sections.length) {
		return null;
	}

	return (
		<NavigationClient sections={sections} personalInfo={personalInfo}/>
	);
}

export {NavigationSection};
