function DashboardWidgets() {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h4 className="text-lg font-medium">Total Students</h4>
          <h3 className="text-2xl font-bold">3280</h3>
          <div className="w-full bg-gray-200 rounded-full h-4 my-2">
            <div
              className="bg-blue-500 h-4 rounded-full"
              style={{ width: "80%" }}
            ></div>
          </div>
          <small className="text-gray-600">80% Increase in 20 Days</small>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <h4 className="text-lg font-medium">New Students</h4>
          <h3 className="text-2xl font-bold">245</h3>
          <div className="w-full bg-gray-200 rounded-full h-4 my-2">
            <div
              className="bg-yellow-500 h-4 rounded-full"
              style={{ width: "50%" }}
            ></div>
          </div>
          <small className="text-gray-600">50% Increase in 25 Days</small>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <h4 className="text-lg font-medium">Total Courses</h4>
          <h3 className="text-2xl font-bold">28</h3>
          <div className="w-full bg-gray-200 rounded-full h-4 my-2">
            <div
              className="bg-red-500 h-4 rounded-full"
              style={{ width: "76%" }}
            ></div>
          </div>
          <small className="text-gray-600">76% Increase in 20 Days</small>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <h4 className="text-lg font-medium">Fees Collection</h4>
          <h3 className="text-2xl font-bold">25160K</h3>
          <div className="w-full bg-gray-200 rounded-full h-4 my-2">
            <div
              className="bg-green-500 h-4 rounded-full"
              style={{ width: "30%" }}
            ></div>
          </div>
          <small className="text-gray-600">30% Increase in 30 Days</small>
        </div>
      </div>
    </div>
  );
}

export default DashboardWidgets;
