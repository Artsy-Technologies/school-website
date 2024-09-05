import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../../components/admin/Sidebar";
import Navbar from "../../components/header/Navbar";
import DashboardSummary from "./DashboardSummary";

function AdminPage() {
  const location = useLocation();
  const isDashboardRoute = location.pathname === "/dashboard";

  return (
    <section className="flex h-screen dark:bg-gray-800">
      <div className="w-1/5 h-full">
        <Sidebar />
      </div>

      <div className="w-4/5 h-full overflow-y-auto">
        <Navbar />

        <div className="p-4 mt-20">
          {isDashboardRoute && <DashboardSummary />}
          <Outlet />
        </div>
      </div>
    </section>
  );
}

export default AdminPage;
