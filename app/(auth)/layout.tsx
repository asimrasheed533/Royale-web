import { ReactNode } from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import decodeJwt from "@/utils/decodeJwt";

export default async function AuthLayout({
  children,
}: {
  children: ReactNode;
}) {
  const token = (await cookies()).get("token")?.value;

  if (token) {
    const { userType } = decodeJwt(token);
    return redirect("/" + userType);
  }

  return children;
}
