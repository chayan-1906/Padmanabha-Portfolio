import {Section} from "@/types/section";

export interface Certification {
	name: string;
	issuer: string;
	date: string;
	credentialId: string;
	url: string;
}

export interface CertificationsClientProps {
	certificationsSection: Section;
	certifications: Certification[];
}
