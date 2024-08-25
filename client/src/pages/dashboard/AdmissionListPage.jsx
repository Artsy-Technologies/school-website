import { useEffect, useState } from "react";
import axios from "axios";

function AdmissionListPage() {
  const [submissions, setSubmissions] = useState([]);

  const getAdmissionData = async () => {
    try {
      let response = await axios.get("/api/students/getAdmission");
      setSubmissions(response?.data?.allAdmissionData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAdmissionData();
  }, []);

  return (
    <div className="bg-white dark:bg-darkModeCard dark:border-white dark:text-white rounded-lg shadow-lg p-8 mb-6 w-full max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-orange-600 mb-8">
        Admission Forms
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-darkModeCard border border-gray-300 dark:border-gray-700 shadow-md rounded-lg">
          <thead>
            <tr>
              <th className="py-2 px-4 bg-gray-100 dark:bg-darkModeCard font-semibold text-gray-700 dark:text-white border-b border-gray-300 dark:border-gray-700">
                Name
              </th>
              <th className="py-2 px-4 bg-gray-100 dark:bg-darkModeCard font-semibold text-gray-700 dark:text-white border-b border-gray-300 dark:border-gray-700">
                Date of Birth
              </th>
              <th className="py-2 px-4 bg-gray-100 dark:bg-darkModeCard font-semibold text-gray-700 dark:text-white border-b border-gray-300 dark:border-gray-700">
                Gender
              </th>
              <th className="py-2 px-4 bg-gray-100 dark:bg-darkModeCard font-semibold text-gray-700 dark:text-white border-b border-gray-300 dark:border-gray-700">
                Email
              </th>
              <th className="py-2 px-4 bg-gray-100 dark:bg-darkModeCard font-semibold text-gray-700 dark:text-white border-b border-gray-300 dark:border-gray-700">
                Phone Number
              </th>
              <th className="py-2 px-4 bg-gray-100 dark:bg-darkModeCard font-semibold text-gray-700 dark:text-white border-b border-gray-300 dark:border-gray-700">
                Address
              </th>
              <th className="py-2 px-4 bg-gray-100 dark:bg-darkModeCard font-semibold text-gray-700 dark:text-white border-b border-gray-300 dark:border-gray-700">
                Grade Applied
              </th>
              <th className="py-2 px-4 bg-gray-100 dark:bg-darkModeCard font-semibold text-gray-700 dark:text-white border-b border-gray-300 dark:border-gray-700">
                Previous School
              </th>
              <th className="py-2 px-4 bg-gray-100 dark:bg-darkModeCard font-semibold text-gray-700 dark:text-white border-b border-gray-300 dark:border-gray-700">
                Comments
              </th>
            </tr>
          </thead>
          <tbody>
            {submissions.map((submission) => (
              <tr key={submission.id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
                  {submission.fname} {submission.lname}
                </td>
                <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
                  {submission.dob}
                </td>
                <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
                  {submission.gender}
                </td>
                <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
                  {submission.email}
                </td>
                <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
                  {submission.phoneNumber}
                </td>
                <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
                  {submission.address}
                </td>
                <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
                  {submission.grade}
                </td>
                <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
                  {submission.previousSchool}
                </td>
                <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
                  {submission.comments || 'N/A'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdmissionListPage;
