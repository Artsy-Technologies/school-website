import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    email: '',
    phoneNumber: '',
    studentAge: '',
    programInterest: '',
    message: ''
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch('http://localhost:8000/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // If successful
      setSuccess(true);
      setFormData({
        studentName: '',
        parentName: '',
        email: '',
        phoneNumber: '',
        studentAge: '',
        programInterest: '',
        message: ''
      });
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center p-6">
      <div className="bg-white dark:bg-darkModeCard dark:border-white border rounded-lg shadow-lg p-8 w-full max-w-4xl">
        {/* Social Media Buttons */}
        <div className="flex justify-center mb-4 space-x-2">
          <button className="bg-orange-500 p-2 border border-red-500 focus:border-purple-500">
            <img src="https://img.icons8.com/material-outlined/24/ffffff/facebook-new.png" />
          </button>
          <button className="bg-orange-500 p-2 border border-red-500 focus:border-purple-500">
            <img src="https://img.icons8.com/material-outlined/24/ffffff/twitter.png" />
          </button>
          <button className="bg-orange-500 p-2 border border-red-500 focus:border-purple-500">
            <img src="https://img.icons8.com/material-outlined/24/ffffff/linkedin.png" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label
                htmlFor="studentName"
                className="block text-lg font-medium dark:text-white text-purple-900"
              >
                Student Name
              </label>
              <input
                type="text"
                id="studentName"
                value={formData.studentName}
                onChange={handleChange}
                placeholder="Enter Student Name"
                className="mt-1 block w-full p-2 bg-gray-100 dark:bg-white border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
            <div>
              <label
                htmlFor="parentName"
                className="block text-lg font-medium dark:text-white text-purple-900"
              >
                Parent Name
              </label>
              <input
                type="text"
                id="parentName"
                value={formData.parentName}
                onChange={handleChange}
                placeholder="Enter Parent Name"
                className="mt-1 block w-full p-2 bg-gray-100 dark:bg-white border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-lg font-medium dark:text-white text-purple-900"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Email Address"
                className="mt-1 block w-full p-2 bg-gray-100 dark:bg-white border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-lg font-medium dark:text-white text-purple-900"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Enter Phone Number"
                className="mt-1 block w-full p-2 bg-gray-100 dark:bg-white border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
            <div>
              <label
                htmlFor="studentAge"
                className="block text-lg font-medium dark:text-white text-purple-900"
              >
                Student Age
              </label>
              <input
                type="number"
                id="studentAge"
                value={formData.studentAge}
                onChange={handleChange}
                placeholder="Enter Student Age"
                className="mt-1 block w-full p-2 bg-gray-100 dark:bg-white border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
            <div>
              <label
                htmlFor="programInterest"
                className="block text-lg font-medium dark:text-white text-purple-900"
              >
                Program of Interest
              </label>
              <select
                id="programInterest"
                value={formData.programInterest}
                onChange={handleChange}
                className="mt-1 block w-full p-2 bg-gray-100 dark:bg-white border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
              >
                <option>Select Program</option>
                <option>Program 1</option>
                <option>Program 2</option>
                <option>Program 3</option>
              </select>
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-lg font-medium dark:text-white text-purple-900"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your Message"
              className="mt-1 block w-full p-2 bg-gray-100 border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
            ></textarea>
          </div>
          {error && (
            <div className="text-red-500 mb-4">
              <p>{error}</p>
            </div>
          )}
          {success && (
            <div className="text-green-500 mb-4">
              <p>Form submitted successfully!</p>
            </div>
          )}
          <div className="text-center">
            <button
              type="submit"
              className="bg-orange-500 text-white w-48 py-2 px-4 rounded-md shadow-sm hover:bg-orange-600 transition duration-150 ease-in-out"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
