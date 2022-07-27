import React from "react";
import Follow from "./Follow";
import Notice from "./Notice";
import Stories from "./Stories";

function SideBarRigth() {
  return (
    <div className="sidebar-right">
      <Stories />
      <Notice />
      <Follow />
    </div>
  );
}

export default SideBarRigth;
