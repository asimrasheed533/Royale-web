import React from "react";
import Layout from "@/components/layout";
import { cookies } from "next/headers";

export default async function layout({ children }) {
  const token = cookies().get("token")?.value || null;

  return <Layout token={token}>{children}</Layout>;
}
