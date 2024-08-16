

const ContactForm = () => {
  return (
    <div class="bg-purple-300 flex justify-center items-center min-h-screen">
    <div
      class="bg-white rounded-lg shadow-lg p-8 w-full max-w-4xl  "
    >
      <div class="flex justify-center mb-4 space-x-2">
        <button
          class="bg-orange-500 p-2  border border-red-500 focus:border-purple-500"
        >
          <img
            src="https://img.icons8.com/material-outlined/24/ffffff/facebook-new.png"
          />
        </button>
        <button
          class="bg-orange-500 p-2 border border-red-500 focus:border-purple-500"
        >
          <img
            src="https://img.icons8.com/material-outlined/24/ffffff/twitter.png"
          />
        </button>
        <button
          class="bg-orange-500 p-2 border border-red-500 focus:border-purple-500"
        >
          <img
            src="https://img.icons8.com/material-outlined/24/ffffff/linkedin.png"
          />
        </button>
      </div>

      <form action="#">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label
              for="studentName"
              class="block text-lg font-medium text-purple-900"
              >Student Name</label
            >
            <input
              type="text"
              id="studentName"
              placeholder="Enter Student Name"
              class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
            />
          </div>
          <div>
            <label
              for="parentName"
              class="block text-lg font-medium text-purple-900"
            >
              Parent Name</label
            >
            <input
              type="text"
              id="parentName"
              placeholder="Enter Parent Name"
              class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
            />
          </div>
          <div>
            <label
              for="email"
              class="block text-lg font-medium text-purple-900"
            >
              Email Address</label
            >
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
              >Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              placeholder="Enter Phone Number"
              class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
            />
          </div>
          <div>
            <label
              for="studentAge"
              class="block text-lg font-medium text-purple-900"
            >
              Student Age</label
            >
            <input
              type="number"
              id="studentAge"
              placeholder="Enter Student Age"
              class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
            />
          </div>
          <div>
            <label
              for="programInterest"
              class="block text-lg font-medium text-purple-900"
            >
              Program of Interest</label
            >
            <select
              id="programInterest"
              class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
            >
              <option>Select Program</option>
              <option>Program 1</option>
              <option>Program 2</option>
              <option>Program 3</option>
            </select>
          </div>
        </div>
        <div class="mb-4">
          <label for="message" class="block text-lg font-medium text-purple-900"
            >Message</label
          >
          <textarea
            id="message"
            rows="4"
            placeholder="Enter your Message"
            class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
          >
          </textarea>
        </div>
        <div class="text-center">
          <button
            type="submit"
            class="bg-orange-500 text-white w-48 py-2 px-4 rounded-md shadow-sm hover:bg-orange-600 transition duration-150 ease-in-out"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
    </div>
  )
}

export default ContactForm;