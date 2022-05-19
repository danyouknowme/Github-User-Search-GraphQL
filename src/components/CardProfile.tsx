import React from "react";
import { CardProfileProps } from "../types";

const CardProfile: React.FC<CardProfileProps> = ({ user }) => {
	return (
		<div className="w-max p-3 mt-20 ml-60 border border-white rounded shadow-lg bg-slate-500 flex">
			<img
				src={user?.avatarUrl}
				alt="avatar"
				className="rounded-full w-32 h-32"
			/>
			<div className="flex-column ml-6 text-white">
				<p className="text-xl font-medium ">{user?.name}</p>
				<p>Email: {user.email || "N/A"}</p>
				<p>Company: {user?.company || "N/A"}</p>
				<p>Bio: {user?.bio || "N/A"}</p>
				<span>Followers: {user?.followers.totalCount}</span>
				<span className="ml-10">Following: {user?.following.totalCount}</span>
			</div>
		</div>
	);
};

export default CardProfile;
