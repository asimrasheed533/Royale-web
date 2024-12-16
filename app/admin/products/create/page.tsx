"use client";
import "@/style/dashboard.scss";
import Input from "@/components/Input";
import { InputFile } from "@/components/InputFile";

export default function ProductAdd() {
  return (
    <>
      <div className="product__container">
        <InputFile />
        {/* <Input label="Product Name" type="text" name="name" /> */}
      </div>
    </>
  );
}
