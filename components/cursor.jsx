"use client";
import React, { useEffect } from "react";

const Cursor = () => {
  useEffect(() => {
    const cursor = document.getElementById("cursor");

    const moveCursor = (e) => {
      cursor.style.left = `${e.pageX}px`;
      cursor.style.top = `${e.pageY}px`;
    };

    document.addEventListener("mousemove", moveCursor);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return <div id="cursor" className="cursor"></div>;
};

export default Cursor;
