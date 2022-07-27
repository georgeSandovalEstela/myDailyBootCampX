import React from "react";
import FollowUser from "./FollowUser";

function Follow() {
  return (
    <div className="Follow-P">
      <h3>Who to Follow</h3>
      <div className="follow">
        <FollowUser />
        <FollowUser />
      </div>
    </div>
  );
}

export default Follow;
