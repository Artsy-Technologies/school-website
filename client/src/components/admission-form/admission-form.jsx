import { useState } from 'react';
import { toast } from 'react-toastify';

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    gender: '',
    email: '',
    phoneNumber: '',
    address: '',
    previousSchool: '',
    applyingForGrade: '',
    comments: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/admission', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      console.log('Success:', result);
      toast.success("message:", result);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
      <div className="bg-white dark:bg-darkModeCard dark:border-white dark:text-white rounded-lg shadow-lg p-8 mb-6 w-full max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-orange-600 mb-8">
          Admission Form
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Form fields */}
            <div>
              <label htmlFor="firstName" className="block text-lg font-medium dark:text-white text-gray-700 mb-2">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter First Name"
                className="p-2 block w-full bg-gray-100 border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 transition duration-150 ease-in-out"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-lg font-medium dark:text-white text-gray-700 mb-2">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter Last Name"
                className="block w-full p-2 bg-gray-100 border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 transition duration-150 ease-in-out"
              />
            </div>
            <div>
              <label htmlFor="dob" className="block text-lg font-medium dark:text-white text-gray-700 mb-2">
                Date of Birth
              </label>
              <input
                type="date"
                id="dob"
                value={formData.dob}
                onChange={handleChange}
                className="block w-full p-2 bg-gray-100 border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 transition duration-150 ease-in-out"
              />
            </div>
            <div>
              <label htmlFor="gender" className="block text-lg font-medium dark:text-white text-gray-700 mb-2">
                Gender
              </label>
              <select
                id="gender"
                value={formData.gender}
                onChange={handleChange}
                className="block w-full p-2 bg-gray-100 border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 transition duration-150 ease-in-out"
              >
                <option>Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
                <option>Prefer not to say</option>
              </select>
            </div>
            {/* Other fields */}
            <div className="col-span-2 mt-6">
              <h2 className="text-orange-600 text-2xl font-semibold mb-4">
                Contact Details
              </h2>
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium dark:text-white text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Email Address"
                className="block w-full p-2 bg-gray-100 border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 transition duration-150 ease-in-out"
              />
            </div>
            <div>
              <label htmlFor="phoneNumber" className="block text-lg font-medium dark:text-white text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Enter Phone Number"
                className="block w-full p-2 bg-gray-100 border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 transition duration-150 ease-in-out"
              />
            </div>
            <div className="mb-4 col-span-2">
              <label htmlFor="address" className="block text-lg font-medium dark:text-white text-gray-700 mb-2">
                Address
              </label>
              <textarea
                id="address"
                value={formData.address}
                onChange={handleChange}
                rows="4"
                placeholder="Enter your Address"
                className="block w-full p-2 bg-gray-100 border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 transition duration-150 ease-in-out"
              ></textarea>
            </div>
            <div className="col-span-2 mt-6">
              <h2 className="text-orange-600 text-2xl font-semibold mb-4">
                Academic Information
              </h2>
            </div>
            <div className="mb-4 col-span-2">
              <label htmlFor="previousSchool" className="block text-lg font-medium dark:text-white text-gray-700 mb-2">
                Previous School
              </label>
              <textarea
                id="previousSchool"
                value={formData.previousSchool}
                onChange={handleChange}
                rows="2"
                placeholder="Enter Previous School"
                className="block w-full p-2 bg-gray-100 border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 transition duration-150 ease-in-out"
              ></textarea>
            </div>
            <div>
              <label htmlFor="applyingForGrade" className="block text-lg font-medium dark:text-white text-gray-700 mb-2">
                Applying for Grade
              </label>
              <input
                type="text"
                id="applyingForGrade"
                value={formData.applyingForGrade}
                onChange={handleChange}
                placeholder="Enter Grade"
                className="block w-full p-2 bg-gray-100 border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 transition duration-150 ease-in-out"
              />
            </div>
            <div className="mb-4 col-span-2">
              <label htmlFor="comments" className="block text-lg font-medium dark:text-white text-gray-700 mb-2">
                Comments
              </label>
              <textarea
                id="comments"
                value={formData.comments}
                onChange={handleChange}
                rows="4"
                placeholder="Enter any additional comments"
                className="block w-full p-2 bg-gray-100 border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 transition duration-150 ease-in-out"
              ></textarea>
            </div>
            <div className="text-center col-span-2">
              <button
                type="submit"
                className="bg-orange-500 text-white w-48 py-2 px-4 rounded-md shadow-sm hover:bg-orange-600 transition duration-150 ease-in-out"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
  );
};

export default AdmissionForm;
