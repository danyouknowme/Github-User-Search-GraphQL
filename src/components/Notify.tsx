import React from "react";
import { NotifyProps } from "../types";

const Notify: React.FC<NotifyProps> = ({ message, active }) => {
	return (
		<div
			className={`flex bg-white absolute top-8 ${
				active ? "-right-72" : "right-0"
			}
			transition-all duration-700 ease-in-out`}
		>
			<div className="flex w-4 bg-lightRed"></div>
			<p className="px-3 py-4 text-lg">{message}</p>
		</div>
	);
};

export default Notify;
