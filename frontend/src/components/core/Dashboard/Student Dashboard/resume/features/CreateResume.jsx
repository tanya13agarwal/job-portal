import React from "react";

const CreateResume = () => {
   React.useEffect(() => {
      window.open('https://ats-resume-maker-ruby.vercel.app/', '_blank');
   }, []);

   return (
      <div>
         <h1>Redirecting to Resume Maker...</h1>
         <p>You can return to this tab to continue browsing.</p>
      </div>
   );
};

export default CreateResume;



// import React, { useState } from "react";
// // import axios from "axios";
// // import { MdDeleteForever } from "react-icons/md";

// const CreateResume = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     location: "",
//     email: "",
//     phone: "",
//     website: "",
//     linkedin: "",
//     github: "",
//     objective: "",
//     education: [{ dates: "", institute: "", degree: "", gpa: "" }],
//     experience: [
//       { dates: "", location: "", role: "", company: "", bullets: ["", "", ""] },
//     ],
//     projects: [{ name: "", link: "", description: "", tools: "" }],
//     languages: "",
//     technologies: "",
//   });

//   const handleInputChange = (e, section, index, field, subIndex) => {
//     if (section) {
//       const updatedSection = [...formData[section]];
//       if (subIndex !== undefined) {
//         updatedSection[index][field][subIndex] = e.target.value;
//       } else {
//         updatedSection[index][field] = e.target.value;
//       }
//       setFormData({ ...formData, [section]: updatedSection });
//     } else {
//       setFormData({ ...formData, [e.target.name]: e.target.value });
//     }
//   };

//   const handleAddSection = (section) => {
//     let newSection;
//     if (section === "education") {
//       newSection = { dates: "", institute: "", degree: "", gpa: "" };
//     } else if (section === "experience") {
//       newSection = {
//         dates: "",
//         location: "",
//         role: "",
//         company: "",
//         bullets: ["", "", ""],
//       };
//     } else if (section === "projects") {
//       newSection = { name: "", link: "", description: "", tools: "" };
//     }
//     setFormData({ ...formData, [section]: [...formData[section], newSection] });
//   };

//   const handleRemoveSection = (section, index) => {
//     const updatedSection = formData[section].filter((_, i) => i !== index);
//     setFormData({ ...formData, [section]: updatedSection });
//   };

//   const handleDownloadPDF = async () => {
//     try {
//       const response = await axios.post(
//         "http://localhost:4000/api/v1/resume/compile-latex",
//         { formData },
//         { responseType: "blob" }
//       );

//       const url = window.URL.createObjectURL(new Blob([response.data]));
//       const link = document.createElement("a");
//       link.href = url;
//       link.setAttribute("download", "resume.pdf");
//       document.body.appendChild(link);
//       link.click();
//       link.remove();
//     } catch (error) {
//       console.error("Error generating PDF:", error);
//     }
//   };

//   return (
//     <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
//       <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
//         Create Your Resume
//       </h2>
//       <form className="space-y-8">
//         {/* Basic Information */}
//         <div className="space-y-4 border-b pb-6">
//           <h3 className="text-xl font-semibold text-gray-700">
//             Basic Information
//           </h3>
//           <input
//             type="text"
//             name="name"
//             placeholder="Name"
//             className="w-full p-2 border rounded"
//             value={formData.name}
//             onChange={handleInputChange}
//           />
//           <input
//             type="text"
//             name="location"
//             placeholder="Location"
//             className="w-full p-2 border rounded"
//             value={formData.location}
//             onChange={handleInputChange}
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             className="w-full p-2 border rounded"
//             value={formData.email}
//             onChange={handleInputChange}
//           />
//           <input
//             type="text"
//             name="phone"
//             placeholder="Phone"
//             className="w-full p-2 border rounded"
//             value={formData.phone}
//             onChange={handleInputChange}
//           />
//           <input
//             type="text"
//             name="website"
//             placeholder="Website"
//             className="w-full p-2 border rounded"
//             value={formData.website}
//             onChange={handleInputChange}
//           />
//           <input
//             type="text"
//             name="linkedin"
//             placeholder="LinkedIn"
//             className="w-full p-2 border rounded"
//             value={formData.linkedin}
//             onChange={handleInputChange}
//           />
//           <input
//             type="text"
//             name="github"
//             placeholder="GitHub"
//             className="w-full p-2 border rounded"
//             value={formData.github}
//             onChange={handleInputChange}
//           />
//           <textarea
//             name="objective"
//             placeholder="Objective"
//             className="w-full p-2 border rounded"
//             value={formData.objective}
//             onChange={handleInputChange}
//           />
//         </div>

//         {/* Education Section */}
//         <div className="space-y-4 border-b pb-6">
//           <h3 className="text-xl font-semibold text-gray-700">Education</h3>
//           {formData.education.map((edu, index) => (
//             <div key={index} className="space-y-2">
//               <div className="flex items-center justify-between">
                
//                 <h4 className="text-lg font-medium text-gray-600">{`Education ${
//                 index + 1
//                 }`}</h4>
//                 <MdDeleteForever
                
//                 className="text-2xl"
//                 onClick={() => handleRemoveSection("education", index)}
//                 />
      
