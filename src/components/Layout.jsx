"use client";
import { usePathname } from "next/navigation";
// const ROUTES_NO_HEADER_FOOTER = ["/signIn", "/signUp", "/dashboard"];
export default function Layout({ children, token }) {
  const pathname = usePathname();
  // const shouldShowHeaderFooter = !ROUTES_NO_HEADER_FOOTER.some((route) =>
  //   pathname.startsWith(route)
  // );
  return (
    <div>
      {/* {shouldShowHeaderFooter && <Header token={token} />} */}
      {children}
    </div>
  );
}
