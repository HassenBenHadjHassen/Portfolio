import { Viewer, Worker } from "@react-pdf-viewer/core"
import "@react-pdf-viewer/core/lib/styles/index.css"

interface PdfCompProps {
  workerUrl: string;
  pdfFile: string;
  isMobile: boolean;
}

function PdfComp({ workerUrl, pdfFile, isMobile }: PdfCompProps) {



  return (
    <div className="pdf-file">
      <Worker workerUrl={workerUrl}>
        {pdfFile && (
          <Viewer 
            fileUrl={pdfFile} 
            defaultScale={!isMobile ? 1 : 0.6}
          />
        )}
      </Worker>
    </div>
  );
}

export default PdfComp;
