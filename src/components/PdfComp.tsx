import { Viewer, Worker } from "@react-pdf-viewer/core";
import { motion } from "framer-motion";
import "@react-pdf-viewer/core/lib/styles/index.css";

interface PdfCompProps {
	readonly workerUrl: string;
	readonly pdfFile: string;
	readonly isMobile: boolean;
}

function PdfComp({ workerUrl, pdfFile, isMobile }: PdfCompProps) {
	return (
		<motion.div
			className="pdf-file"
			initial={{ opacity: 0, scale: 0.95 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.6, delay: 0.2 }}
		>
			<div className="pdf-viewer-wrapper">
				<Worker workerUrl={workerUrl}>
					{pdfFile && (
						<Viewer
							fileUrl={pdfFile}
							defaultScale={!isMobile ? 1 : 0.8}
							theme={{
								theme: "dark",
							}}
						/>
					)}
				</Worker>
			</div>
		</motion.div>
	);
}

export default PdfComp;
