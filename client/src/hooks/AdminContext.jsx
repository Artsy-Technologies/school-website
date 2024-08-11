/* eslint-disable react/prop-types */
// AdminContext.js
import axios from 'axios'
import { createContext, useState, useContext, useEffect } from 'react'

// Create the context
const AdminContext = createContext()

// Create a provider component
export const AdminProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    const validateLogin = async () => {
      try {
        const res = await axios.get('/dashboard')
        if (res?.data?.status === 200) {
          setIsAdmin(true)
        }
      } catch (error) {
        // Handle error (e.g., show a message to the user or log the error)
        console.error('Error validating login:', error)
      }
    }

    validateLogin()
  }, []) // Add an empty dependency array to run only once

  return (
    <AdminContext.Provider value={{ isAdmin, setIsAdmin }}>
      {children}
    </AdminContext.Provider>
  )
}

// Create a custom hook for easier usage of the context
export const useAdmin = () => useContext(AdminContext)
