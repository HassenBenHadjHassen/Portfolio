import { useInView } from "framer-motion";
import { useRef } from "react";

export const useScrollAnimation = (threshold = 0.1) => {
	const ref = useRef(null);
	const isInView = useInView(ref, {
		once: true,
		amount: threshold,
	});

	return { ref, isInView };
};
