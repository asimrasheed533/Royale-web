"use client";
import "@/style/dashboard.scss";
import Input from "@/components/Input";
import axios from "axios";
// import PictureInput from "@/components/PictureInput";
import "@uploadthing/react/styles.css";
import { UploadButton } from "@/utils/uploadthing";
import useAction from "@/hooks/useAction";
import { useState } from "react";
export default function AddCategories() {
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [loading, handleSubmit] = useAction({
    promise: (e) => {
      e.preventDefault();

      return axios.post("/api/category", {
        name,
        image: img,
      });
    },
    onSuccess: () => {
      setName("");
      setImg("");
    },
    successMessage: "Request Sent Successfully",
  });

  return (
    <>
      <div className="product__container">
        <form onSubmit={handleSubmit} className="input__row">
          <UploadButton
            endpoint="imageUploader"
            onClientUploadComplete={(res) => {
              alert("Upload Completed");
              setImg(res[0].url);
            }}
            // onUploadError={(error: Error) => {
            //   alert(`ERROR! ${error.message}`);
            // }}
          />
          <Input
            label="Category Name"
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button
            type="submit"
            className="listing__page__header__actions__button"
          >
            Add Category
          </button>
        </form>
      </div>
    </>
  );
}
