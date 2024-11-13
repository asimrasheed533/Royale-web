"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";

const ROUTES_NO_HEADER_FOOTER = ["/signIn", "/signUp"];

export default function Layout({ children, token }) {
  const pathname = usePathname();

  const shouldShowHeaderFooter = !ROUTES_NO_HEADER_FOOTER.includes(pathname);

  return (
    <div>
      {shouldShowHeaderFooter && <Header token={token} />}
      {children}
    </div>
  );
}
