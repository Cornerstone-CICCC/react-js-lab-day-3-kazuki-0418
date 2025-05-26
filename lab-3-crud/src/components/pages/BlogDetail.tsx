import { useState } from "react";
import { useApp } from "../../utils/reducers/BlogReducer";
import { Toast } from "../toast";

export const BlogDetailPage = () => {
	const { posts, dispatch, navigate, currentPostId } = useApp();
	const [toast, setToast] = useState({ show: false, message: "" });

	const post = posts.find((p) => p.id === currentPostId);

	if (!post) {
		return (
			<div className="container mx-auto px-4 py-8 text-center">
				<h1 className="text-2xl font-bold text-gray-800 mb-4">
					Post Not Found
				</h1>
				<button
					onClick={() => navigate("blog")}
					className="text-blue-600 hover:text-blue-800"
				>
					← Back to Blog
				</button>
			</div>
		);
	}

	const handleDelete = () => {
		if (window.confirm("Are you sure you want to delete this post?")) {
			dispatch({ type: "DELETE_POST", payload: post.id });
			setToast({ show: true, message: "Post deleted successfully!" });
			setTimeout(() => navigate("blog"), 1000);
		}
	};

	const togglePublished = () => {
		dispatch({ type: "TOGGLE_PUBLISHED", payload: post.id });
		setToast({
			show: true,
			message: `Post ${post.published ? "unpublished" : "published"} successfully!`,
		});
	};

	return (
		<div className="container mx-auto px-4 py-8">
			<Toast
				message={toast.message}
				show={toast.show}
				onClose={() => setToast({ show: false, message: "" })}
			/>

			<div className="max-w-4xl mx-auto">
				<div className="mb-6">
					<button
						onClick={() => navigate("blog")}
						className="text-blue-600 hover:text-blue-800 mb-4 inline-block"
					>
						← Back to Blog
					</button>
				</div>

				<article className="bg-white rounded-lg shadow-lg p-8">
					<header className="mb-6">
						<h1 className="text-4xl font-bold text-gray-800 mb-4">
							{post.title}
						</h1>
						<div className="flex items-center space-x-4">
							<span
								className={`px-3 py-1 rounded-full text-sm ${
									post.published
										? "bg-green-100 text-green-800"
										: "bg-gray-100 text-gray-800"
								}`}
							>
								{post.published ? "Published" : "Draft"}
							</span>
						</div>
					</header>

					<div className="prose max-w-none mb-8">
						<div className="text-gray-700 leading-relaxed whitespace-pre-wrap">
							{post.content}
						</div>
					</div>

					<div className="flex flex-wrap gap-4 pt-6 border-t border-gray-200">
						<button
							onClick={() => navigate("blog-edit", post.id)}
							className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
						>
							Edit Post
						</button>
						<button
							onClick={togglePublished}
							className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition-colors"
						>
							{post.published ? "Unpublish" : "Publish"}
						</button>
						<button
							onClick={handleDelete}
							className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
						>
							Delete Post
						</button>
					</div>
				</article>
			</div>
		</div>
	);
};
