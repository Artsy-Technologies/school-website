import React from 'react';

const PdfViewer = () => {
  const pdfUrl = `${process.env.REACT_APP_API_URL}/download/pdf`; // URL to your PDF file

  // Function to download the PDF
  const downloadPdf = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'example.pdf'; // Name of the file to download
    link.click();
  };

  // Function to view the PDF
  const viewPdf = () => {
    window.open(pdfUrl, '_blank'); // Opens the PDF in a new tab
  };

  return (
    <div>
      <button onClick={downloadPdf} className="p-2 bg-blue-500 text-white">
        Download PDF
      </button>
      <button onClick={viewPdf} className="p-2 bg-green-500 text-white ml-2">
        View PDF
      </button>
    </div>
  );
};

export default PdfViewer;
