import { useState } from "react";
import { generateId, type BlogPost } from "../../utils/reducers/BlogReducer";

export const PostForm = ({
	initialPost,
	onSubmit,
	submitLabel,
	onCancel,
}: {
	initialPost?: BlogPost;
	onSubmit: (post: BlogPost) => void;
	submitLabel: string;
	onCancel: () => void;
}) => {
	const [title, setTitle] = useState(initialPost?.title || "");
	const [content, setContent] = useState(initialPost?.content || "");
	const [published, setPublished] = useState(initialPost?.published || false);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (!title.trim() || !content.trim()) return;

		const post: BlogPost = {
			id: initialPost?.id || generateId(),
			title: title.trim(),
			content: content.trim(),
			published,
		};

		onSubmit(post);
	};

	return (
		<div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
			<div onSubmit={handleSubmit}>
				<div className="mb-6">
					<label
						htmlFor="title"
						className="block text-sm font-medium text-gray-700 mb-2"
					>
						Title
					</label>
					<input
						type="text"
						id="title"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						required
					/>
				</div>

				<div className="mb-6">
					<label
						htmlFor="content"
						className="block text-sm font-medium text-gray-700 mb-2"
					>
						Content
					</label>
					<textarea
						id="content"
						value={content}
						onChange={(e) => setContent(e.target.value)}
						rows={10}
						className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						required
					/>
				</div>

				<div className="mb-6">
					<label className="flex items-center">
						<input
							type="checkbox"
							checked={published}
							onChange={(e) => setPublished(e.target.checked)}
							className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
						/>
						<span className="ml-2 text-sm text-gray-700">
							Publish immediately
						</span>
					</label>
				</div>

				<div className="flex gap-4">
					<button
						onClick={handleSubmit}
						disabled={!title.trim() || !content.trim()}
						className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
					>
						{submitLabel}
					</button>
					<button
						onClick={onCancel}
						className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors"
					>
						Cancel
					</button>
				</div>
			</div>
		</div>
	);
};
