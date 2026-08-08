
interface HighlightConfig {
	words: string[];
	className: string;
}

interface HighlightTextProps {
	text: string;
	highlights: HighlightConfig[];
}

function HighlightText({ text, highlights }: HighlightTextProps) {
	// Split by spaces, retaining words
	const words = text.split(" ");

	return (
		<>
			{words.map((word, index) => {
				// Strip common punctuation for matching
				const cleanWord = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"']/g, "").toLowerCase();
				
				if (!cleanWord) {
					return `${word} `;
				}

				// Find if the word matches any configured highlight list
				const match = highlights.find((config) =>
					config.words.some((w) => {
						const cleanHighlight = w.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"']/g, "").toLowerCase();
						return cleanWord.includes(cleanHighlight) || cleanHighlight.includes(cleanWord);
					})
				);

				if (match) {
					return (
						<span key={`hl-${index}`} className={match.className}>
							{" "}{word}{" "}
						</span>
					);
				}

				return `${word} `;
			})}
		</>
	);
}

export default HighlightText;
export type { HighlightConfig };
