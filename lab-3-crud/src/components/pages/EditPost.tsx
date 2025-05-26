import { useState } from "react";
import { useApp, type BlogPost } from "../../utils/reducers/BlogReducer";
import { PostForm } from "./PostForm";
import { Toast } from "../toast";

export const EditPostPage = () => {
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

	const handleSubmit = (updatedPost: BlogPost) => {
		dispatch({ type: "UPDATE_POST", payload: updatedPost });
		setToast({ show: true, message: "Post updated successfully!" });
		setTimeout(() => navigate("blog-detail", post.id), 1000);
	};

	return (
		<div className="container mx-auto px-4 py-8">
			<Toast
				message={toast.message}
				show={toast.show}
				onClose={() => setToast({ show: false, message: "" })}
			/>

			<div className="mb-6">
				<button
					onClick={() => navigate("blog-detail", post.id)}
					className="text-blue-600 hover:text-blue-800 mb-4 inline-block"
				>
					← Back to Post
				</button>
				<h1 className="text-3xl font-bold text-gray-800">Edit Post</h1>
			</div>

			<PostForm
				initialPost={post}
				onSubmit={handleSubmit}
				submitLabel="Update Post"
				onCancel={() => navigate("blog-detail", post.id)}
			/>
		</div>
	);
};
