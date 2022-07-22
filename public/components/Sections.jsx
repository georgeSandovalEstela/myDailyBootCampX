import React from "react";
import DailyContent from "./DailyContent/DailyContent";
import SideBarLeft from "./SideBarLeft/SideBarLeft";

function Sections() {
  return (
    <main className="main">
      <SideBarLeft />
      <DailyContent />
    </main>
  );
}

export default Sections;
