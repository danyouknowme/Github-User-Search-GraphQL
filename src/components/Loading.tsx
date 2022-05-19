import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Loading = () => {
	return (
		<div className="fixed top-0 left-0 w-full h-full overflow-auto flex items-center justify-center bg-blackOpacity">
			<AiOutlineLoading3Quarters className="text-6xl animate-spin text-white" />
		</div>
	);
};

export default Loading;
