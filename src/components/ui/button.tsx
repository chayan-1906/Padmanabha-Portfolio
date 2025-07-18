import * as React from "react";
import {cn} from "@/lib/utils";

const buttonVariants = {
	default: "bg-gray-900 text-white hover:bg-gray-800",
	ghost: "hover:bg-gray-100 dark:hover:bg-gray-800",
	outline: "border border-gray-300 bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:hover:bg-gray-800"
};

const buttonSizes = {
	default: "h-9 px-4 py-2",
	sm: "h-8 px-3 text-xs",
	lg: "h-10 px-8",
	icon: "h-9 w-9"
};

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: keyof typeof buttonVariants;
	size?: keyof typeof buttonSizes;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({className, variant = "default", size = "default", ...props}, ref) => {
		return (
			<button
				className={cn(
					"inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50",
					buttonVariants[variant],
					buttonSizes[size],
					className
				)}
				ref={ref} {...props}
			/>
		);
	}
);
Button.displayName = "Button";

export {Button};
