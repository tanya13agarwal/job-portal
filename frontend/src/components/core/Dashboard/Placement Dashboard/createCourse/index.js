import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDropzone } from "react-dropzone";
import { FiUploadCloud } from "react-icons/fi";

const Upload = ({ name, label, setValue }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewSource, setPreviewSource] = useState("");

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      previewFile(file);
      setSelectedFile(file);
      setValue(name, file);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: { "image/*": [".jpeg", ".jpg", ".png"] },
    onDrop,
  });

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  return (
    <div className="flex flex-col space-y-2">
      <label className="text-sm text-gray-700">{label} *</label>
      <div
        className="bg-gray-100 flex min-h-[250px] cursor-pointer items-center justify-center rounded-md border-2 border-dotted"
        {...getRootProps()}
      >
        {previewSource ? (
          <img
            src={previewSource}
            alt="Preview"
            className="h-full w-full rounded-md object-cover"
          />
        ) : (
          <div className="flex w-full flex-col items-center p-6">
            <input {...getInputProps()} />
            <div className="grid aspect-square w-14 place-items-center rounded-full bg-gray-200">
              <FiUploadCloud className="text-2xl text-gray-600" />
            </div>
            <p className="mt-2 max-w-[200px] text-center text-sm text-gray-500">
              Drag and drop an image, or click to browse
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

const CreateCourse = () => {
  const navigate = useNavigate();
  const [onCampusCourses, setOnCampusCourses] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newCourse, setNewCourse] = useState({
    courseName: "",
    courseDescription: "",
    courseLink: "",
    courseImage: null,
  });

  const setValue = (name, value) => {
    setNewCourse((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    if (
      newCourse.courseName &&
      newCourse.courseDescription &&
      newCourse.courseLink &&
      newCourse.courseImage
    ) {
      setOnCampusCourses((prev) => [...prev, newCourse]);
      setShowModal(false);
      setNewCourse({
        courseName: "",
        courseDescription: "",
        courseLink: "",
        courseImage: null,
      });
    } else {
      alert("Please fill all the fields.");
    }
  };

  const handleViewCourse = (link) => {
    navigate(link);
  };

  return (
    <div>
      <div className="flex w-full items-center justify-center text-4xl mb-10">
        Certifications / Resources
      </div>

      <div className="flex justify-end">
        <button
          className="mt-auto px-4 flex items-center gap-2 w-fit py-2 rounded border border-transparent active:scale-90 text-[#fff] bg-customDarkBlue transition-all duration-200 hover:bg-transparent hover:text-black hover:border-[0.5px] hover:border-customDarkBlue"
          onClick={() => setShowModal(true)}
        >
          Create Course
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg w-full max-w-md relative">
            <button
              className="absolute top-2 right-2 text-gray-500"
              onClick={() => setShowModal(false)}
            >
              ✖
            </button>
            <h2 className="text-xl font-bold mb-4">Create a New Course</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Course Name
                </label>
                <input
                  type="text"
                  className="mt-1 p-2 w-full border rounded"
                  value={newCourse.courseName}
                  onChange={(e) => setValue("courseName", e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Course Description
                </label>
                <textarea
                  className="mt-1 p-2 w-full border rounded"
                  value={newCourse.courseDescription}
                  onChange={(e) => setValue("courseDescription", e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Course Link
                </label>
                <input
                  type="text"
                  className="mt-1 p-2 w-full border rounded"
                  value={newCourse.courseLink}
                  onChange={(e) => setValue("courseLink", e.target.value)}
                />
              </div>
              <Upload
                name="courseImage"
                label="Course Image"
                setValue={(name, file) => setValue(name, file)}
              />
            </div>
            <div className="mt-4 flex justify-end space-x-2">
              <button
                className="px-4 py-2 bg-gray-300 rounded"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-customDarkBlue text-white rounded"
                onClick={handleSave}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Courses Display */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-10 mt-10">
        {onCampusCourses.map((course, index) => (
          <div
            key={index}
            className="flex flex-col h-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 hover:scale-105 transition-all duration-300"
          >
            <img
              src={URL.createObjectURL(course.courseImage)}
              alt={course.courseName}
              className="w-24 h-24 my-4 rounded-xl object-cover translate-x-[80%]"
            />
            <h5 className="mb-2 text-2xl font-bold text-gray-900">
              {course.courseName}
            </h5>
            <p className="mb-5 text-gray-700">{course.courseDescription}</p>
            <button
              className="mt-auto px-4 flex items-center gap-2 w-fit py-2 rounded border border-transparent active:scale-90 text-[#fff] bg-customDarkBlue transition-all duration-200 hover:bg-transparent hover:text-black hover:border-[0.5px] hover:border-customDarkBlue"
              onClick={() => handleViewCourse(course.courseLink)}
            >
              View Course
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreateCourse;
