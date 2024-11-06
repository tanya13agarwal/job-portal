import { useEffect, useRef, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FiUploadCloud } from "react-icons/fi";

export default function Upload({
  name,
  label,
  register,
  setValue,
  errors,
  acceptedExtensions = [".jpeg", ".jpg", ".png"], // Default extensions
  fileTypeLabel = "an image", // Default label
  viewData = null,
  editData = null,
}) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewSource, setPreviewSource] = useState(
    viewData ? viewData : editData ? editData : ""
  );
  const [validationError, setValidationError] = useState("");
  const inputRef = useRef(null);

  const isImageFile = (file) => {
    const imageExtensions = [".jpeg", ".jpg", ".png"];
    const fileExtension = file.name.slice(file.name.lastIndexOf(".")).toLowerCase();
    return imageExtensions.includes(fileExtension);
  };

  const onDrop = (acceptedFiles, rejectedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      if (validateFile(file)) {
        if (isImageFile(file)) {
          previewFile(file);
        } else {
          setPreviewSource(null); // Clear image preview for non-image files
        }
        setSelectedFile(file);
        setValidationError(""); // Clear any previous validation error
      }
    } else if (rejectedFiles.length > 0) {
      setValidationError("Invalid file format or size exceeded 5MB.");
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    maxSize: 5 * 1024 * 1024, // 5MB size limit
    onDrop,
  });

  const validateFile = (file) => {
    const fileExtension = file.name.slice(file.name.lastIndexOf("."));
    if (!acceptedExtensions.includes(fileExtension.toLowerCase())) {
      setValidationError(`Invalid file format. Only ${fileTypeLabel} allowed.`);
      return false;
    }
    if (file.size > 5 * 1024 * 1024) {
      setValidationError("File size exceeds the 5MB limit.");
      return false;
    }
    return true;
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  useEffect(() => {
    register(name, { required: true });
  }, [register, name]);

  useEffect(() => {
    setValue(name, selectedFile);
  }, [selectedFile, setValue, name]);

  const handleBrowseClick = () => {
    inputRef.current.click();
  };

  return (
    <div className="flex flex-col space-y-2">
      <label className="text-sm text-richblack-5" htmlFor={name}>
        {label} {!viewData && <sup className="text-pink-200">*</sup>}
      </label>
      <div
        className={`${
          isDragActive ? "bg-richblack-600" : "bg-richblack-700"
        } flex min-h-[250px] cursor-pointer items-center justify-center rounded-md border-2 border-dotted border-richblack-500`}
        {...getRootProps()}
      >
        <input {...getInputProps()} ref={inputRef} />
        {selectedFile ? (
          isImageFile(selectedFile) ? (
            <div className="flex w-full flex-col p-6">
              <img
                src={previewSource}
                alt="Preview"
                className="h-full w-full rounded-md object-cover"
              />
              {!viewData && (
                <button
                  type="button"
                  onClick={() => {
                    setPreviewSource("");
                    setSelectedFile(null);
                    setValue(name, null);
                    setValidationError("");
                  }}
                  className="mt-3 text-richblack-400 underline"
                >
                  Cancel
                </button>
              )}
            </div>
          ) : (
            <div className="flex flex-col items-center p-6">
              <p className="text-sm text-richblack-200">
                {selectedFile.name} ({(selectedFile.size / 1024).toFixed(2)} KB)
              </p>
              {!viewData && (
                <button
                  type="button"
                  onClick={() => {
                    setSelectedFile(null);
                    setValue(name, null);
                    setValidationError("");
                  }}
                  className="mt-3 text-richblack-400 underline"
                >
                  Cancel
                </button>
              )}
            </div>
          )
        ) : (
          <div className="flex w-full flex-col items-center p-6">
            <div className="grid aspect-square w-14 place-items-center rounded-full bg-pure-greys-800">
              <FiUploadCloud className="text-2xl text-yellow-50" />
            </div>
            <p className="mt-2 max-w-[200px] text-center text-sm text-richblack-200">
              Drag and drop {fileTypeLabel}, or{" "}
              <span
                className="font-semibold text-yellow-50 cursor-pointer"
                onClick={handleBrowseClick}
              >
                Browse
              </span>{" "}
              to select a file
            </p>
            <ul className="mt-10 flex list-disc justify-between space-x-12 text-center text-xs text-richblack-200">
              <li>Max file size 5MB</li>
              <li>Allowed formats: {acceptedExtensions.join(", ")}</li>
            </ul>
          </div>
        )}
      </div>
      {validationError && (
        <span className="ml-2 text-xs tracking-wide text-red-500">
          {validationError}
        </span>
      )}
      {errors[name] && (
        <span className="ml-2 text-xs tracking-wide text-pink-200">
          {label} is required
        </span>
      )}
    </div>
  );
}
