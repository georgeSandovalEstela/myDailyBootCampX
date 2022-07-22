import React from "react";
import Story from "./Story";

function Stories() {
  return (
    <div className="stories">
      <h2 className="tittle-stories">Stories</h2>
      <ul className="stories-sqare">
        <Story />
        <Story />
        <Story />
      </ul>
    </div>
  );
}

export default Stories;
