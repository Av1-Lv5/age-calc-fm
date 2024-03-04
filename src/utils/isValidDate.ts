export default function isValidDate(dateString: string): boolean {
	// example dateString 2023-10-27
	const timestamp = Date.parse(dateString);
	return !isNaN(timestamp);
}
