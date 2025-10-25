import {type HTMLMotionProps} from "framer-motion";

export interface GradientButtonProps extends Omit<HTMLMotionProps<"button">, "style"> {
	asChild?: boolean;
}
