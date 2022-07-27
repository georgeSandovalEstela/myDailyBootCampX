import React, { useEffect, useState } from "react";
import { getPosts } from "../../Api/Api";
import Post from "./Post";

function PostsContainer() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts().then((data) => setPosts(data));
  }, []);
  return (
    <div className="posts-container">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostsContainer;
