// import { useEffect, useRef, useState } from "react";
// import { useDropzone } from "react-dropzone";
// import { FiUploadCloud } from "react-icons/fi";
// import { AiOutlineFile } from "react-icons/ai"; // Icon for non-image, non-PDF files

// export default function Upload({
//   name,
//   label,
//   register,
//   setValue,
//   errors,
//   acceptedExtensions = [".jpeg", ".jpg", ".png", ".pdf", ".doc", ".docx"],
//   fileTypeLabel = "an image or document",
//   viewData = null,
//   editData = null,
// }) {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [previewSource, setPreviewSource] = useState(
//     viewData ? viewData : editData ? editData : ""
//   );
//   const [validationError, setValidationError] = useState("");
//   const inputRef = useRef(null);

//   const isImageFile = (file) => {
//     const imageExtensions = [".jpeg", ".jpg", ".png"];
//     const fileExtension = file.name.slice(file.name.lastIndexOf(".")).toLowerCase();
//     return imageExtensions.includes(fileExtension);
//   };

//   const isPdfFile = (file) => {
//     return file.name.slice(file.name.lastIndexOf(".")).toLowerCase() === ".pdf";
//   };

//   const onDrop = (acceptedFiles, rejectedFiles) => {
//     const file = acceptedFiles[0];
//     if (file) {
//       if (validateFile(file)) {
//         if (isImageFile(file)) {
//           previewFile(file);
//         } else if (isPdfFile(file)) {
//           const pdfUrl = URL.createObjectURL(file);
//           setPreviewSource(pdfUrl);
//         }
//         setSelectedFile(file);
//         setValidationError("");
//       }
//     } else if (rejectedFiles.length > 0) {
//       setValidationError("Invalid file format or size exceeded 5MB.");
//     }
//   };

//   const { getRootProps, getInputProps, isDragActive } = useDropzone({
//     maxSize: 5 * 1024 * 1024, // 5MB size limit
//     onDrop,
//   });

//   const validateFile = (file) => {
//     const fileExtension = file.name.slice(file.name.lastIndexOf("."));
//     if (!acceptedExtensions.includes(fileExtension.toLowerCase())) {
//       setValidationError(`Invalid file format. Only ${fileTypeLabel} allowed.`);
//       return false;
//     }
//     if (file.size > 5 * 1024 * 1024) {
//       setValidationError("File size exceeds the 5MB limit.");
//       return false;
//     }
//     return true;
//   };

