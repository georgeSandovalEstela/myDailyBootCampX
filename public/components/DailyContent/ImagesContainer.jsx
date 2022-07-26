import React from "react";
import InputPost from "./InputPost";
import Post from "./Post";
import PostsContainer from "./PostsContainer";

function ImagesContainer({ images }) {

  return (
    <div className="images">
      <img
        src={images[0]}
        alt="images post"
        width="342px"
        height="239px"
        style={{ borderRadius: "6px" }}
      />
      <div className="sub-img">
        <img
          src={images[1]}
          alt="images post"
          width="223px"
          height="115px"
          style={{ borderRadius: "6px" }}
        />
        <img
          src={images[2]}
          alt="images post"
          width="223px"
          height="115px"
          style={{ borderRadius: "6px" }}
        />
      </div>
    </div>
  );
}

export default ImagesContainer;
