import React from "react";

import { cookies } from "next/headers";
import Layout from "@/components/Layout";

export default async function layout({ children }) {
  const token = cookies().get("token")?.value || null;

  return <Layout token={token}>{children}</Layout>;
}
