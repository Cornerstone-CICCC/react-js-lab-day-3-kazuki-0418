import { useReducer, useState } from "react";
import { AppContext, blogReducer, generateId, type BlogPost, type Route } from "../utils/reducers/BlogReducer";

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
	const initialPosts: BlogPost[] = [
		{
			id: generateId(),
			title: "Welcome to Our Blog",
			content:
				"This is your first blog post! This application demonstrates a full CRUD implementation using React hooks like useReducer and useContext.\n\nYou can create, read, update, and delete posts seamlessly. The application uses:\n\n• useReducer for complex state management\n• useContext for sharing state across components\n• memo for performance optimization\n• Custom routing system\n\nFeel free to edit this post or create new ones to test out all the functionality!",
			published: true,
		},
		{
			id: generateId(),
			title: "Understanding React Hooks",
			content:
				"React Hooks have revolutionized how we write React components. In this application, we're using several important hooks:\n\n• useReducer for complex state management - handles all CRUD operations\n• useContext for sharing state across components - makes posts and dispatch available globally\n• memo for performance optimization - prevents unnecessary re-renders of the Header component\n• useState for local component state - manages form inputs and toast notifications\n\nThese hooks work together to create a maintainable and efficient application architecture without the need for external state management libraries.",
			published: false,
		},
		{
			id: generateId(),
			title: "CRUD Operations Explained",
			content:
				"This blog application implements full CRUD (Create, Read, Update, Delete) functionality:\n\n**Create**: Use the 'Create New Post' button to add new blog posts\n**Read**: View all posts on the blog listing page, or click 'Read More' for full details\n**Update**: Edit existing posts using the 'Edit Post' button on the detail page\n**Delete**: Remove posts permanently with the 'Delete Post' button\n\nAll operations are handled through the useReducer hook, which provides predictable state updates and makes the application logic easy to understand and debug.",
			published: true,
		},
	];

	const [posts, dispatch] = useReducer(blogReducer, initialPosts);
	const [currentRoute, setCurrentRoute] = useState<Route>("home");
	const [currentPostId, setCurrentPostId] = useState<string | null>(null);

	const navigate = (route: Route, postId?: string) => {
		setCurrentRoute(route);
		setCurrentPostId(postId || null);
	};

	return (
		<AppContext.Provider
			value={{
				posts,
				dispatch,
				currentRoute,
				currentPostId,
				navigate,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
