"use client";
import "@/style/dashboard.scss";
import Input from "@/components/Input";
// import PictureInput from "@/components/PictureInput";
import "@uploadthing/react/styles.css";
import { UploadButton } from "@/utils/uploadthing";
import useAction from "@/hooks/useAction";
export default function AddCategories() {
  const [submitting, setSubmitting] = useAction({});

  return (
    <>
      <div className="product__container">
        <div className="input__row">
          <UploadButton
            endpoint="imageUploader"
            onClientUploadComplete={(res) => {
              console.log("Files: ", res);
              alert("Upload Completed");
            }}
            // onUploadError={(error: Error) => {
            //   alert(`ERROR! ${error.message}`);
            // }}
          />
          <Input label="Category Name" type="text" name="name" />
        </div>
      </div>
    </>
  );
}
