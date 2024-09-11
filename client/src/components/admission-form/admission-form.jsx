import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import PDFDownload from "../pdfViewer/PdfDownloader.jsx"

const AdmissionForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("/api/students/admission", data);
      toast.success(`Form Submission ${response?.data?.message}`);
    } catch (error) {
      console.error("Error:", error);
      toast.error("Submission failed!");
    }
  };

  return (
    <>
    <div className="bg-white dark:bg-darkModeCard dark:border-white dark:text-white rounded-lg shadow-lg p-8 mb-6 w-full max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-orange-600 dark:text-orange-300 mb-8">
        Admission Form
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="md:grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Form fields */}
          
          <div className="my-4 " >
            <label
              htmlFor="firstName"
              className="block leading-3 text-lg font-medium dark:text-white text-gray-700 mb-2"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              {...register("firstName", { required: "First name is required" })}
              placeholder="Enter First Name"
              className="p-2 block w-full bg-gray-100 placeholder-gray-400 dark:bg-gray-400 dark:placeholder-gray-600 border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 transition duration-150 ease-in-out"
            />
            {errors.firstName && (
              <p className="text-red-500 dark:text-orange-300">{errors.firstName.message}</p>
            )}
          </div>

          <div className="my-4 ">
            <label
              htmlFor="lastName"
              className="block leading-3 text-lg font-medium dark:text-white text-gray-700 mb-2"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              {...register("lastName", { required: "Last name is required" })}
              placeholder="Enter Last Name"
              className="block w-full p-2 bg-gray-100 placeholder-gray-400 dark:bg-gray-400 dark:placeholder-gray-600 border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 transition duration-150 ease-in-out"
            />
            {errors.lastName && (
              <p className="text-red-500 dark:text-orange-300">{errors.lastName.message}</p>
            )}
          </div>
          
          <div className="my-4 ">
            <label
              htmlFor="dob"
              className="block leading-3 text-lg font-medium dark:text-white text-gray-700 mb-2"
            >
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              placeholder="DOB"
              {...register("dob", { required: "Date of birth is required" })}
              className="block w-full p-2 bg-gray-100 placeholder-gray-400 dark:bg-gray-400 dark:placeholder-gray-600 border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 transition duration-150 ease-in-out"
            />
            {errors.dob && <p className="text-red-500 dark:text-orange-300">{errors.dob.message}</p>}
          </div>

          <div className="my-4 ">
            <label
              htmlFor="gender"
              className="block leading-3 text-lg font-medium dark:text-white text-gray-700 mb-2"
            >
              Gender
            </label>
            <select
              id="gender"
              {...register("gender", { required: "Gender is required" })}
              className="block w-full p-2 bg-gray-100 placeholder-gray-400 dark:bg-gray-400 dark:placeholder-gray-600 border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 transition duration-150 ease-in-out"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
              <option value="Prefer not to say">Prefer not to say</option>
            </select>
            {errors.gender && (
              <p className="text-red-500 dark:text-orange-300">{errors.gender.message}</p>
            )}
          </div>

          {/* Other fields */}
          <div className="col-span-2 mt-6">
            <h2 className="text-orange-600 dark:text-orange-300 text-2xl font-semibold mb-4">
              Contact Details
            </h2>
          </div>

          <div className="my-4 " >
            <label
              htmlFor="email"
              className="block leading-3 text-lg font-medium dark:text-white text-gray-700 mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              {...register("email", { required: "Email is required" })}
              placeholder="Enter Email Address"
              className="block w-full p-2 bg-gray-100 placeholder-gray-400 dark:bg-gray-400 dark:placeholder-gray-600 border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 transition duration-150 ease-in-out"
            />
            {errors.email && (
              <p className="text-red-500 dark:text-orange-300">{errors.email.message}</p>
            )}
          </div>

          <div className="my-4 " >
            <label
              htmlFor="phoneNumber"
              className="block leading-3 text-lg font-medium dark:text-white text-gray-700 mb-2"
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
              className="block w-full p-2 bg-gray-100 placeholder-gray-400 dark:bg-gray-400 dark:placeholder-gray-600 border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 transition duration-150 ease-in-out"
            />
            {errors.phoneNumber && (
              <p className="text-red-500 dark:text-orange-300">{errors.phoneNumber.message}</p>
            )}
          </div>

          <div className="mb-4 col-span-2 my-4 ">
            <label
              htmlFor="address"
              className="block text-lg font-medium dark:text-white text-gray-700 mb-2"
            >
              Address
            </label>
            <textarea
              id="address"
              {...register("address", { required: "Address is required" })}
              rows="4"
              placeholder="Enter your Address"
              className="block w-full p-2 bg-gray-100 placeholder-gray-400 dark:bg-gray-400 dark:placeholder-gray-600 border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 transition duration-150 ease-in-out"
            ></textarea>
            {errors.address && (
              <p className="text-red-500 dark:text-orange-300">{errors.address.message}</p>
            )}
          </div>
          <div className="col-span-2 mt-6">
            <h2 className="text-orange-600 dark:text-orange-300 text-2xl font-semibold mb-4">
              Academic Information
            </h2>
          </div>
          <div className="mb-4 col-span-2">
            <label
              htmlFor="previousSchool"
              className="block text-lg font-medium dark:text-white text-gray-700 mb-2"
            >
              Previous School
            </label>
            <textarea
              id="previousSchool"
              {...register("previousSchool", {
                required: "Previous school is required",
              })}
              rows="2"
              placeholder="Enter Previous School"
              className="block w-full p-2 bg-gray-100 placeholder-gray-400 dark:bg-gray-400 dark:placeholder-gray-600 border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 transition duration-150 ease-in-out"
            ></textarea>
            {errors.previousSchool && (
              <p className="text-red-500 dark:text-orange-300">{errors.previousSchool.message}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="grade"
              className="block text-lg font-medium dark:text-white text-gray-700 mb-2"
            >
              Applying for Grade
            </label>
            <input
              type="text"
              id="grade"
              {...register("grade", {
                required: "Applying for grade is required",
                pattern: {
                  value: /^[A-Za-z\s]+$/,
                  message: "Numbers are not allowed",
                },
              })}
              placeholder="Enter Grade"
              className="block w-full p-2 bg-gray-100 placeholder-gray-400 dark:bg-gray-400 dark:placeholder-gray-600 border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 transition duration-150 ease-in-out"
            />

            {errors.grade && (
              <p className="text-red-500 dark:text-orange-300">{errors.grade.message}</p>
            )}
          </div>
          <div className="mb-4 col-span-2">
            <label
              htmlFor="comments"
              className="block text-lg font-medium dark:text-white text-gray-700 mb-2"
            >
              Comments
            </label>
            <textarea
              id="comments"
              {...register("comments")}
              rows="4"
              placeholder="Enter any additional comments"
              className="block w-full p-2 bg-gray-100 placeholder-gray-400 dark:bg-gray-400 dark:placeholder-gray-600 border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 transition duration-150 ease-in-out"
            ></textarea>
          </div>
          <div className="text-center col-span-2 mt-8">
            <button
              type="submit"
              className="bg-orange-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-orange-700 focus:ring-4 focus:ring-orange-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
    <PDFDownload/>
  </>
  );
};

export default AdmissionForm;
