import PropTypes from "prop-types";
import {Trash2, Pencil} from "lucide-react"

const StudentTable = ({ students = [] }) => {
  const handleEdit = (id) => {
    // Handle the edit action, e.g., redirect to edit page
    console.log(`Edit student with ID: ${id}`);
  };

  const handleDelete = (id) => {
    // Handle the delete action, e.g., show a confirmation dialog
    console.log(`Delete student with ID: ${id}`);
  };

  return (
    <div className="w-full">
      <div className="bg-white shadow-md rounded-lg">
        <div className="px-4 py-3 border-b border-gray-200">
          <h4 className="text-lg font-semibold text-gray-700">New Student List</h4>
        </div>
        <div className="p-4">
          <div className="overflow-x-auto">
            <table className="table-auto w-full text-left">
              <thead>
                <tr className="bg-gray-50 text-gray-600 uppercase text-sm leading-normal">
                  <th className="py-3 px-6">No.</th>
                  <th className="py-3 px-6">Name</th>
                  <th className="py-3 px-6">Assigned Professor</th>
                  <th className="py-3 px-6">Date Of Admit</th>
                  <th className="py-3 px-6">Status</th>
                  <th className="py-3 px-6">Subject</th>
                  <th className="py-3 px-6">Fees</th>
                  <th className="py-3 px-6">Actions</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                {students.map((student) => (
                  <tr key={student.id} className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-3 px-6">{student.id}</td>
                    <td className="py-3 px-6">{student.name}</td>
                    <td className="py-3 px-6">{student.professor}</td>
                    <td className="py-3 px-6">{student.dateOfAdmit}</td>
                    <td className="py-3 px-6">
                      <span className={`py-1 px-3 rounded-full text-xs text-white ${student.statusColor}`}>
                        {student.status}
                      </span>
                    </td>
                    <td className="py-3 px-6">{student.subject}</td>
                    <td className="py-3 px-6">{student.fees}</td>
                    <td className="py-3 px-6">
                      <button
                        onClick={() => handleEdit(student.id)}
                        className="text-blue-500 hover:text-blue-700"
                      >
                        <Pencil />
                      </button>
                      <button
                        onClick={() => handleDelete(student.id)}
                        className="text-red-500 hover:text-red-700 ml-4"
                      >
                         <Trash2 />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

StudentTable.propTypes = {
  students: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      professor: PropTypes.string.isRequired,
      dateOfAdmit: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      statusColor: PropTypes.string.isRequired,
      subject: PropTypes.string.isRequired,
      fees: PropTypes.string.isRequired,
    })
  ),
};

export default StudentTable;
