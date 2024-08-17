// /* eslint-disable no-unused-vars */
// import { useEffect } from 'react';
// import { useAdmin } from '../../hooks/AdminContext';
// function AdminPage() {

//     return (
//         <section className="h-screen " >

//         </section>
//     )
// }

// export default AdminPage

const AdminDashboard = () => {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white">
        <div className="p-6">
          <h2 className="text-2xl font-bold">Admin Dashboard</h2>
        </div>
        <nav className="mt-6">
          <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
            Dashboard Overview
          </a>
          <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
            Users Management
          </a>
          <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
            Departments
          </a>
          <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
            Image Gallery
          </a>
          <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
            Admission Forms
          </a>
          <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
            Contact Forms
          </a>
          <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
            Fee Structure
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-10 text-gray-800">
        {/* Header */}
        <header className="flex justify-between items-center pb-6">
          <h1 className="text-3xl font-semibold">Welcome, Admin</h1>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 rounded-md border border-gray-300 mr-4"
            />
            <div className="flex items-center space-x-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md">Notifications</button>
              <img
                className="w-10 h-10 rounded-full"
                src="https://via.placeholder.com/150"
                alt="Admin Avatar"
              />
            </div>
          </div>
        </header>

        {/* Dashboard Sections */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold">Image Gallery</h2>
            <p>Manage and upload images for the gallery.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold">Admission Forms</h2>
            <p>View and manage submitted admission forms.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold">Contact Forms</h2>
            <p>Access and respond to contact form submissions.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold">Fee Structure</h2>
            <p>Update and manage the fee structure details.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AdminDashboard;
