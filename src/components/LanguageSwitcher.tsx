import React from "react";
import { useTranslation } from "react-i18next";
import { Dropdown } from "react-bootstrap";
import { FaGlobe } from "react-icons/fa";

const LanguageSwitcher: React.FC = () => {
	const { i18n } = useTranslation();

	const changeLanguage = (language: string) => {
		i18n.changeLanguage(language);
	};

	const getCurrentLanguage = () => {
		return i18n.language === "fr" ? "Français" : "English";
	};

	const getCurrentFlag = () => {
		return i18n.language === "fr" ? "🇫🇷" : "🇬🇧";
	};

	return (
		<Dropdown className="language-switcher">
			<Dropdown.Toggle
				variant="outline-light"
				size="sm"
				className="d-flex align-items-center gap-2 nav-link"
				style={{ border: "none", background: "transparent" }}
			>
				<FaGlobe style={{ marginBottom: "2px" }} />
				<span className="d-none d-md-inline">{getCurrentLanguage()}</span>
				<span className="d-md-none">{getCurrentFlag()}</span>
			</Dropdown.Toggle>

			<Dropdown.Menu>
				<Dropdown.Item
					onClick={() => changeLanguage("en")}
					className={i18n.language === "en" ? "active" : ""}
				>
					🇬🇧 English
				</Dropdown.Item>
				<Dropdown.Item
					onClick={() => changeLanguage("fr")}
					className={i18n.language === "fr" ? "active" : ""}
				>
					🇫🇷 Français
				</Dropdown.Item>
			</Dropdown.Menu>
		</Dropdown>
	);
};

export default LanguageSwitcher;
