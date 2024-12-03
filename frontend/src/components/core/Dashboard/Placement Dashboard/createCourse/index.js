import React, { useState , useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Upload from "../jobPosting/Upload";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import {
  addCourseDetails,
  editCourseDetails,
  fetchAllCourseDetails,
  fetchCourseDetails,
} from "../../../../../services/operations/courseDetailsAPI"
import { setCourse, setEditCourse } from "../../../../../slices/courseSlice";
import { deleteCourseDetails } from "../../../../../services/operations/courseDetailsAPI";
import ConfirmationModal from "../../../../common/ConfirmationModal";
import useOnClickOutside from "../../../../../hooks/useOnClickOutside";


const CreateCourse = () => {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm()

  // Default values if editCourse or course is undefined
  const { editCourse, course } = useSelector((state) => state.course);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [onCampusCourses, setOnCampusCourses] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const { token } = useSelector((state) => state.auth)
  const [confirmationModal, setConfirmationModal] = useState(null);
  const [allCourses,setAllCourses] = useState([]);
  const [edit,setEdit] = useState(false);
  const [del,setDel] = useState(false);
  const [createCourses,setCreateCourses] = useState(false);
  const ref = useRef(null);

  useOnClickOutside(ref, () => setConfirmationModal(null));

  const isFormUpdated = () => {
    const currentValues = getValues()
    // console.log("changes after editing form values:", currentValues)
    if (
      currentValues.courseName !== course.courseName ||
      currentValues.courseDescription !== course.courseDescription ||
      currentValues.courseLink !== course.courseLink || 
      currentValues.courseImage !== course.thumbnail
    ) {
      return true
    }
    return false
  }


  useEffect(() => {
    // if form is in edit mode
    console.log("data populated", course)
    if (editCourse) {
      setValue("courseName", course?.courseName)
      setValue("courseDescription", course?.courseDescription)
      setValue("courseLink", course?.courseLink)
      setValue("courseImage", course?.thumbnail)
      // setValue("jobId", job?._id)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [edit])


  useEffect( ()=>{
      const fetchData = async() => {
        try{
          const result = await fetchAllCourseDetails();
          if (result)
           setAllCourses(result);
        }
        catch(error){
          console.log(error);
        }
      }
      fetchData();
  },[])



  const handleSave = async (data) => {
    console.log("submit pe data",data)
    setLoading(true)
   
    // let result

    if (editCourse) {

      if (isFormUpdated()) {
        const currentValues = getValues()
        const formData = new FormData()
        // console.log(data)
        formData.append("courseId", course._id)
        if (currentValues.courseName !== course.courseName) {
          formData.append("courseName", data.courseName)
        }
        if (currentValues.courseDescription !== course.courseDescription) {
          formData.append("courseDescription", data.courseDescription)
        }
        if (currentValues.courseLink !== course.courseLink) {
          formData.append("courseLink", data.courseLink)
        }
        if (currentValues.courseImage !== course.thumbnail) {
          formData.append("thumbnail", data.courseImage)
        }
        console.log("Edit Form data: ", formData)

        setLoading(true)
        const result = await editCourseDetails(formData, token)
        if (result) {
          dispatch(setEditCourse(false));
          setEdit(false);
          setShowModal(false);
          setAllCourses(result);
        }
        setLoading(false)
      } 
      return
    }


    const formData = new FormData()
    formData.append("courseName", data.courseName)
    formData.append("courseDescription", data.courseDescription)
    formData.append("courseLink", data.courseLink)
    formData.append("thumbnail", data.courseImage)

    setLoading(true)

    const result = await addCourseDetails(formData, token)
    console.log(result)
    setShowModal(false)
    setAllCourses(result);
    setLoading(false)
  }

  const handleViewCourse = (link) => {
    navigate(link);
  };

  const handleEditCourse =async (courseId)=>{
    try{
      // setLoading(true);
      const result = await fetchCourseDetails(courseId);
      if (result.data){
        setEdit(true); 
        dispatch(setCourse(result.data[0]));
        dispatch(setEditCourse(true));
      }
      // console.log("hello", result.data[0]);
      setShowModal(true);
    }
    catch(error){
       console.log(error);
    }
    // setLoading(false);
    setConfirmationModal(null);
  };


  const handleDeleteCourse = async (courseId) =>{

      try{
         const result = await deleteCourseDetails(courseId,token);
         console.log("Delete course",result);
         if(result.data){
          //to add something
         
          setAllCourses(result.data);
          setConfirmationModal(null);
             
         }
      }
      catch(error) {
         console.log(error);
      }
  }

  
  return (
    <div >
      <div className="flex w-full items-center justify-center text-4xl mb-10">
        Certifications / Resources
      </div>

      <div className="flex justify-end" >
        <button
          className="mt-auto px-4 flex items-center gap-2 w-fit py-2 rounded border border-transparent active:scale-90 text-[#fff] bg-customDarkBlue transition-all duration-200 hover:bg-transparent hover:text-black hover:border-[0.5px] hover:border-customDarkBlue"
          onClick={() => setShowModal(true)}
        >
          Create Course
        </button>
      </div>
       {allCourses.length > 0 && 
       (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-10 mt-10" >
        {allCourses.map((course, index) => (
          <div onClick={ () => setConfirmationModal({
                  text1:"Changes ?",
                  text2:"What would you like to do with your course?",
                  btn1Text: "Edit",
                  btn2Text: "Delete",
                  btn1Handler: () => handleEditCourse(course?._id),
                  btn2Handler: () => handleDeleteCourse(course?._id),
                  ref : ref
                })}
            key={index}
            className="flex flex-col h-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 hover:scale-105 transition-all duration-300"
          >
            <img
              src={course.thumbnail}
              alt={course.courseName}
              className="w-24 h-24 my-4 rounded-xl object-cover translate-x-[80%]"
            />

            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {course.courseName}
            </h5>
            <p className="mb-5 font-normal text-gray-700 dark:text-gray-400">
              {course.courseDescription.length > 100 ? `${course.courseDescription.slice(0 , 100)}...` : `${course.courseDescription}`}
            </p>
            <button
              className="mt-auto px-4 flex items-center gap-2 w-fit py-2 rounded border border-transparent active:scale-90 text-[#fff] bg-customDarkBlue transition-all duration-200 hover:bg-transparent hover:text-black hover:border-[0.5px] hover:border-customDarkBlue"
              onClick={() => handleViewCourse(course.courseLink)}
            >
              View Course
            </button>
          </div>
        ))}
      </div>
       )}
      {/* Modal */}
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <form onSubmit={handleSubmit(handleSave)} className="bg-white p-6 rounded shadow-lg w-full max-w-lg relative">
            <button
              className="absolute top-2 right-2 text-gray-500"
              onClick={() => setShowModal(false)}
            >
              ✖
            </button>
            <h2 className="text-xl font-bold mb-4">Create a New Course</h2>

            {/* Scrollable Content */}
            <div className="space-y-4 max-h-[400px] overflow-y-auto">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Course Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="courseName"
                  type="text"
                  className="mt-1 p-2 w-full border rounded"
                  {...register("courseName", { required: true })}
                />
                {errors.courseName && (
                  <span className="ml-2 text-xs tracking-wide text-pink-200">
                    Course Name is required.
                  </span>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Course Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="courseDescription"
                  className="mt-1 p-2 w-full border rounded"
                  {...register("courseDescription", { required: true })}
                />
                {errors.courseDescription && (
                  <span className="ml-2 text-xs tracking-wide text-pink-200">
                    Course Description is required.
                  </span>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Course Link <span className="text-red-500">*</span>
                </label>
                <input
                  id="courseLink"
                  type="text"
                  className="mt-1 p-2 w-full border rounded"
                  {...register("courseLink", { required: true })}
                />
                {errors.courseLink && (
                  <span className="ml-2 text-xs tracking-wide text-pink-200">
                    Course Link is required.
                  </span>
                )}
              </div>

              <Upload 
                className="text-gray-700 font-medium"
                name="courseImage"
                label="Course Thumbnail"
                register={register}
                setValue={setValue}
                errors={errors}
                editData={editCourse ? course?.thumbnail : null}
              />
            </div>

            <div className="mt-4 flex justify-end space-x-2">
              <button
                className="px-4 py-2 bg-gray-300 rounded"
                onClick={() => setShowModal(false)}
                disabled={loading}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-customDarkBlue text-white rounded"
                type="submit"
                disabled={loading}
              >
                {loading ? "Saving..." : "Save"}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Courses Display */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-10 mt-10">
        {onCampusCourses.map((course, index) => (
          <div
            onClick={ () => setConfirmationModal({
                  text1:"Changes ?",
                  text2:"What would you like to do with your course?",
                  btn1Text: "Edit",
                  btn2Text: "Delete",
                  btn1Handler: () => handleEditCourse(course?._id),
                  btn2Handler: () => handleDeleteCourse(course?._id),
                })}
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
      {confirmationModal && <ConfirmationModal modalData = {confirmationModal}/>}
    </div>
  );
};

export default CreateCourse;
