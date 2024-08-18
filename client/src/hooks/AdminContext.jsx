// /* eslint-disable react-refresh/only-export-components */
// /* eslint-disable react/prop-types */
// // AdminContext.js
// import axios from 'axios'
// import { createContext, useState, useContext, useEffect } from 'react'

// // Create the context
// const AdminContext = createContext()

// // Create a provider component
// export const AdminProvider = ({ children }) => {
//   const [isAdmin, setIsAdmin] = useState(false)

//   useEffect(() => {
//     const validateLogin = async () => {
//       let res = await axios.get('/api/admin/dashboard');
//       console.log(res);
//       if (res?.data?.status === 200) {
//         setIsAdmin(true);
//       }
//     };

//     validateLogin();
//   })

//   console.log(isAdmin);// Add an empty dependency array to run only once

//   return (
//     <AdminContext.Provider value={{ isAdmin, setIsAdmin }}>
//       {children}
//     </AdminContext.Provider>
//   )
// }

// // Create a custom hook for easier usage of the context
// export const useAdmin = () => useContext(AdminContext)

/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import axios from 'axios';
import { createContext, useState, useContext, useEffect } from 'react';

// Create the context
const AdminContext = createContext();


export const AdminProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const validateLogin = async () => {
      try {
        let res = await axios.get('/api/admin/dashboard');
        if (res?.data?.status === 200) {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      } catch (err) {
        setError(err);
        setIsAdmin(false);
      } finally {
        setLoading(false);
      }
    };

    validateLogin();
  }, []);

  // Logout function
  const logout = () => {
    setIsAdmin(false);
    localStorage.removeItem('authToken');

  };

  console.log(isAdmin); // For debugging

  return (
    <AdminContext.Provider value={{ isAdmin, setIsAdmin, loading, error, logout }}>
      {children}
    </AdminContext.Provider>
  );
};

// Create a custom hook for easier usage of the context
export const useAdmin = () => useContext(AdminContext);
