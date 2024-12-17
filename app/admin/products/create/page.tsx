"use client";
import "@/style/dashboard.scss";

import Input from "@/components/Input";
import InputFile from "@/components/InputFile";
import { useState } from "react";

export default function ProductAdd() {
  const [files, setFiles] = useState<File[] | null>(null);
  return (
    <>
      <div className="product__container">
        <InputFile label="Product Image" onChange={setFiles} value={files} />
        <Input label="Product Name" type="text" name="name" />
      </div>
    </>
  );
}
