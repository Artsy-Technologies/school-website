/* eslint-disable react/prop-types */
import { Pagination } from 'antd'
import { useState } from 'react'

const Table = ({ columns, data, isAdmin }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 3

  // console.log(isAdmin, 'from the table component')

  const handlePageChange = page => {
    setCurrentPage(page)
  }

  const currentData = data.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  )

  return (
    <div className="p-5  bg-white border-black border-b-4 border-r-4 rounded shadow-md overflow-x-auto">
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-darkpurple font-normal text-[1rem] text-white text-left">
            {columns.map((col, index) => (
              <th
                key={index}
                className="px-4 py-2 border border-white"
                style={{
                  borderTopLeftRadius: index === 0 ? '0.5rem' : '0',
                  borderTopRightRadius:
                    index === columns.length - 1 ? '0.5rem' : '0',
                  fontFamily: 'sans-serif',
                }}
              >
                {col.header}
              </th>
            ))}
            {/* {isAdmin && (
              <th
                className="px-4 py-2"
                style={{ borderTopRightRadius: '0.5rem' }}
              >
                Action
              </th>
            )} */}
            {isAdmin === true ? (
              <th
                className="px-4 py-2"
                style={{ borderTopRightRadius: '0.5rem' }}
              >
                Action
              </th>
            ) : (
              <></>
            )}
          </tr>
        </thead>
        <tbody>
          <tr className="bg-transparent ">
            {columns.map((col, index) => (
              <td
                key={index}
                colSpan={isAdmin && index === columns.length - 1 ? 2 : 1}
                className="py-2"
              ></td>
            ))}
          </tr>
          {currentData.map((row, rowIndex) => (
            <tr key={rowIndex} className="bg-white">
              {columns.map((col, colIndex) => (
                <td
                  key={colIndex}
                  className="border border-black text-[1em] px-4 py-2"
                >
                  {row[col.accessor]}
                </td>
              ))}
              {isAdmin === true && (
                <td className="border px-4 py-2 flex space-x-2">
                  <button className="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-700">
                    Edit
                  </button>
                  <button className="px-4 py-1 bg-red-500 text-white rounded hover:bg-red-700">
                    Delete
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        current={currentPage}
        pageSize={pageSize}
        total={data.length}
        onChange={handlePageChange}
        className="mt-4 justify-start"
      />
    </div>
  )
}

export default Table
