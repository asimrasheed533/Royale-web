"use client";

import { ToastContainer } from "react-toastify";
import { memo } from "react";

function Toast() {
  return (
    <ToastContainer
      position="bottom-center"
      autoClose={5000}
      hideProgressBar={true}
      stacked={true}
    />
  );
}

export default memo(Toast);
