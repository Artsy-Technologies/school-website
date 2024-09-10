import admissionForm from "./pdf/AdmissionForm.pdf"; 
const PDFDownload = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = admissionForm; 
    link.download = "AdmissionForm.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex  flex-col items-center justify-center p-4 ">
      <div className="bg-white dark:bg-darkModeCard  shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl dark:text-white font-bold text-gray-800 text-center mb-4">
          Download Admission Form
        </h1>
        <p className="text-gray-600  dark:text-white text-center mb-6">
          If you're willing to visit, you can download the admission form here.
        </p>
        <button
          onClick={handleDownload}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg w-full transition-all duration-300 ease-in-out"
        >
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default PDFDownload;
