import React from "react";
import { Helmet } from "react-helmet-async";

interface SEOProps {
	title: string;
	description: string;
	keywords?: string;
	canonical?: string;
	ogImage?: string;
	ogType?: string;
	structuredData?: any;
}

const SEO: React.FC<SEOProps> = ({
	title,
	description,
	keywords = "full stack developer, react developer, node.js developer, web developer, portfolio, javascript, typescript, frontend developer, backend developer, software engineer, hassen ben hadj hassen",
	canonical = "https://hassenbenhadjhassen.com",
	ogImage = "https://hassenbenhadjhassen.com/portfolio.png",
	ogType = "website",
	structuredData,
}) => {
	const fullTitle = title.includes("Hassen Ben Hadj Hassen")
		? title
		: `${title} | Hassen Ben Hadj Hassen - Full Stack Developer`;

	return (
		<Helmet>
			{/* Basic Meta Tags */}
			<title>{fullTitle}</title>
			<meta name="description" content={description} />
			<meta name="keywords" content={keywords} />
			<link rel="canonical" href={canonical} />

			{/* Open Graph Tags */}
			<meta property="og:title" content={fullTitle} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={ogImage} />
			<meta property="og:image:width" content="1200" />
			<meta property="og:image:height" content="630" />
			<meta
				property="og:image:alt"
				content={`${title} - Hassen Ben Hadj Hassen Portfolio`}
			/>
			<meta property="og:url" content={canonical} />
			<meta property="og:type" content={ogType} />
			<meta
				property="og:site_name"
				content="Hassen Ben Hadj Hassen Portfolio"
			/>
			<meta property="og:locale" content="en_US" />

			{/* Twitter Tags */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:site" content="@hassenbenhadj" />
			<meta name="twitter:creator" content="@hassenbenhadj" />
			<meta name="twitter:title" content={fullTitle} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={ogImage} />
			<meta
				name="twitter:image:alt"
				content={`${title} - Hassen Ben Hadj Hassen Portfolio`}
			/>

			{/* Additional SEO Tags */}
			<meta
				name="robots"
				content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
			/>
			<meta name="googlebot" content="index, follow" />
			<meta name="bingbot" content="index, follow" />

			{/* Structured Data */}
			{structuredData && (
				<script type="application/ld+json">
					{JSON.stringify(structuredData)}
				</script>
			)}
		</Helmet>
	);
};

export default SEO;
