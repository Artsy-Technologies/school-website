import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEdit, FaTrash } from 'react-icons/fa';
import axios from 'axios';

const GradeManager = () => {
  const [grades, setGrades] = useState([]);
  const [grade, setGrade] = useState('');
  const [pdf, setPdf] = useState(null);
  const [pdfName, setPdfName] = useState('');
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchGrades();
  }, []);

  // Fetch all grades from the server
  const fetchGrades = async () => {
    try {
      const response = await axios.get('/api/grades');
      setGrades(response.data);
    } catch (error) {
      toast.error('Failed to fetch grades');
    }
  };

  const handleGradeChange = (e) => setGrade(e.target.value);
  const handlePdfChange = (e) => {
    const file = e.target.files[0];
    setPdf(file);
    setPdfName(file ? file.name : '');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!grade || !pdf) {
      toast.error('Please fill all fields and upload a PDF');
      return;
    }
  
    const formData = new FormData();
    formData.append('grade', grade);
    formData.append('pdf', pdf);
  
    try {
      if (editId !== null) {
        // Update existing grade
        await axios.put(`api/grades/update/${editId}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        toast.success('Grade updated successfully');
        setEditId(null);
      } else {
        // Add new grade
        await axios.post('api/grades/add', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        toast.success('Grade added successfully');
      }
      fetchGrades();
      setGrade('');
      setPdf(null);
      setPdfName('');
    } catch (error) {
      if (error.response && error.response.status === 409) {
        toast.error('Grade already exists');
      } else {
        toast.error('Failed to submit grade');
      }
    }
  };

  const handleEdit = (id) => {
    const gradeToEdit = grades.find((g) => g._id === id);
    setGrade(gradeToEdit.grade);
    setPdfName(gradeToEdit.pdfName);
    setEditId(id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/grades/delete/${id}`);
      toast.success('Grade deleted successfully');
      fetchGrades();
    } catch (error) {
      toast.error('Failed to delete grade');
    }
  };

  return (
    <div className="container mx-auto p-6 bg-gray-100 dark:bg-gray-900 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">
        {editId ? 'Update Grade' : 'Add Grade'}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="grade" className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">Grade</label>
          <input
            type="text"
            id="grade"
            value={grade}
            onChange={handleGradeChange}
            className="w-full border border-gray-300 rounded-lg p-3 text-gray-900 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter grade"
          />
        </div>
        <div>
          <label htmlFor="pdf" className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">Upload PDF</label>
          <input
            type="file"
            id="pdf"
            accept=".pdf"
            onChange={handlePdfChange}
            className="w-full border border-gray-300 rounded-lg p-3 text-gray-500 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700 focus:ring-indigo-500 focus:border-indigo-500"
          />
          {pdfName && (
            <p className="mt-2 text-gray-600 dark:text-gray-400">Selected PDF: {pdfName}</p>
          )}
        </div>
        <div className="justify-center content-center flex">
        <button
          type="submit"
          className="w-1/2  bg-purple-600 text-white py-3 px-4 rounded-lg shadow-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          {editId ? 'Update Grade' : 'Add Grade'}
        </button>
        </div>
      </form>
      <div className="mt-8">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Current Grades</h3>
        <ul className="space-y-4">
          {grades.map((item) => (
            <li key={item._id} className="flex items-center justify-between bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
              <div>
                <p className="text-lg text-gray-800 dark:text-gray-200">Grade: {item.grade}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">PDF: {item.pdfName}</p>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleEdit(item._id)}
                  className="bg-yellow-500 text-white p-2 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => handleDelete(item._id)}
                  className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <FaTrash />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GradeManager;
