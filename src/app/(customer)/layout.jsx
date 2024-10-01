import React from "react";
import Layout from "@/components/layout";
export default function layout({ children }) {
  return (
    <div>
      <Layout>{children}</Layout>
    </div>
  );
}
