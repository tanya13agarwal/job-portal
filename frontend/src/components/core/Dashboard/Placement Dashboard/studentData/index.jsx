import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { getAllUser } from "../../../../../services/operations/SettingsAPI";

const StudentData = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const {token} = useSelector((state) => state.auth); // Replace with actual token management

  useEffect(() => {
    const fetchStudents = async () => {
      setLoading(true);
      const data = await getAllUser(token);
      if (data) {
        setStudents(data);
        console.log("student::::", data);
      }
      setLoading(false);
    };
    fetchStudents();
  }, []);

  

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-2xl font-bold mb-4 text-center">All Students</h1>
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Name</th>
                <th className="py-2 px-4 border-b">Branch</th>
                <th className="py-2 px-4 border-b">Semester</th>
                <th className="py-2 px-4 border-b">Email</th>
                <th className="py-2 px-4 border-b">Phone No.</th>
              </tr>
            </thead>
            <tbody>
              {students.length > 0 ? (
                students.map((student) => (
                  <tr key={student.id} className="text-center">
                    <td className="py-2 px-4 border-b">{student.name}</td>
                    <td className="py-2 px-4 border-b">{student.branch}</td>
                    <td className="py-2 px-4 border-b">{student.semester}</td>
                    <td className="py-2 px-4 border-b">{student.email}</td>
                    <td className="py-2 px-4 border-b">{student.phone}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="py-2 px-4 text-center">
                    No students found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default StudentData;
