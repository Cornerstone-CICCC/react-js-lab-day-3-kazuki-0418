import React, { createContext, useContext } from 'react';

// Types
export interface BlogPost {
  id: string;
  title: string;
  content: string;
  published: boolean;
}

export type BlogAction = 
  | { type: 'ADD_POST'; payload: BlogPost }
  | { type: 'UPDATE_POST'; payload: BlogPost }
  | { type: 'DELETE_POST'; payload: string }
  | { type: 'TOGGLE_PUBLISHED'; payload: string };

export type Route = 'home' | 'blog' | 'blog-detail' | 'blog-new' | 'blog-edit';

// Context
export interface AppContextType {
  posts: BlogPost[];
  dispatch: React.Dispatch<BlogAction>;
  currentRoute: Route;
  currentPostId: string | null;
  navigate: (route: Route, postId?: string) => void;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

export const blogReducer = (state: BlogPost[], action: BlogAction): BlogPost[] => {
  switch (action.type) {
    case 'ADD_POST':
      return [...state, action.payload];
    case 'UPDATE_POST':
      return state.map(post => 
        post.id === action.payload.id ? action.payload : post
      );
    case 'DELETE_POST':
      return state.filter(post => post.id !== action.payload);
    case 'TOGGLE_PUBLISHED':
      return state.map(post => 
        post.id === action.payload 
          ? { ...post, published: !post.published }
          : post
      );
    default:
      return state;
  }
};


export const generateId = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
};