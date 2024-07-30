/* eslint-disable react/prop-types */
// ProtectedRoute.jsx
/* eslint-disable no-unused-vars */

import { checkPropTypes } from 'prop-types';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(null);  

    useEffect(() => {
        const checkAuth = async () => {
            try {
               let res = await fetch('http://localhost:8000/dashboard',{
                credentials:"include"
               });
               if (res?.status === 200) {
                setIsAuthenticated(true); 
               }else{
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

    return isAuthenticated ? children : <Navigate to="/" /> ;
}


  

export default ProtectedRoute;
