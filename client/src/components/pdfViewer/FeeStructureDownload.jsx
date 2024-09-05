import { useState, useEffect } from 'react';
import axios from 'axios';

// Fetching grades from the API
const fetchGrades = async () => {
  try {
    const response = await axios.get('http://localhost:8000/api/grades');
    return response.data;
  } catch (error) {
    console.error('Error fetching grades:', error);
    return [];
  }
};

const FeeStructureDownload = () => {
  const [grades, setGrades] = useState([]);
  const [selectedGrade, setSelectedGrade] = useState('');
  const [isDownloading, setIsDownloading] = useState(false);
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const loadGrades = async () => {
      const fetchedGrades = await fetchGrades();
      setGrades(fetchedGrades);
    };
    loadGrades();
  }, []);

  const handleGradeChange = (event) => {
    setSelectedGrade(event.target.value);
  };

  const handleDownloadClick = async () => {
    if (!selectedGrade) return;

    try {
      setIsDownloading(true);

      // Find the selected grade's PDF path
      const selectedGradeInfo = grades.find((grade) => grade.grade === selectedGrade);
      if (!selectedGradeInfo) {
        setError('Selected grade not found.');
        return;
      }

      const { pdfPath } = selectedGradeInfo;
      const url = `http://localhost:8000/${pdfPath}`; // Construct the URL for the PDF

      // Download the PDF
      const response = await axios.get(url, { responseType: 'blob' });
      const blob = new Blob([response.data], { type: 'application/pdf' });
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.setAttribute('download', `${selectedGradeInfo.pdfName}`);
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    } catch (error) {
      setError('Failed to download PDF. Please try again later.');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="flex items-center justify-center md:p-24 mt-[2rem] ">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg overflow-hidden border border-gray-300">
        <div className="p-6 bg-gray-100 text-gray-800 text-center">
          <h1 className="text-2xl font-semibold">Download Fee Structure</h1>
          <p className="mt-2 text-gray-600">Select a grade to download the fee structure.</p>
        </div>

        <div className="p-6">
          {error && (
            <div className="bg-red-50 border border-red-300 text-red-600 px-4 py-2 rounded mb-4">
              <strong>Error:</strong> {error}
            </div>
          )}

          <button
            onClick={() => setShowModal(true)}
            className="w-full bg-gray-700 text-white py-3 px-4 rounded-lg shadow hover:bg-gray-800 transition duration-300"
          >
            {isDownloading ? 'Downloading...' : 'Select Grade'}
          </button>

          {isDownloading && (
            <div className="flex justify-center mt-4">
              <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-gray-600"></div>
            </div>
          )}
        </div>

        {showModal && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm border border-gray-300">
              <h2 className="text-lg font-semibold mb-4 text-gray-800">Select Grade</h2>
              <select
                value={selectedGrade}
                onChange={handleGradeChange}
                className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                <option value="">Select Grade</option>
                {grades.map((grade) => (
                  <option key={grade._id} value={grade.grade}>
                    {grade.grade}
                  </option>
                ))}
              </select>
              <div className="flex justify-end space-x-2">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition duration-300"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    setShowModal(false);
                    handleDownloadClick();
                  }}
                  className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition duration-300"
                >
                  Download
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeeStructureDownload;
