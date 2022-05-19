import React from "react";
import { parseRepoName } from "../service/string";
import { CardRepoProps } from "../types";

const CardRepo: React.FC<CardRepoProps> = ({ repo }) => {
	return (
		<div className="flex-0 w-72 h-32 p-2 mb-3 rounded text-white border border-white">
			<p className=" text-lg font-medium underline mb-2 line-clamp-1">
				{parseRepoName(repo.name)}
			</p>
			<p className="line-clamp-2 text-sm h-10">{`- ${
				repo.description || "N/A"
			}`}</p>
			<p className="mt-2">
				Primany Language :{" "}
				<span className="text-lightRed">
					{repo.primaryLanguage?.name || "N/A"}
				</span>
			</p>
		</div>
	);
};

export default CardRepo;
