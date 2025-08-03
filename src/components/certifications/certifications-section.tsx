import {getCertifications, getSections} from '@/lib/hygraph';
import {Section} from "@/types/section";
import {ACTIVE_PORTFOLIO_ID} from '@/constants';
import {CertificationsClient} from "./certifications-client";

async function CertificationsSection() {
	const [sections, certifications] = await Promise.all([
		getSections(ACTIVE_PORTFOLIO_ID),
		getCertifications(ACTIVE_PORTFOLIO_ID),
	]);

	const certificationsSection = sections.find((section: Section) => section.name === 'Certifications');

	if (!certificationsSection || !certifications.length) {
		return null;
	}

	return (
		<CertificationsClient certificationsSection={certificationsSection} certifications={certifications}/>
	);
}

export {CertificationsSection};
