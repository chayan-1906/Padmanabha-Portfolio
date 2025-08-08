import {type ClassValue, clsx} from "clsx";
import {twMerge} from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function camelToWords(text: string): string {
	return text
		.replace(/([A-Z])/g, ' $1')   // insert space before capitals
		.replace(/^./, str => str.toUpperCase()); // capitalize first letter
}
