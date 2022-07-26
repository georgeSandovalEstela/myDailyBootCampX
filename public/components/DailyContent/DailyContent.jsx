import React from "react";
import InputPost from "./InputPost";
import Post from "./Post";
import PostsContainer from "./PostsContainer";

function DailyContent() {
  return (
    <div className="daily-content">
      <InputPost />
      <PostsContainer />
    </div>
  );
}

export default DailyContent;
