"use client";
import "@/style/dashboard.scss";

import Input from "@/components/Input";
import InputFile from "@/components/InputFile";
import { useState } from "react";
import Select from "@/components/Select";
import TextArea from "@/components/TextArea";

export default function ProductAdd() {
  const [files, setFiles] = useState<File[] | null>(null);
  return (
    <>
      <div className="product__container">
        <InputFile label="Product Image" onChange={setFiles} value={files} />
        <div className="input__row">
          <Input label="Product Name" type="text" name="name" />
          <Select label="Category" options={[]} />
        </div>
        <div className="input__row">
          <Input label="Quantity" type="text" name="quantity" />
          <Input label="Price " type="text" name="price" />
        </div>
        <div className="input__row">
          <Select label="Active" options={[]} />
        </div>
        <div className="input__row">
          <TextArea label="Description" />
        </div>
      </div>
    </>
  );
}
