"use client";

import { usePathname } from "next/navigation";
// import Header from "@/components/Header";
import Footer from "./Footer";
import Header from "./Header";

const ROUTES_NO_HEADER_FOOTER = ["/signIn", "/signUp", "/dashboard"];

export default function Layout({ children, token }) {
  const pathname = usePathname();

  const shouldShowHeaderFooter = !ROUTES_NO_HEADER_FOOTER.some((route) =>
    pathname.startsWith(route)
  );

  return (
    <div>
      {shouldShowHeaderFooter && <Header token={token} />}
      {children}
      {/* {shouldShowHeaderFooter && <Footer />} */}
    </div>
  );
}