//               </div>
//               <input
//                 type="text"
//                 placeholder={`Institute ${index + 1}`}
//                 className="w-full p-2 border rounded"
//                 value={edu.institute}
//                 onChange={(e) =>
//                   handleInputChange(e, "education", index, "institute")
//                 }
//               />
//               <input
//                 type="text"
//                 placeholder={`Degree ${index + 1}`}
//                 className="w-full p-2 border rounded"
//                 value={edu.degree}
//                 onChange={(e) =>
//                   handleInputChange(e, "education", index, "degree")
//                 }
//               />
//               <input
//                 type="text"
//                 placeholder={`Dates ${index + 1}`}
//                 className="w-full p-2 border rounded"
//                 value={edu.dates}
//                 onChange={(e) =>
//                   handleInputChange(e, "education", index, "dates")
//                 }
//               />
//               <input
//                 type="text"
//                 placeholder={`GPA ${index + 1}`}
//                 className="w-full p-2 border rounded"
//                 value={edu.gpa}
//                 onChange={(e) => handleInputChange(e, "education", index, "gpa")}
//               />
              
//             </div>
//           ))}
//           <button
//             type="button"
//             className="text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded"
//             onClick={() => handleAddSection("education")}
//           >
//             + Add Education
//           </button>
//         </div>
//                 {/* Experience Section */}
//                 <div className="space-y-4 border-b pb-6">
//           <h3 className="text-xl font-semibold text-gray-700">Experience</h3>
//           {formData.experience.map((exp, index) => (
//             <div key={index} className="space-y-2">
//             <div className="flex items-center justify-between">
//               <h4 className="text-lg font-medium text-gray-600">{`Experience ${
//                 index + 1
//               }`}</h4>
//               <MdDeleteForever
                
//                 className="text-2xl"
//                 onClick={() => handleRemoveSection("experience", index)}
//                 />
//             </div>
             
//               <input
//                 type="text"
//                 placeholder={`Role ${index + 1}`}
//                 className="w-full p-2 border rounded"
//                 value={exp.role}
//                 onChange={(e) =>
//                   handleInputChange(e, "experience", index, "role")
//                 }
//               />
//               <input
//                 type="text"
//                 placeholder={`Company ${index + 1}`}
//                 className="w-full p-2 border rounded"
//                 value={exp.company}
//                 onChange={(e) =>
//                   handleInputChange(e, "experience", index, "company")
//                 }
//               />
//               <input
//                 type="text"
//                 placeholder={`Dates ${index + 1}`}
//                 className="w-full p-2 border rounded"
//                 value={exp.dates}
//                 onChange={(e) =>
//                   handleInputChange(e, "experience", index, "dates")
//                 }
//               />
//               <input
//                 type="text"
//                 placeholder={`Location ${index + 1}`}
//                 className="w-full p-2 border rounded"
//                 value={exp.location}
//                 onChange={(e) =>
//                   handleInputChange(e, "experience", index, "location")
//                 }
//               />
//               {exp.bullets.map((bullet, subIndex) => (
//                 <textarea
//                   key={subIndex}
//                   placeholder={`Bullet ${subIndex + 1}`}
//                   className="w-full p-2 border rounded"
//                   value={bullet}
//                   onChange={(e) =>
//                     handleInputChange(
//                       e,
//                       "experience",
//                       index,
//                       "bullets",
//                       subIndex
//                     )
//                   }
//                 />
//               ))}
              
//             </div>
//           ))}
//           <button
//             type="button"
//             className="text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded"
//             onClick={() => handleAddSection("experience")}
//           >
//             + Add Experience
//           </button>
//         </div>

//         {/* Projects Section */}
//         <div className="space-y-4 border-b pb-6">
//           <h3 className="text-xl font-semibold text-gray-700">Projects</h3>
//           {formData.projects.map((proj, index) => (
//             <div key={index} className="space-y-2">
//             <div className="flex items-center justify-between">
//             <h4 className="text-lg font-medium text-gray-600">{`Project ${
//                 index + 1
//               }`}</h4>

//               <MdDeleteForever
                
//                 className="text-2xl"
//                 onClick={() => handleRemoveSection("projects", index)}
//                 />

//             </div>
              
//               <input
//                 type="text"
//                 placeholder={`Project Name ${index + 1}`}
//                 className="w-full p-2 border rounded"
//                 value={proj.name}
//                 onChange={(e) => handleInputChange(e, "projects", index, "name")}
//               />
//               <input
//                 type="text"
//                 placeholder={`Project Link ${index + 1}`}
//                 className="w-full p-2 border rounded"
//                 value={proj.link}
//                 onChange={(e) => handleInputChange(e, "projects", index, "link")}
//               />
//               <textarea
//                 placeholder={`Description ${index + 1}`}
//                 className="w-full p-2 border rounded"
//                 value={proj.description}
//                 onChange={(e) =>
//                   handleInputChange(e, "projects", index, "description")
//                 }
//               />
//               <input
//                 type="text"
//                 placeholder={`Tools Used ${index + 1}`}
//                 className="w-full p-2 border rounded"
//                 value={proj.tools}
//                 onChange={(e) => handleInputChange(e, "projects", index, "tools")}
//               />
              
//             </div>
//           ))}
//           <button
//             type="button"
//             className="text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded"
//             onClick={() => handleAddSection("projects")}
//           >
//             + Add Project
//           </button>
//         </div>

//         {/* Skills Section */}
//         <div className="space-y-4">
//           <h3 className="text-xl font-semibold text-gray-700">Skills</h3>
//           <input
//             type="text"
//             name="languages"
//             placeholder="Languages (comma-separated)"
//             className="w-full p-2 border rounded"
//             value={formData.languages}
//             onChange={handleInputChange}
//           />
//           <input
//             type="text"
//             name="technologies"
//             placeholder="Technologies (comma-separated)"
//             className="w-full p-2 border rounded"
//             value={formData.technologies}
//             onChange={handleInputChange}
//           />
//         </div>
//       </form>


//       <div className="text-center mt-6">
//         <button
//           type="button"
//           className="bg-green-500 text-white py-2 px-6 rounded hover:bg-green-600"
//           onClick={handleDownloadPDF}
//         >
//           Download Resume
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CreateResume;

