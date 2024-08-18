import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AdminProvider } from './hooks/AdminContext.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <AdminProvider>
      <ToastContainer />
      <App />
    </AdminProvider>
    
  </React.StrictMode>
)
