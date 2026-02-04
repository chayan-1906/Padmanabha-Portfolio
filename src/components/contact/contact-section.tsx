import {Suspense} from "react";
import {Section} from "@/types/section";
import {ContactClient} from "./contact-client";
import {ContactSectionProps} from "@/types/contact";

async function ContactSection({sections, socialLinks, personalInfo}: ContactSectionProps) {
    const contactSection: Section | undefined = sections.find((section: Section) => section.name === 'Contact');

    if (!contactSection) {
        return null;
    }

    return (
        <Suspense fallback={null}>
            <ContactClient contactSection={contactSection} socialLinks={socialLinks} personalInfo={personalInfo}/>
        </Suspense>
    );
}

export {ContactSection};
