import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { getAllUser } from "../../../../../services/operations/SettingsAPI";

const Table = () => {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(false);
    const { token } = useSelector((state) => state.auth);
  
    useEffect(() => {
      const fetchStudents = async () => {
        setLoading(true);
        const data = await getAllUser(token);
        if (data) {
          const sortedData = data.sort((a, b) => a?.additionalDetails?.sem - b?.additionalDetails?.sem);
          setStudents(sortedData);
          console.log("student::::", sortedData);
        }
        setLoading(false);
      };
      fetchStudents();
    }, [token]);

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-2xl font-bold mb-4 text-center">All Students</h1>
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="overflow-x-auto shadow-xl">
          <div className="max-h-[612px] overflow-y-auto rounded-lg">
            <table className="min-w-full bg-white border border-gray-300">
              <thead className="bg-customDarkBlue text-white sticky top-0 z-10">
                <tr>
                  <th className="py-3 px-6 border border-gray-300 text-left">S.No</th>
                  <th className="py-3 px-6 border border-gray-300 text-left">Name</th>
                  <th className="py-3 px-6 border border-gray-300 text-left">Gender</th>
                  <th className="py-3 px-6 border border-gray-300 text-left">Branch</th>
                  <th className="py-3 px-6 border border-gray-300 text-left">Semester</th>
                  <th className="py-3 px-6 border border-gray-300 text-left">Email</th>
                  <th className="py-3 px-6 border border-gray-300 text-left">Phone No.</th>
                  <th className="py-3 px-6 border border-gray-300 text-left">CGPA</th>
                  <th className="py-3 px-6 border border-gray-300 text-left">Backlogs</th>
                  <th className="py-3 px-8 border border-gray-300 text-left">Is Placed</th>
                </tr>
              </thead>
              <tbody>
                {students.length > 0 ? (
                  students.map((student, index) => (
                    <tr key={student?.id} className="text-center hover:bg-gray-50">
                      <td className="py-3 px-6 border border-gray-300">{index + 1}</td>
                      <td className="py-3 px-6 border border-gray-300">
                        {student?.firstName} {student?.lastName}
                      </td>
                      <td className="py-3 px-6 border border-gray-300">
                        {student?.additionalDetails?.gender}
                      </td>
                      <td className="py-3 px-6 border border-gray-300">
                        {student?.additionalDetails?.brch}
                      </td>
                      <td className="py-3 px-6 border border-gray-300">
                        {student?.additionalDetails?.sem}
                      </td>
                      <td className="py-3 px-6 border border-gray-300">{student?.email}</td>
                      <td className="py-3 px-6 border border-gray-300">
                        {student?.additionalDetails?.ph_num}
                      </td>
                      <td className="py-3 px-6 border border-gray-300">
                        {student?.additionalDetails?.cgpa}
                      </td>
                      <td className="py-3 px-6 border border-gray-300">
                        {student?.additionalDetails?.bklgs}
                      </td>
                      <td className="py-3 px-8 border border-gray-300">
                        <button
                          className={`py-2 px-4 rounded border border-transparent active:scale-90 transition-all duration-200 ${
                            student?.additionalDetails?.isPlaced
                              ? "text-gray-400 bg-gray-200 cursor-not-allowed"
                              : "text-[#fff] bg-customDarkBlue hover:bg-transparent hover:text-black hover:border-[0.5px] hover:border-customDarkBlue"
                          }`}
                          disabled={student?.additionalDetails?.isPlaced}
                        >
                          Placed
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="10" className="py-3 px-6 text-center">
                      No students found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}

export default Table
