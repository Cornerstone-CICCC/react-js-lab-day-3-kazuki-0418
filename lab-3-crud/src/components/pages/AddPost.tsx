import { useState } from "react";
import { useApp, type BlogPost } from "../../utils/reducers/BlogReducer";
import { Toast } from "../toast";
import { PostForm } from "./PostForm";

export const AddPostPage = () => {
	const { dispatch, navigate } = useApp();
	const [toast, setToast] = useState({ show: false, message: "" });

	const handleSubmit = (post: BlogPost) => {
		dispatch({ type: "ADD_POST", payload: post });
		setToast({ show: true, message: "Post created successfully!" });
		setTimeout(() => navigate("blog"), 1000);
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
					onClick={() => navigate("blog")}
					className="text-blue-600 hover:text-blue-800 mb-4 inline-block"
				>
					← Back to Blog
				</button>
				<h1 className="text-3xl font-bold text-gray-800">Create New Post</h1>
			</div>

			<PostForm
				onSubmit={handleSubmit}
				submitLabel="Create Post"
				onCancel={() => navigate("blog")}
			/>
		</div>
	);
};
