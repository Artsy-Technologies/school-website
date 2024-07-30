/* eslint-disable react/prop-types */
// AdminContext.js
import axios from 'axios';
import { createContext, useState, useContext, useEffect } from 'react';

// Create the context
const AdminContext = createContext();

// Create a provider component
export const AdminProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);


  useEffect(() => {
    const validateLogin = async () => {
      let res = await axios.get('/dashboard');
      console.log(res);
      if (res?.data?.status === 200) {
        setIsAdmin(true);
      }
    };

    validateLogin();
  })

  console.log(isAdmin);

  return (
    <AdminContext.Provider value={{ isAdmin, setIsAdmin }}>
      {children}
    </AdminContext.Provider>
  );
};

// Create a custom hook for easier usage of the context
export const useAdmin = () => useContext(AdminContext);
