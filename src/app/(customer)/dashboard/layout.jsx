import SideBar from "@/components/SideBar";
import React from "react";
import "@/style/listing.scss";
export default function layout({ children }) {
  return (
    <div>
      <div className="dashboard">
        <SideBar />
        <div className="dashboard__main__content">{children}</div>
      </div>
    </div>
  );
}
