import {Section} from "@/types/section";

export interface Education {
	degree: string;
	institution: string;
	logo: {
		id: string;
		url: string;
	};
	location: string;
	period: string;
	cgpa: string;
	highlights: string;
}

export interface EducationSectionProps {
	sections: Section[];
}

export interface EducationClientProps {
	educationSection: Section;
	educations: Education[];
}
