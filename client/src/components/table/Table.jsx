import { Pagination } from 'antd'
import React, { useState } from 'react'

const Table = ({ columns, data, isAdmin }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 3

  const handlePageChange = page => {
    setCurrentPage(page)
  }

  const currentData = data.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  )

  return (
    <div className="relative flex flex-col  items-center">
      <div className="p-5 bg-white border-black border-b-4 border-r-4 rounded shadow-md overflow-x-auto w-full max-w-4xl mb-10">
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
            </tr>
          </thead>
          <tbody>
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
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={data.length}
          onChange={handlePageChange}
          className="mt-4"
        />
      </div>
    </div>
  )
}

export default Table
