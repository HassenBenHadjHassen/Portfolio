import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface PdfCompProps {
	readonly workerUrl: string;
	readonly pdfFile: string;
	readonly isMobile: boolean;
}

function PdfComp({ workerUrl, pdfFile, isMobile }: PdfCompProps) {
	const [pdfComponents, setPdfComponents] = useState<{
		Viewer: any;
		Worker: any;
	} | null>(null);

	useEffect(() => {
		const loadPdfComponents = async () => {
			try {
				const module = await import("@react-pdf-viewer/core");
				await import("@react-pdf-viewer/core/lib/styles/index.css");
				setPdfComponents({
					Viewer: module.Viewer,
					Worker: module.Worker,
				});
			} catch (error) {
				console.error("Failed to load PDF viewer:", error);
			}
		};

		loadPdfComponents();
	}, []);

	return (
		<motion.div
			className="pdf-file"
			initial={{ opacity: 0, scale: 0.95 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.6, delay: 0.2 }}
		>
			<div className="pdf-viewer-wrapper">
				{pdfComponents && (
					<pdfComponents.Worker workerUrl={workerUrl}>
						{pdfFile && (
							<pdfComponents.Viewer
								fileUrl={pdfFile}
								defaultScale={!isMobile ? 1 : 0.8}
								theme={{
									theme: "dark",
								}}
							/>
						)}
					</pdfComponents.Worker>
				)}
			</div>
		</motion.div>
	);
}

export default PdfComp;
