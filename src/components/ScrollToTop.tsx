import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scrolls to top on route change, OR scrolls to the hash element if present.
 * This enables /#contact-style navigation without setTimeout race conditions.
 */
function ScrollToTop() {
	const { pathname, hash } = useLocation();

	useEffect(() => {
		if (hash) {
			const id = hash.replace("#", "");
			requestAnimationFrame(() => {
				const el = document.getElementById(id);
				if (el) {
					const yOffset = -80; // Fixed navbar height offset
					const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
					window.scrollTo({ top: y, behavior: "smooth" });
				}
			});
		} else {
			window.scrollTo({ top: 0, behavior: "instant" });
		}
	}, [pathname, hash]);

	return null;
}

export default ScrollToTop;
