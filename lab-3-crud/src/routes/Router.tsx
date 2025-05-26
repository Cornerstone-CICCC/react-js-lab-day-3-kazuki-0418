import { AddPostPage } from "../components/pages/AddPost";
import { BlogDetailPage } from "../components/pages/BlogDetail";
import { BlogListPage } from "../components/pages/BlogList";
import { EditPostPage } from "../components/pages/EditPost";
import { HomePage } from "../components/pages/Home";
import { useApp } from "../utils/reducers/BlogReducer";

export const Router = () => {
	const { currentRoute } = useApp();

	switch (currentRoute) {
		case "home":
			return <HomePage />;
		case "blog":
			return <BlogListPage />;
		case "blog-detail":
			return <BlogDetailPage />;
		case "blog-new":
			return <AddPostPage />;
		case "blog-edit":
			return <EditPostPage />;
		default:
			return <HomePage />;
	}
};
