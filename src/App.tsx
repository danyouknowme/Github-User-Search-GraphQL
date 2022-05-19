import { IoIosSearch } from "react-icons/io";

const App = () => {
	return (
		<div className="w-screen h-screen bg-dark">
			<div className="flex flex-col items-center">
				<img
					src="github-logo.png"
					className="App-logo"
					alt="logo"
					width="450"
				/>
				<div className="flex items-center bg-white rounded">
					<input
						className="p-2 rounded border border-white rounded-r-none outline-none"
						type="text"
					/>
					<IoIosSearch className="text-xl mx-2 text-dark cursor-pointer" />
				</div>
			</div>
		</div>
	);
};

export default App;
