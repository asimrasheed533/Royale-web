"use client";
import "@/style/dashboard.scss";

import Input from "@/components/Input";
import InputFile from "@/components/InputFile";
import { useState } from "react";
import Select from "@/components/Select";
import TextArea from "@/components/TextArea";
// import PictureInput from "@/components/PictureInput";
import "@uploadthing/react/styles.css";
import { UploadButton } from "@/utils/uploadthing";

export default function ProductAdd() {
  const [files, setFiles] = useState<File[] | null>(null);
  return (
    <>
      <div className="product__container">
        <UploadButton
          endpoint="imageUploader"
          onClientUploadComplete={(res) => {
            alert("Upload Completed");
          }}
          onUploadError={(error: Error) => {
            // Do something with the error.
            alert(`ERROR! ${error.message}`);
          }}
        />
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
