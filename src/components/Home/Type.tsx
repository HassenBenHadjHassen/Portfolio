import Typewriter from "typewriter-effect";
import { useTranslation } from "react-i18next";

function Type() {
	const { t } = useTranslation();

	return (
		<Typewriter
			options={{
				strings: [
					t("home.typewriter.line1"),
					t("home.typewriter.line2"),
					t("home.typewriter.line3"),
					t("home.typewriter.line4"),
				],
				autoStart: true,
				loop: true,
				deleteSpeed: 50,
			}}
		/>
	);
}

export default Type;
