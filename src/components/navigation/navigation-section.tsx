import {Suspense} from "react";
import {NavigationClient} from './navigation-client';
import {NavigationSectionProps} from '@/types/navigation';

async function NavigationSection({sections, personalInfo}: NavigationSectionProps) {
	if (!personalInfo || !sections.length) {
		return null;
	}

	return (
		<Suspense fallback={null}>
			<NavigationClient sections={sections} personalInfo={personalInfo}/>
		</Suspense>
	);
}

export {NavigationSection};
