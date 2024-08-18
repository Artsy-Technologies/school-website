const AdmissionForm = () => {
    return (
      <div class=" flex justify-center items-center min-h-screen p-4">
        <div class="bg-white rounded-lg shadow-lg p-8 w-full max-w-4xl  ">
          <h1 class="text-4xl font-bold  text-center text-orange-500 mb-6">
            ADMISSION FORM
          </h1>
          <div class="col-span-2 mt-4">
            <h2 class="text-orange-500 text-2xl font-bold">
              PERSONAL INFORMATION
            </h2>
          </div>
          <form action="#">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label
                  for="studentName"
                  class="block text-lg font-medium text-purple-900"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="Enter First Name"
                  class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <div>
                <label
                  for="lastName"
                  class="block text-lg font-medium text-purple-900"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Enter Last Name"
                  class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <div>
                <label
                  for="dob"
                  class="block text-lg font-medium text-purple-900"
                >
                  Date of Birth
                </label>
                <input
                  type="date"
                  id="dob"
                  class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <div>
                <label
                  for="gender"
                  class="block text-lg font-medium text-purple-900"
                >
                  Gender
                </label>
                <select
                  id="gender"
                  class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                >
                  <option>Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                  <option>Prefer not to say</option>
                </select>
              </div>
              <div class="col-span-2 mt-4">
                <h2 class="text-orange-500 text-2xl font-bold">
                  CONTACT DETAILS
                </h2>
              </div>
              <div>
                <label
                  for="email"
                  class="block text-lg font-medium text-purple-900"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter Email Address"
                  class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <div>
                <label
                  for="phoneNumber"
                  class="block text-lg font-medium text-purple-900"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  placeholder="Enter Phone Number"
                  class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <div class="mb-4 col-span-2">
                <label
                  for="address"
                  class="block text-lg font-medium text-purple-900"
                >
                  Address
                </label>
                <textarea
                  id="address"
                  rows="4"
                  placeholder="Enter your Address"
                  class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                ></textarea>
              </div>
              <div class="col-span-2 mt-4">
                <h2 class="text-orange-500 text-2xl font-bold">
                  ACADEMIC INFORMATION
                </h2>
              </div>
              <div class="mb-4 col-span-2">
                <label
                  for="previousSchool"
                  class="block text-lg font-medium text-purple-900"
                >
                  Previous School
                </label>
                <textarea
                  id="previousSchool"
                  rows="2"
                  class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                ></textarea>
              </div>
              <div>
                <label
                  for="applyingForGrade"
                  class="block text-lg font-medium text-purple-900"
                >
                  Applying for Grade
                </label>
                <input
                  type="text"
                  id="applyingForGrade"
                  placeholder="Enter Grade"
                  class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <div class="mb-4 col-span-2">
                <label
                  for="comments"
                  class="block text-lg font-medium text-purple-900"
                >
                  Comments
                </label>
                <textarea
                  id="address"
                  rows="4"
                  class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                ></textarea>
              </div>
              <div class="text-center col-span-2">
                <button
                  type="submit"
                  class="bg-orange-500 text-white w-48 py-2 px-4 rounded-md shadow-sm hover:bg-orange-600 transition duration-150 ease-in-out"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
 export default AdmissionForm;