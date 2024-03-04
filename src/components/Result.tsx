export type Props = {
	result: {
		days: string;
		months: string;
		years: string;
	};
};
function Result(props: Props) {
	const { result } = props;
	return (
		<div>
			<div className="flex gap-3 items-center font-extrabold text-4xl lowercase italic">
				<span className="text-violet-500 tracking-widest">
					{result.years}
				</span>
				<span>Years</span>
			</div>
			<div className="flex gap-3 items-center font-extrabold text-4xl lowercase italic">
				<span className="text-violet-500 tracking-widest">
					{result.months}
				</span>
				<span>Months</span>
			</div>
			<div className="flex gap-3 items-center font-extrabold text-4xl lowercase italic">
				<span className="text-violet-500 tracking-widest">
					{result.days}
				</span>
				<span>Days</span>
			</div>
		</div>
	);
}

export default Result;
