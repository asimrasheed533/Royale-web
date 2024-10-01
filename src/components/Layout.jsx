"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/header";

const ROUTES_NO_HEADER_FOOTER = ["/signIn"];

export default function Layout({ children }) {
  const pathname = usePathname();

  const shouldShowHeaderFooter = !ROUTES_NO_HEADER_FOOTER.includes(pathname);

  return (
    <div>
      {shouldShowHeaderFooter && <Header />}

      {children}
    </div>
  );
}