//   const previewFile = (file) => {
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onloadend = () => {
//       setPreviewSource(reader.result);
//     };
//   };

//   useEffect(() => {
//     register(name, { required: true });
//   }, [register, name]);

//   useEffect(() => {
//     setValue(name, selectedFile);
//   }, [selectedFile, setValue, name]);

  // const handleBrowseClick = () => {
  //   inputRef.current.click();
  // };

//   return (
//     <div className="flex flex-col space-y-2">
//       <label className="text-sm text-richblack-5" htmlFor={name}>
//         {label} {!viewData && <sup className="text-pink-500">*</sup>}
//       </label>
//       <div
//         className={`${
//           isDragActive ? "bg-richblack-600" : "bg-richblack-700"
//         } flex min-h-[250px] cursor-pointer items-center justify-center rounded-md border-2 border-dotted border-richblack-500`}
//         {...getRootProps()}
//       >
//         <input {...getInputProps()} ref={inputRef} />
//         {selectedFile ? (
//           <div className="flex w-full flex-col items-center p-6">
//             {isImageFile(selectedFile) ? (
//               <img
//                 src={previewSource}
//                 alt="Preview"
//                 className="h-32 w-32 rounded-md object-cover"
//               />
//             ) : isPdfFile(selectedFile) ? (
//               <iframe
//                 src={previewSource}
//                 title="PDF Preview"
//                 className="h-32 w-full rounded-md"
//                 style={{ border: "none" }}
//               />
//             ) : (
//               <div className="flex items-center space-x-2">
//                 <AiOutlineFile className="text-4xl text-richblack-200" />
//                 <p className="text-sm text-richblack-200">{selectedFile.name}</p>
//               </div>
//             )}
//             <button
//               type="button"
//               onClick={() => {
//                 setPreviewSource("");
//                 setSelectedFile(null);
//                 setValue(name, null);
//                 setValidationError("");
//               }}
//               className="mt-3 text-richblack-400 underline"
//             >
//               Cancel
//             </button>
//           </div>
//         ) : (
//           <div className="flex w-full flex-col items-center p-6">
//             <div className="grid aspect-square w-14 place-items-center rounded-full bg-pure-greys-800">
//               <FiUploadCloud className="text-2xl text-yellow-50" />
//             </div>
//             <p className="mt-2 max-w-[200px] text-center text-sm text-richblack-200">
//               Drag and drop {fileTypeLabel}, or{" "}
//               <span
//                 className="font-semibold text-yellow-50 cursor-pointer"
//                 onClick={handleBrowseClick}
//               >
//                 Browse
//               </span>{" "}
//               to select a file
//             </p>
//             <ul className="mt-10 flex list-disc justify-between space-x-12 text-center text-xs text-richblack-200">
//               <li>Max file size 5MB</li>
//               <li>Allowed formats: {acceptedExtensions.join(", ")}</li>
//             </ul>
//           </div>
//         )}
//       </div>
//       {validationError && (
//         <span className="ml-2 text-xs tracking-wide text-red-500">
//           {validationError}
//         </span>
//       )}
//       {errors[name] && (
//         <span className="ml-2 text-xs tracking-wide text-pink-200">
//           {label} is required
//         </span>
//       )}
//     </div>
//   );
// }

// import { useEffect, useRef, useState } from "react"
// import { useDropzone } from "react-dropzone"
// import { FiUploadCloud } from "react-icons/fi"
// import { useSelector } from "react-redux"

// export default function Upload({
//   name,
//   label,
//   register,
//   setValue,
//   errors,
//   viewData = null,
//   editData = null,
// }) {
//   // const { course } = useSelector((state) => state.course)
//   const [selectedFile, setSelectedFile] = useState(null)
//   const [previewSource, setPreviewSource] = useState(
//     viewData ? viewData : editData ? editData : ""
//   )
//   const inputRef = useRef(null)

//   const onDrop = (acceptedFiles) => {
//     const file = acceptedFiles[0]
//     if (file) {
//       previewFile(file)
//       setSelectedFile(file)
//     }
//   }

//   const { getRootProps, getInputProps, isDragActive } = useDropzone({
    // accept: {
    //   "image/*": [".jpeg", ".jpg", ".png"],
      // "application/pdf": [".pdf"],
      // "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [".docx"],
      // "application/msword": [".doc"],
    // },
//     onDrop,
//   })

//   const previewFile = (file) => {
//     if (file.type === "application/pdf" || file.type.startsWith("image/")) {
//       const reader = new FileReader()
//       reader.readAsDataURL(file)
//       reader.onloadend = () => {
//         setPreviewSource(reader.result)
//       }
//     } else {
//       setPreviewSource(null)
//     }
//   }

//   useEffect(() => {
//     register(name, { required: true })
//   }, [register, name])

//   useEffect(() => {
//     setValue(name, selectedFile)
//   }, [selectedFile, setValue, name])

//   const isPdfFile = (fileName) => fileName && fileName.endsWith(".pdf")
//   const isImageFile = (fileType) => fileType && fileType.startsWith("image/")

//   return (
//     <div className="flex flex-col space-y-2">
//       <label className="text-sm text-richblack-5" htmlFor={name}>
//         {label} {!viewData && <sup className="text-pink-200">*</sup>}
//       </label>
//       <div
//         {...getRootProps()}
//         className={`${
//           isDragActive ? "bg-richblack-600" : "bg-richblack-700"
//         } flex min-h-[250px] cursor-pointer items-center justify-center rounded-md border-2 border-dotted border-richblack-500`}
//         onClick={() => inputRef.current?.click()} // Ensure click opens file dialog
//       >
//         {previewSource ? (
//           <div className="flex w-full flex-col p-6">
//             {isPdfFile(selectedFile?.name || previewSource) ? (
//               <iframe
//                 src={previewSource}
//                 title="PDF Preview"
//                 className="h-full w-full rounded-md"
//                 style={{ border: "none", height: "400px" }}
//               />
//             ) : isImageFile(selectedFile?.type) ? (
//               <img
//                 src={previewSource}
//                 alt="Preview"
//                 className="h-full w-full rounded-md object-cover"
//               />
//             ) : (
//               <div className="text-center text-richblack-200">
//                 <p className="text-lg">Document Uploaded</p>
//                 <p>{selectedFile.name}</p>
//                 <p>(Preview not available)</p>
//               </div>
//             )}
//             {!viewData && (
//               <button
//                 type="button"
//                 onClick={() => {
//                   setPreviewSource("")
//                   setSelectedFile(null)
//                   setValue(name, null)
//                 }}
//                 className="mt-3 text-richblack-400 underline"
//               >
//                 Cancel
//               </button>
//             )}
//           </div>
//         ) : (
//           <div
//             className="flex w-full flex-col items-center p-6"
//           >
//             <input {...getInputProps()} ref={inputRef} />
//             <div className="grid aspect-square w-14 place-items-center rounded-full bg-pure-greys-800">
//               <FiUploadCloud className="text-2xl text-yellow-50" />
//             </div>
//             <p className="mt-2 max-w-[200px] text-center text-sm text-richblack-200">
//               Drag and drop an image, PDF, or document, or click to{" "}
//               <span className="font-semibold text-yellow-50">Browse</span> a file
//             </p>
//             <ul className="mt-10 flex list-disc justify-between space-x-12 text-center  text-xs text-richblack-200">
//               <li>Recommended size 1024x576</li>
//             </ul>
//           </div>
//         )}
//       </div>
//       {errors[name] && (
//         <span className="ml-2 text-xs tracking-wide text-pink-200">
//           {label} is required
//         </span>
//       )}
//     </div>
//   )
// }


import { useEffect, useRef, useState } from "react"
import { useDropzone } from "react-dropzone"
import { FiUploadCloud } from "react-icons/fi"
import { useSelector } from "react-redux"


export default function Upload({
  name,
  label,
  register,
  setValue,
  errors,
  pdf = false,
  viewData = null,
  editData = null,
}) {

  const [selectedFile, setSelectedFile] = useState(null)
  const [previewSource, setPreviewSource] = useState(
    viewData ? viewData : editData ? editData : ""
  )
  const inputRef = useRef(null)

  const handleBrowseClick = () => {
    inputRef.current.click();
  };

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0]
    if (file) {
      previewFile(file)
      setSelectedFile(file)
    }
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: !pdf
      ? { "image/*": [".jpeg", ".jpg", ".png"] }
      : { 
        "application/pdf": [".pdf"],
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [".docx"],
        "application/msword": [".doc"] 
      },
    onDrop,
  })

  const previewFile = (file) => {
    // console.log(file)
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setPreviewSource(reader.result)
    }
  }

  useEffect(() => {
    register(name, { required: true })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [register])

  useEffect(() => {
    setValue(name, selectedFile)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedFile, setValue])

  return (
    <div className="flex flex-col space-y-2">
      <label className="text-sm text-richblack-5" htmlFor={name}>
        {label} {!viewData && <sup className="text-pink-200">*</sup>}
      </label>
      <div
        className={`${
          isDragActive ? "bg-richblack-600" : "bg-richblack-700"
        } flex min-h-[250px] cursor-pointer items-center justify-center rounded-md border-2 border-dotted border-richblack-500`}
      >
        {previewSource ? (
          <div className="flex w-full flex-col p-6">
            {!pdf ? (
              <img
                src={previewSource}
                alt="Preview"
                className="h-full w-full rounded-md object-cover"
              />
            ) : (
              <iframe
                src={previewSource}
                title="PDF Preview"
                className="h-32 w-full rounded-md"
                style={{ border: "none" }}
              />
            )}
            {!viewData && (
              <button
                type="button"
                onClick={() => {
                  setPreviewSource("")
                  setSelectedFile(null)
                  setValue(name, null)
                }}
                className="mt-3 text-richblack-400 underline"
              >
                Cancel
              </button>
            )}
          </div>
        ) : (
          <div
            className="flex w-full flex-col items-center p-6"
            {...getRootProps()}
            onClick={handleBrowseClick}
          >
            <input {...getInputProps()} ref={inputRef} />
            <div className="grid aspect-square w-14 place-items-center rounded-full bg-pure-greys-800">
              <FiUploadCloud className="text-2xl text-yellow-50" />
            </div>
            <p className="mt-2 max-w-[200px] text-center text-sm text-richblack-200">
              Drag and drop an {!pdf ? "image" : "pdf"}, or click to{" "}
              <span className="font-semibold text-yellow-50">Browse</span> a
              file
            </p>
            <ul className="mt-10 flex list-disc justify-between space-x-12 text-center  text-xs text-richblack-200">
              <li>Aspect ratio 16:9</li>
              <li>Recommended size 1024x576</li>
            </ul>
          </div>
        )}
      </div>
      {errors[name] && (
        <span className="ml-2 text-xs tracking-wide text-pink-200">
          {label} is required
        </span>
      )}
    </div>
  )
}