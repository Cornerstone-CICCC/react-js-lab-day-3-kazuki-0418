import { memo } from "react";
import { useApp } from "../utils/reducers/BlogReducer";

export const Header = memo(({ firstname }: { firstname: string }) => {
	const { navigate, currentRoute } = useApp();

	return (
		<header className="bg-blue-600 text-white shadow-lg">
			<div className="container mx-auto px-4 py-4 flex justify-between items-center">
				<nav className="flex space-x-6">
					<button
						onClick={() => navigate("home")}
						className={`hover:text-blue-200 transition-colors ${
							currentRoute === "home" ? "text-blue-200 underline" : ""
						}`}
					>
						Home
					</button>
					<button
						onClick={() => navigate("blog")}
						className={`hover:text-blue-200 transition-colors ${
							currentRoute === "blog" ? "text-blue-200 underline" : ""
						}`}
					>
						Blog
					</button>
				</nav>
				<div className="text-blue-100 font-medium">Welcome, {firstname}</div>
			</div>
		</header>
	);
});
