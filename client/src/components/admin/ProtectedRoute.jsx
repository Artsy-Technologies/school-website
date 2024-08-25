/* eslint-disable react/prop-types */
// ProtectedRoute.jsx
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import AdminPage from "../../pages/dashboard/AdminPage";
import axios from "axios";

function ProtectedRoute({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    console.log("yes protect route works");

    const checkAuth = async () => {
      try {
        let res = await axios.get("/api/admin/dashboard",);
        console.log(res);

        if (res?.status === 200) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch {
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, []);

  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? <AdminPage /> : <Navigate to="/" />;
}

export default ProtectedRoute;
