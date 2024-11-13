import SideBar from "@/components/SideBar";
import React from "react";

export default function layout({ children }) {
  return (
    <div>
      <div className="cart__container">
        {/* {isOpen === false && <SideBar onClick={() => setIsOpen(!isOpen)} />} */}
        <SideBar />

        {children}
      </div>
    </div>
  );
}
