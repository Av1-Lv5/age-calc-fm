import { useState } from "react";

// components
import Input from "./Input";

// utils
import calculateDateDifference from "../utils/calculateDateDifference";
import isValidDate from "../utils/isValidDate";

// types
type Props = {
	setResult: React.Dispatch<
		React.SetStateAction<{
			days: string;
			months: string;
			years: string;
		}>
	>;
};

function Form(props: Props) {
	const { setResult } = props;

	const [errorMessage, setErrorMessage] = useState("");

	function resetAllErrorMessages() {
		setErrorMessage(() => {
			return "";
		});
	}

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		// get all form data
		const formData = new FormData(e.currentTarget);
		const { day, month, year } = Object.fromEntries(formData);

		// check if every field is filled
		if (!day || !month || !year) {
			setErrorMessage(() => {
				return "Every field is Required";
			});
		} else {
			const dateString = `${year}-${month}-${day}`;

			if (isValidDate(dateString)) {
				const currentDate = new Date();
				const birthDate = new Date(dateString);

				const isDateInPast = birthDate < currentDate;

				if (isDateInPast) {
					setResult(() => {
						const { years, months, days } = calculateDateDifference(
							currentDate,
							birthDate
						);
						return {
							years: years.toString(),
							months: months.toString(),
							days: days.toString(),
						};
					});
					resetAllErrorMessages();
				} else {
					setErrorMessage(() => {
						return "Entered Date must be in past";
					});
				}
			} else {
				setErrorMessage(() => {
					return "enter valid date";
				});
			}
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			{/* flex container */}
			<div className="flex gap-3">
				<Input id="day" label="day" placeholder="DD" />
				<Input id="month" label="month" placeholder="MM" />
				<Input id="year" label="year" placeholder="YYYY" />
			</div>
			<div
				className="text-red-600 text-xs tracking-tighter italic pt-1"
				role="note"
			>
				{errorMessage}
			</div>
			<div className="flex items-center my-3 relative">
				<div className="w-full absolute h-0 border-b border-neutral-300"></div>
				<input
					type="submit"
					value="↓"
					className="bg-violet-500 text-white rounded-full w-10 h-10 z-10 ml-auto focus:outline-neutral-800 cursor-pointer"
				/>
			</div>
		</form>
	);
}

export default Form;
