import { createContext, useState, useEffect } from "react";

export const PostsContext = createContext(null);

export function PostsProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [preserve, setPreserve] = useState(false);

  return (
    <PostsContext.Provider
      value={{ value: [posts, setPosts, preserve, setPreserve] }}
    >
      {children}
    </PostsContext.Provider>
  );
}
