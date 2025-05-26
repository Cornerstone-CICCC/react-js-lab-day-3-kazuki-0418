import { useApp } from "../../utils/reducers/BlogReducer";

export const HomePage = () => {
	const { navigate } = useApp();

	return (
		<div className="container mx-auto px-4 py-8">
			<div className="text-center">
				<h1 className="text-4xl font-bold text-gray-800 mb-6">
					Welcome to the Blog
				</h1>
				<p className="text-xl text-gray-600 mb-8">
					A modern CRUD application built with React, useReducer, useContext,
					and memo
				</p>
				<div className="space-y-4">
					<p className="text-gray-600">
						This application demonstrates advanced React patterns including:
					</p>
					<ul className="text-left max-w-md mx-auto space-y-2 text-gray-700">
						<li>• useReducer for complex state management</li>
						<li>• useContext for global state sharing</li>
						<li>• memo for performance optimization</li>
						<li>• Full CRUD operations</li>
						<li>• Client-side routing</li>
					</ul>
				</div>
				<button
					onClick={() => navigate("blog")}
					className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-block mt-6"
				>
					View All Posts
				</button>
			</div>
		</div>
	);
};
