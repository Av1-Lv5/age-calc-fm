export default function calculateDateDifference(date1: Date, date2: Date) {
	const diffTime = Math.abs(date1.getTime() - date2.getTime());
	const diffDate = new Date(diffTime);

	const years = diffDate.getUTCFullYear() - 1970;
	const months = diffDate.getUTCMonth();
	const days = diffDate.getUTCDate() - 1;

	return { years, months, days };
}

// Example usage:
// const date1 = new Date('2023-03-04');
// const date2 = new Date('2024-03-05');
// const diff = differenceInYearsMonthsDays(date1, date2);
// console.log(`${diff.years} years, ${diff.months} months, and ${diff.days} days`);
// Output: 1 years, 0 months, and 1 days
