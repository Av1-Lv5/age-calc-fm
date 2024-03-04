export type Props = {
	id: string;
	label: string;
	placeholder: string;
};

function Input(props: Props) {
	const { id, label, placeholder } = props;

	return (
		<div className="flex flex-col">
			<label
				htmlFor={id}
				className="text-xs font-semibold text-neutral-500 uppercase pb-1"
			>
				{label}
			</label>
			<input
				className="border border-neutral-400/50 font-mono rounded-sm w-20 px-3 py-1 font-semibold placeholder:font-semibold focus:outline-purple-600"
				placeholder={placeholder}
				type="text"
				name={id}
				id={id}
			/>
		</div>
	);
}

export default Input;
