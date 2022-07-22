import React from "react";
import InputPost from "./InputPost";
import Post from "./Post";

function DailyContent() {
  return (
    <div className="daily-content">
      <InputPost />
      <div className="posts-container">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}

export default DailyContent;
