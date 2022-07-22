import React from "react";
import Profile from "./Profile";
import Team from "./Team";

function SideBarLeft() {
  return (
    <div className="sidebar-left">
      <Profile />
      <Team />
    </div>
  );
}
export default SideBarLeft;
