import {ContactReasonValue} from "@/types/contact";

export interface CTAButton {
	label: string;
	reason: ContactReasonValue;
}

export interface CTAProps {
	title: string;
	subtext?: string;
	buttons: CTAButton[];
}
