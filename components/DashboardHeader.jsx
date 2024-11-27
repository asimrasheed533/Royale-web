"use client";
import { useState } from "react";
import Link from "next/link";
import "@/style/listing.scss";
import { usePathname } from "next/navigation";
export default function DashboardHeader({ links }) {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState();
  const basePath = `/${pathname.split("/")[2]}`;
  // let currentLink;

  return (
    <div
      className="dashboard__main__header"
      style={{
        justifyContent: isCollapsed ? "space-between" : "flex-end",
      }}
    >
      <div className="dashboard__main__header__title">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-chevron-left"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>

        {/* {currentLink?.icon} */}
        <div className="dashboard__main__header__title__text">
          {/* {currentLink?.label} */}
          Order History
        </div>
      </div>
    </div>
  );
}
