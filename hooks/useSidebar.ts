"use client";

import { useEffect, useState } from "react";

export default function useSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => setIsCollapsed(window.innerWidth < 768);

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [setIsCollapsed]);

  return [isCollapsed, setIsCollapsed] as const;
}
