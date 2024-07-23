import { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import AcademicsPage from './pages/AcademicsPage';
import AdmissionPage from './pages/AdmissionPage';
import StudentLifePage from './pages/StudentPage';
import MainLayout from './components/Layout/MainLayout';
import axios from 'axios';
import AdminPage from './pages/dashboard/AdminPage';
import AdminAuthPage from './pages/dashboard/AdminAuthPage';
import ProtectedRoute from './components/admin/ProtectedRoute'

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true;


const App = () => {
  return (
    <Router>
      <Suspense fallback={<div> Loading...</div> } >
        <Routes>
          <Route path='/' element={<MainLayout />}  >
            <Route path="/" element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="academics" element={<AcademicsPage />} />
            <Route path="admission" element={<AdmissionPage />} />
            <Route path="students" element={<StudentLifePage />} />
            <Route
              path="dashboard"
              element={<ProtectedRoute element={<AdminPage />} />}
            />

            {/* <Route path="dashboard" element={<AdminPage />} /> */}
            <Route path='dashboard/auth' element={<AdminAuthPage />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>

  )
}

export default App
