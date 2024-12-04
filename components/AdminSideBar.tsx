"use client";

import useSidebar from "@/hooks/useSidebar";
import React from "react";
import { motion } from "framer-motion";

export default function AdminSideBar() {
  const [isCollapsed, setIsCollapsed] = useSidebar();

  const handleSidebarClick = () => {
    if (window.innerWidth < 768) setIsCollapsed(true);
  };

  return (
    <motion.div
      className="dashboard__sidebar__wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={handleSidebarClick}
    >
      <motion.div
        initial={{
          opacity: 0,
          x: isCollapsed || window.innerWidth >= 768 ? 0 : -200, // Sidebar slides out on smaller screens
        }}
        animate={{
          opacity: 1,
          x: isCollapsed || window.innerWidth >= 768 ? 0 : -200,
        }}
        transition={{ duration: 0.3 }}
        className="dashboard__sidebar"
      >
        <div className="dashboard__sidebar__content">
          <div className="dashboard__sidebar__content__entry">Dashboard</div>
        </div>
      </motion.div>
    </motion.div>
  );
}
