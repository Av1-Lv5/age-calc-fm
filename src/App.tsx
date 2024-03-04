// Components
import Form from "./components/Form";
import Result from "./components/Result";

import { useState } from "react";

function App() {
	const [result, setResult] = useState({
		days: "--",
		months: "--",
		years: "--",
	});
	return (
		<div className="bg-gray-200 flex items-center justify-center h-[100vh]">
			{/* Card */}
			<div className="bg-white w-full max-w-sm px-6 py-10 rounded-t-3xl rounded-bl-3xl rounded-br-[90px]">
				<Form setResult={setResult} />
				<Result result={result} />
			</div>
		</div>
	);
}

export default App;
