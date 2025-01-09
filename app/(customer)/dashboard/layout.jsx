import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
export default async function layout({ children }) {
  const token = (await cookies()).get("token");

  if (!token) {
    return redirect("/signIn");
  }
  return <div>{children}</div>;
}
