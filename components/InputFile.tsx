// "use client";
// import "@/style/input.scss";
// import { ChangeEvent, DragEvent, useRef } from "react";

// interface IInputFile {
//   label: string;
//   id?: string;
//   value: string[] | string | File[] | File | null;
//   error?: string;
//   onChange: (files: any) => void;
//   multiple?: boolean;
//   accept?: string;
// }

// export default function InputFile({
//   label,
//   id,
//   value = [],
//   onChange,
//   multiple,
//   accept,
// }: IInputFile) {
//   const inputRef = useRef<HTMLInputElement>(null);

//   const handleFileChangeMultiple = (
//     e: ChangeEvent<HTMLInputElement> | DragEvent<HTMLInputElement>
//   ) => {
//     const files = Array.from((e.target as HTMLInputElement).files || []);

//     const newFiles = Array.from(files);
//     const existingFiles = (Array.isArray(value) ? value : [value]).filter(
//       (file): file is File => file !== null
//     );
//     const updatedFiles = [
//       ...existingFiles,
//       ...newFiles.filter(
//         (newFile) => !existingFiles.some((file) => file.name === newFile.name)
//       ),
//     ];
//     onChange(updatedFiles);

//     if (inputRef.current) {
//       inputRef.current.value = "";
//     }
//   };

//   const handleFileChangeSingle = (
//     e: ChangeEvent<HTMLInputElement> | DragEvent<HTMLInputElement>
//   ) => {
//     const file = (e.target as HTMLInputElement).files?.[0];
//     if (file) {
//       onChange(file);
//     }
//     if (inputRef.current) {
//       inputRef.current.value = "";
//     }
//   };

//   const removeFile = (fileName: string) => {
//     const updatedFiles = (Array.isArray(value) ? value : [value]).filter(
//       (file) =>
//         file instanceof File ? file.name !== fileName : file !== fileName
//     );
//     onChange(updatedFiles.filter((file): file is File => file !== null));
//   };

//   return multiple ? (
//     <div className="dashboard__file__input__multiple">
//       <div
//         className="dashboard__file__input__multiple__label"
//         style={{
//           width: "100%",
//           color: "var(--lightBlue)",
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//         }}
//       >
//         {label}
//         <button
//           type="button"
//           onClick={() => onChange([])}
//           style={{
//             color: "var(--red)",
//             padding: "0.5em 1em",
//             backgroundColor: "transparent",
//             borderRadius: "50px",
//             border: "1px solid var(--red)",
//             cursor: "pointer",
//           }}
//         >
//           Clear All
//         </button>
//       </div>
//       {Array.isArray(value) &&
//         value.map((file) => (
//           <a
//             href={
//               typeof file === "string"
//                 ? file
//                 : URL.createObjectURL(file instanceof File ? file : new Blob())
//             }
//             className="dashboard__file__input__multiple__file"
//             key={file instanceof File ? file.name : file}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               className="feather feather-file"
//             >
//               <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
//               <polyline points="13 2 13 9 20 9" />
//             </svg>
//             {file instanceof File
//               ? file.name
//               : file.split("/").pop()?.substring(0, 20)}
//             <button
//               type="button"
//               className="dashboard__file__input__multiple__file__remove"
//               onClick={(e) => {
//                 e.preventDefault();
//                 e.stopPropagation();
//                 removeFile(file instanceof File ? file.name : file);
//               }}
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="20"
//                 height="20"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="feather feather-x"
//               >
//                 <line x1="18" y1="6" x2="6" y2="18" />
//                 <line x1="6" y1="6" x2="18" y2="18" />
//               </svg>
//             </button>
//           </a>
//         ))}
//       <div className="dashboard__file__input__multiple__uploader">
//         <input
//           type="file"
//           multiple
//           ref={inputRef}
//           onChange={handleFileChangeMultiple}
//           className="dashboard__file__input__multiple__uploader__input"
//         />
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="16"
//           height="16"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           className="lucide lucide-plus"
//         >
//           <path d="M5 12h14" />
//           <path d="M12 5v14" />
//         </svg>
//         <div className="dashboard__file__input__multiple__uploader__label">
//           {label}
//         </div>
//       </div>
//     </div>
//   ) : (
//     <div className="input__color__container type__file">
//       <input
//         type="file"
//         className="input__color__container__input"
//         id={id}
//         name={id}
//         ref={inputRef}
//         accept={accept || "*"}
//         onChange={handleFileChangeSingle}
//       />
//       <div className="type__file__preview">
//         {value ? (
//           <div className="type__file__preview__name">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               className="feather feather-file"
//             >
//               <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
//               <polyline points="13 2 13 9 20 9" />
//             </svg>
//             <span>
//               {value instanceof File
//                 ? value.name
//                 : Array.isArray(value)
//                 ? value
//                     .map((file) => (file instanceof File ? file.name : file))
//                     .join(", ")
//                 : value}
//             </span>
//           </div>
//         ) : (
//           <div className="type__file__preview__add">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="16"
//               height="16"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               className="lucide lucide-plus"
//             >
//               <path d="M5 12h14" />
//               <path d="M12 5v14" />
//             </svg>
//             <div className="type__file__preview__add__label">{label}</div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

"use client";
import { useState } from "react";

export const InputFile = () => {
  const [file, setFile] = useState<string>();
  const [fileEnter, setFileEnter] = useState(false);
  return (
    <div className="container px-4 max-w-5xl mx-auto">
      {!file ? (
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setFileEnter(true);
          }}
          onDragLeave={(e) => {
            setFileEnter(false);
          }}
          onDragEnd={(e) => {
            e.preventDefault();
            setFileEnter(false);
          }}
          onDrop={(e) => {
            e.preventDefault();
            setFileEnter(false);
            if (e.dataTransfer.items) {
              [...e.dataTransfer.items].forEach((item, i) => {
                if (item.kind === "file") {
                  const file = item.getAsFile();
                  if (file) {
                    let blobUrl = URL.createObjectURL(file);
                    setFile(blobUrl);
                  }
                  console.log(`items file[${i}].name = ${file?.name}`);
                }
              });
            } else {
              [...e.dataTransfer.files].forEach((file, i) => {
                console.log(`… file[${i}].name = ${file.name}`);
              });
            }
          }}
          className={`${
            fileEnter ? "border-4" : "border-2"
          } mx-auto  bg-white flex flex-col w-full max-w-xs h-72 border-dashed items-center justify-center`}
        >
          <label
            htmlFor="file"
            className="h-full flex flex-col justify-center text-center"
          >
            Click to upload or drag and drop
          </label>
          <input
            id="file"
            type="file"
            className="hidden"
            onChange={(e) => {
              console.log(e.target.files);
              let files = e.target.files;
              if (files && files[0]) {
                let blobUrl = URL.createObjectURL(files[0]);
                setFile(blobUrl);
              }
            }}
          />
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <object
            className="rounded-md w-full max-w-xs h-72"
            data={file}
            type="image/png" //need to be updated based on type of file
          />
          <button
            onClick={() => setFile("")}
            className="px-4 mt-10 uppercase py-2 tracking-widest outline-none bg-red-600 text-white rounded"
          >
            Reset
          </button>
        </div>
      )}
    </div>
  );
};