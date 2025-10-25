import * as React from "react";
import {motion} from "framer-motion";
import {cn} from "@/lib/utils";
import {GradientButtonProps} from "@/types/gradient-button";

const GradientButton = React.forwardRef<HTMLButtonElement, GradientButtonProps>(({className, children, ...props}, ref) => {
		return (
			<motion.button ref={ref} className={cn("inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 cursor-pointer", className)}
			               style={{background: 'linear-gradient(45deg, #6366f1, #8b5cf6, #ec4899)', color: 'white'}}{...props}>
				{children}
			</motion.button>
		);
	}
);

GradientButton.displayName = "GradientButton";

export {GradientButton};
