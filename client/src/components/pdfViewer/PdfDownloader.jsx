const PdfDownloader = () => {
  const downloadPdf = () => {
    const pdfUrl = '/assets/pdf/DummyFEE.pdf';

    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'SMR_fee_Structure.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex dark:bg-darkmode mt-10 justify-center items-center   ">
      <button
        onClick={downloadPdf}
        className="bg-orange-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200"
      >
        Download PDF
      </button>
    </div>
  );
};

export default PdfDownloader;
