import {Section} from './section';
import {PersonalInfo} from './hero';

export interface NavigationSectionProps {
	sections: Section[];
	personalInfo: PersonalInfo;
}

export interface NavigationClientProps {
	sections: Section[];
	personalInfo: PersonalInfo;
}
