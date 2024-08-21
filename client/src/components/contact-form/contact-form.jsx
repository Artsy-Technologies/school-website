import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useState } from "react";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitted(true);
    try {
      const response = await axios.post("/api/students/contacts", data);
      toast.success(`Contact Form Submitted! ${response?.data?.message}`);
      reset();
    } catch (error) {
      console.error("Error", error);
      toast.error("Submission FAILED!");
    } finally {
      setIsSubmitted(false);
    }
  };

  return (
<div className="flex justify-center items-center p-6 mt-6">
  <div className="bg-white dark:bg-darkModeCard dark:border-white border rounded-lg shadow-lg p-8 w-full max-w-4xl relative">
    {/* Social Media Buttons */}
    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 mb-8 flex space-x-2 -mt-4">
      <button className="bg-orange-500 p-2 border rounded-lg border-red-500 focus:border-purple-500">
        <img src="https://img.icons8.com/material-outlined/24/ffffff/facebook-new.png" alt="Facebook" />
      </button>
      <button className="bg-orange-500 p-2 border rounded-lg border-red-500 focus:border-purple-500">
        <img src="https://img.icons8.com/material-outlined/24/ffffff/twitter.png" alt="Twitter" />
      </button>
      <button className="bg-orange-500 p-2 border rounded-lg border-red-500 focus:border-purple-500">
        <img src="https://img.icons8.com/material-outlined/24/ffffff/linkedin.png" alt="LinkedIn" />
      </button>
    </div>


        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 mt-4">
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
                {...register("studentName", { required: "Student name is required" })}
                placeholder="Enter Student Name"
                className="mt-1 block w-full p-2 bg-gray-100 dark:bg-white border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
              />
              {errors.studentName && (
              <p className="text-red-500">{errors.studentName.message}</p>
            )}
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
                {...register("parentName",{required:"Parent name is required"})}
                placeholder="Enter Parent Name"
                className="mt-1 block w-full p-2 bg-gray-100 dark:bg-white border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
              />
            {errors.parentName && (
              <p className="text-red-500">{errors.parentName.message}</p>
            )}
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
                {...register("email", { required: "Email is required" })}
                placeholder="Enter Email Address"
                className="mt-1 block w-full p-2 bg-gray-100 dark:bg-white border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
              />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
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
                {...register("phoneNumber", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Phone number must be 10 digits",
                  },
                })}
                placeholder="Enter Phone Number"
                className="mt-1 block w-full p-2 bg-gray-100 dark:bg-white border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
              />
              {errors.phoneNumber && (
              <p className="text-red-500">{errors.phoneNumber.message}</p>
            )}
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
                {...register("studentAge", { required: "Student Age is required" })}
                placeholder="Enter Student Age"
                className="mt-1 block w-full p-2 bg-gray-100 dark:bg-white border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
              />
              {errors.studentAge && (
                <p className="text-red-500">{errors.studentAge.message}</p>
              )}
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
                {...register("programInterest", { required: "Program interest is required" })}
                className="mt-1 block w-full p-2 bg-gray-100 dark:bg-white border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
              >
                <option value="">Select Program</option>
                <option>Program 1</option>
                <option>Program 2</option>
                <option>Program 3</option>
              </select>
              {errors.programInterest && (
                <p className="text-red-500">{errors.programInterest.message}</p>
              )}
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
              {...register("message", { required: "Message is required" })}
              placeholder="Enter your Message"
              className="mt-1 block w-full p-2 bg-gray-100 border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
            ></textarea>
            {errors.message && (
              <p className="text-red-500">{errors.message.message}</p>
            )}
          </div>
          <div className="text-center">
            <button
              type="submit"
              className={`bg-orange-500 text-white w-48 py-2 px-4 rounded-md shadow-sm hover:bg-orange-600 transition duration-150 ease-in-out ${isSubmitting || isSubmitted ? "opacity-50 cursor-not-allowed" : ""}`}
              disabled={isSubmitting || isSubmitted}
            >
              {isSubmitting || isSubmitted ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
