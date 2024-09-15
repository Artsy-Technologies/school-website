/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Pagination } from 'antd';
import { useAdmin } from '../../hooks/AdminContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Table = ({ getFeeData, data, showModel }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 3; // Number of items per page
  const { isAdmin } = useAdmin(); // Access the isAdmin state from context
  const [res, setResponse] = useState();

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Calculate the data to display for the current page
  const currentData = data.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );


  // ---------------------------------- delete function ----------------------------
  const handleDelete = async (data) => {
    try {
      const response = await axios.delete('/api/admin/deleteFeeTable', {
        params:{_id: data._id}
      });
      if (response?.status === 200) {
        toast.success("Deleted Successfully!");
        getFeeData();
      }
    } catch (error) {
      toast.success(res?.message)
    }
  }


  return (
<div
  style={{ boxShadow: "2px 2px 2px 1px #676060" }}
  className="bg-white dark:bg-gray-700 p-4 rounded overflow-x-auto" // Added overflow-x-auto for horizontal scrolling
>
  <table className="min-w-full border-collapse">
    {/* Changed inline styles to Tailwind classes */}
    <thead className="bg-[#8F5BFF] text-white">
      <tr>
        <th className="p-2 border border-[#ddd] text-left">Program Name</th>
        <th className="p-2 border border-[#ddd] text-left">Age Group</th>
        <th className="p-2 border border-[#ddd] text-left">Activity Fee</th>
        <th className="p-2 border border-[#ddd] text-left">Annual Fee</th>
        <th className="p-2 border border-[#ddd] text-left">Registration Fee</th>
        {isAdmin && <th className="p-2 border border-[#ddd] text-left">Actions</th>}
      </tr>
    </thead>

    <tbody className="mt-2 dark:text-white">
      {currentData.map((item) => (
        <tr key={item._id} className="border-t border-[#ddd]">
          <td className="p-2 border border-[#ddd] text-center">{item.programName}</td>
          <td className="p-2 border border-[#ddd] text-center">{item.ageGroup}</td>
          <td className="p-2 border border-[#ddd] text-center">{item.activityFee}</td>
          <td className="p-2 border border-[#ddd] text-center">{item.annualFee}</td>
          <td className="p-2 border border-[#ddd] text-center">{item.registrationFee}</td>
          {isAdmin && (
            <td className="p-2 border border-[#ddd] text-center">
              <button
                onClick={() => showModel()}
                className="px-[1.6rem] mb-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-700 "
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(item)}
                className="px-4 py-1 bg-red-500 text-white rounded hover:bg-red-700 lg:ml-1 "
              >
                Delete
              </button>
            </td>
          )}
        </tr>
      ))}
    </tbody>
  </table>

  {/* Pagination Component */}
  <div className="mt-4 text-center">
    <Pagination
      current={currentPage}
      pageSize={pageSize}
      total={data.length}
      onChange={handlePageChange}
    />
  </div>
</div>

  );
};

export default Table;
