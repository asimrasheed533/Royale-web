import React from "react";
import AdminSideBar from "./AdminSideBar";
import DashboardAdminHeader from "./DashboardAdminHeader";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="dashboard">
      <AdminSideBar />
      <div className="dashboard__main">
        <DashboardAdminHeader />
        <div className="dashboard__main__content">
          <div className="dashboard__main__content__inner">{children}</div>
        </div>
      </div>
    </div>
  );
}
