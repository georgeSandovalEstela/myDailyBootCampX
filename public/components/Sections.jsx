import React from "react";
import DailyContent from "./DailyContent/DailyContent";
import SideBarLeft from "./SideBarLeft/SideBarLeft";
import SideBarRigth from "./SideBarRigth/SideBarRigth";

function Sections() {
  return (
    <main className="main">
      <SideBarLeft />
      <DailyContent />
      <SideBarRigth />
    </main>
  );
}

export default Sections;
