import { useApp } from "../../utils/reducers/BlogReducer";

export const BlogListPage = () => {
	const { posts, navigate } = useApp();

	return (
		<div className="container mx-auto px-4 py-8">
			<div className="flex justify-between items-center mb-8">
				<h1 className="text-3xl font-bold text-gray-800">Blog Posts</h1>
				<button
					onClick={() => navigate("blog-new")}
					className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
				>
					Create New Post
				</button>
			</div>

			{posts.length === 0 ? (
				<div className="text-center py-12">
					<p className="text-gray-500 text-lg">
						No posts yet. Create your first post!
					</p>
				</div>
			) : (
				<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					{posts.map((post) => (
						<div
							key={post.id}
							className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
						>
							<h2 className="text-xl font-semibold text-gray-800 mb-2">
								{post.title}
							</h2>
							<p className="text-gray-600 mb-4">
								{post.content.length > 150
									? `${post.content.substring(0, 150)}...`
									: post.content}
							</p>
							<div className="flex justify-between items-center">
								<span
									className={`px-2 py-1 rounded text-sm ${
										post.published
											? "bg-green-100 text-green-800"
											: "bg-gray-100 text-gray-800"
									}`}
								>
									{post.published ? "Published" : "Draft"}
								</span>
								<button
									onClick={() => navigate("blog-detail", post.id)}
									className="text-blue-600 hover:text-blue-800 font-medium"
								>
									Read More →
								</button>
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
};
