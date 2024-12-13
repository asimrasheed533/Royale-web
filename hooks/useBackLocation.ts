import { usePathname } from "next/navigation";

export function useBackLocation() {
  const pathname = usePathname();

  if (!pathname) return "/admin";

  const parts = pathname.split("/").filter(Boolean);
  if (parts.length <= 1 || parts[0] === "admin") return "/admin";

  return `/${parts.slice(0, parts.length - 1).join("/")}`;
}
