
import  { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import AcademicsPage from './pages/AcademicsPage';
import AdmissionPage from './pages/AdmissionPage';
import StudentLifePage from './pages/StudentPage';
import MainLayout from './components/Layout/MainLayout';

const App = () => {
  return (
    <Router>
    <Routes>
      <Route path='/' element={<MainLayout />}  >
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="academics" element={<AcademicsPage />} />
        <Route path="admission" element={<AdmissionPage />} />
        <Route path="students" element={<StudentLifePage />} />
      </Route>
    </Routes>
  </Router>

  )
}

export default App
