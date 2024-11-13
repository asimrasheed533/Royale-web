import SideBar from "@/components/SideBar";
import React from "react";

export default function layout({ children }) {
  return (
    <div>
      <div className="cart__container">
        <SideBar />
        {children}
      </div>
    </div>
  );
}
