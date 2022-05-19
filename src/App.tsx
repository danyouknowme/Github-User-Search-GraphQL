import { useLazyQuery } from "@apollo/client";
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { USER_QUERY } from "./client/query";
import Loading from "./components/Loading";
import Notify from "./components/Notify";
import CardProfile from "./components/CardProfile";
import CardRepo from "./components/CardRepo";
import { Repository } from "./types";

const App = () => {
	const [username, setUsername] = useState<string>("");
	const [getUser, { error, loading, data }] = useLazyQuery(USER_QUERY);

	const handleSearch = () => {
		getUser({ variables: { username } });
		setUsername("");
	};

	return (
		<div className="w-screen h-screen bg-dark flex flex-col justify-start">
			{loading && <Loading />}
			<Notify message={"Could not find this username."} active={!error} />
			<div className="flex flex-col items-center">
				<img
					src="github-logo.png"
					className="App-logo"
					alt="logo"
					width="450"
				/>
				<div className="flex items-center bg-white rounded">
					<input
						className="p-2 rounded border border-white rounded-r-none outline-none text-dark"
						type="text"
						placeholder="Github username..."
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
					<IoIosSearch
						className="text-xl mx-2 text-dark cursor-pointer"
						onClick={handleSearch}
					/>
				</div>
			</div>
			{data && (
				<>
					<CardProfile user={data.user} />
					<div className="w-full mt-5 pb-5 px-10">
						<p className="my-5 text-xl font-medium text-white">Repositories</p>
						<div className="w-full overflow-x-auto gap-4 flex">
							{data.user.repositories.nodes
								.slice(0)
								.reverse()
								.map((repo: Repository, index: number) => (
									<CardRepo repo={repo} key={index} />
								))}
						</div>
					</div>
				</>
			)}
			<div className="absolute left-1/2 bottom-2 -translate-x-1/2 text-white">
				<span>
					Develop with
					<FaRegHeart className="inline-block mx-1 text-lightRed" />
					by Thanathip S.
				</span>
			</div>
		</div>
	);
};

export default App;
