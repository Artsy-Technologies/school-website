import { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import AcademicsPage from "./pages/AcademicsPage";
import AdmissionPage from "./pages/AdmissionPage";
import StudentLifePage from "./pages/StudentPage";
import MainLayout from "./components/Layout/MainLayout";
import axios from "axios";
import AdminAuthPage from "./pages/dashboard/AdminAuthPage";
import ProtectedRoute from "./components/admin/ProtectedRoute";
import AdminPage from "./pages/dashboard/AdminPage";
import ContactFormsListPage from "./pages/dashboard/ContactFormsListPage";
import AdmissionListPage from "./pages/dashboard/AdmissionListPage"
import ImageGalleryListPage from "./pages/dashboard/ImageGalleryListPage"
import NotFound from "./pages/PageNotFound"


axios.defaults.baseURL = "http://localhost:8000";
// axios.defaults.baseURL = "https://school-website-backend-qeg6.onrender.com";
axios.defaults.withCredentials = true;

import { DataProvider } from "./context/BannerContext";

import FeeStructureDownload from "./components/pdfViewer/FeeStructureDownload";
import AdminFeeStructure from "./components/admin/fees/AdminFeeStructure";
import ProfilePage from "./pages/profilePage/ProfilePage";


const App = () => {
  return (
    <Router>
      <Suspense fallback={<div> Loading...</div>}>
        <DataProvider>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="academics" element={<AcademicsPage />} />
              <Route path="admission" element={<AdmissionPage />} />
              <Route path="students" element={<StudentLifePage />} />
              <Route path="profile" element={<ProfilePage />} />
            </Route >

              <Route
                path="dashboard"
                element={<ProtectedRoute element={<AdminPage/>} />}
              >
                <Route path="contact-forms" element={<ContactFormsListPage />} />
                <Route path="admission-forms" element={<AdmissionListPage />} />
                <Route path="image-gallery" element={<ImageGalleryListPage />} />
                <Route path="pdf" element={<AdminFeeStructure/>}/>
                {/* Add other admin-specific routes here */}
              </Route>



            <Route
              path="dashboard"
              element={<ProtectedRoute element={<AdminPage />} />}
            >
              <Route path="contact-forms" element={<ContactFormsListPage />} />
              <Route path="admission-forms" element={<AdmissionListPage />} />
              <Route path="image-gallery" element={<ImageGalleryListPage />} />
            </Route>

            <Route path="dashboard/auth" element={<AdminAuthPage />} />

            <Route path="*" element={<NotFound />} />


          </Routes>
        </DataProvider>
      </Suspense>
    </Router>
  );
};

export default App;
