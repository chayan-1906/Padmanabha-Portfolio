import {Suspense} from "react";
import {FooterClient} from "./footer-client";
import {FooterSectionProps} from "@/types/footer";

async function Footer({sections, socialLinks, personalInfo}: FooterSectionProps) {
	if (!personalInfo || !socialLinks) {
		return null;
	}

	return (
		<Suspense fallback={null}>
			<FooterClient sections={sections} socialLinks={socialLinks} personalInfo={personalInfo}/>
		</Suspense>
	);
}

export {Footer};
