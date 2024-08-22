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
      const response = await axios.post('/api/admin/deleteFeeTable', data);
      if (response?.data === 200) {
        setResponse(response?.data);
        toast.success(res.message);
        getFeeData();
      }
    } catch (error) {
      toast.success(res?.message)
    }
  }


  return (
    <div style={{boxShadow:"2px 2px 2px 1px #676060"}} className='bg-white p-4 rounded ' >
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        
        <thead className='text-white ' >
          <tr>
            <th style={{ padding: '8px 12px', border: '1px solid #ddd', textAlign: 'left', backgroundColor: '#8F5BFF ' }}>Program Name</th>
            <th style={{ padding: '8px 12px', border: '1px solid #ddd', textAlign: 'left', backgroundColor: '#8F5BFF ' }}>Age Group</th>
            <th style={{ padding: '8px 12px', border: '1px solid #ddd', textAlign: 'left', backgroundColor: '#8F5BFF ' }}>Activity Fee</th>
            <th style={{ padding: '8px 12px', border: '1px solid #ddd', textAlign: 'left', backgroundColor: '#8F5BFF ' }}>Annual Fee</th>
            <th style={{ padding: '8px 12px', border: '1px solid #ddd', textAlign: 'left', backgroundColor: '#8F5BFF ' }}>Registration Fee</th>
            {isAdmin && <th style={{ padding: '8px 12px', border: '1px solid #ddd', textAlign: 'left', backgroundColor: '#8F5BFF' }}>Actions</th>}
          </tr>
        </thead>

        <tbody className='mt-2 ' >
          {currentData.map((item) => (
            <tr key={item._id}  >
              <td style={{ padding: '8px 12px', border: '1px solid #ddd', textAlign: 'left' }}>{item.programName}</td>
              <td style={{ padding: '8px 12px', border: '1px solid #ddd', textAlign: 'left' }}>{item.ageGroup}</td>
              <td style={{ padding: '8px 12px', border: '1px solid #ddd', textAlign: 'left' }}>{item.activityFee}</td>
              <td style={{ padding: '8px 12px', border: '1px solid #ddd', textAlign: 'left' }}>{item.annualFee}</td>
              <td style={{ padding: '8px 12px', border: '1px solid #ddd', textAlign: 'left' }}>{item.registrationFee}</td>
              {isAdmin && (
                <td style={{ padding: '8px 12px', border: '1px solid #ddd', textAlign: 'left' }}>
                  <button onClick={() => showModel()} className="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-700 mx-2 ">Edit</button>
                  <button onClick={() => handleDelete(item)}
                    className="px-4 py-1 bg-red-500 text-white rounded hover:bg-red-700">Delete</button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Component */}
      <Pagination
        current={currentPage}
        pageSize={pageSize}
        total={data.length}
        onChange={handlePageChange}
        style={{ marginTop: '16px', textAlign: 'center' }}
      />
    </div>
  );
};

export default Table;
