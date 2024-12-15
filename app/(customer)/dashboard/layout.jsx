import DashboardLayout from "@/components/DashboardLayout";
import customerLinks from "@/data/customerLinks";
import React from "react";
export default function layout({ children }) {
  return <DashboardLayout links={customerLinks}>{children}</DashboardLayout>;
}
