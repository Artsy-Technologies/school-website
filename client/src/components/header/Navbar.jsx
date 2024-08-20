import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useAdmin } from "../../hooks/AdminContext";
import DarkModeToggle from "../darkmode/DarkModeToggle";
import { User } from "lucide-react";

export default function Navbar() {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith('/dashboard');

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAdmin, logout } = useAdmin();
  const navigate = useNavigate();

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle login
  const handleLogin = () => {
    navigate("/dashboard/auth");
  };

  // Handle logout
  const handleLogout = () => {
    logout();
    navigate("/");
  };

  // Navigate to Dashboard
  const handleDash = () => {
    navigate("/dashboard");
  };

  return (
    <header className="flex justify-between items-center bg-purple-500 text-white p-4 drop-shadow-md z-50 relative">
      {!isDashboard && (
        <h1 className="text-xl">
          SRI MURUGHA RAJENDRASWAMY CBSE SCHOOL
        </h1>
      )}

      <ul
        className={`flex items-center space-x-6 ${
          isDashboard ? 'ml-auto' : ''
        } hidden md:flex`}
      >
        <li className="p-3 hover:bg-purple-400 rounded-md transition-all cursor-pointer">
          <Link to="/" className="hover:underline">
            Home
          </Link>
        </li>
        <li className="p-3 hover:bg-purple-400 rounded-md transition-all cursor-pointer">
          <Link to="/about" className="hover:underline">
            About Us
          </Link>
        </li>
        <li className="p-3 hover:bg-purple-400 rounded-md transition-all cursor-pointer">
          <Link to="/academics" className="hover:underline">
            Academics
          </Link>
        </li>
        <li className="p-3 hover:bg-purple-400 rounded-md transition-all cursor-pointer">
          <Link to="/admission" className="hover:underline">
            Admission
          </Link>
        </li>
        <li className="p-3 hover:bg-purple-400 rounded-md transition-all cursor-pointer">
          <Link to="/students" className="hover:underline">
            Student Life
          </Link>
        </li>
        <li className="p-3 hover:bg-purple-400 rounded-md transition-all cursor-pointer">
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
        </li>
        <DarkModeToggle />
        {!isAdmin ? (
          <li className="p-3 hover:bg-purple-600 rounded-md transition-all cursor-pointer border border-white">
            <button onClick={handleLogin}>Admin Login</button>
          </li>
        ) : (
          <>
            <li className="p-1 hover:bg-purple-600 rounded-md transition-all cursor-pointer border border-white">
              <button onClick={handleDash}>
                <User />
              </button>
            </li>
            <li className="p-2 hover:bg-purple-600 rounded-md transition-all cursor-pointer border border-white">
              <button onClick={handleLogout}>Logout</button>
            </li>
          </>
        )}
      </ul>

      {/* Hamburger Menu for Small Devices */}
      <div className="md:hidden">
        <button className="text-3xl focus:outline-none" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        {isMenuOpen && (
          <ul className="absolute right-0 top-16 bg-purple-500 w-full flex flex-col items-center space-y-4 p-4">
            <li className="p-3 hover:bg-purple-400 rounded-md transition-all cursor-pointer">
              <Link to="/" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li className="p-3 hover:bg-purple-400 rounded-md transition-all cursor-pointer">
              <Link to="/about" onClick={toggleMenu}>
                About Us
              </Link>
            </li>
            <li className="p-3 hover:bg-purple-400 rounded-md transition-all cursor-pointer">
              <Link to="/academics" onClick={toggleMenu}>
                Academics
              </Link>
            </li>
            <li className="p-3 hover:bg-purple-400 rounded-md transition-all cursor-pointer">
              <Link to="/admission" onClick={toggleMenu}>
                Admission
              </Link>
            </li>
            <li className="p-3 hover:bg-purple-400 rounded-md transition-all cursor-pointer">
              <Link to="/students" onClick={toggleMenu}>
                Student Life
              </Link>
            </li>
            <li className="p-3 hover:bg-purple-400 rounded-md transition-all cursor-pointer">
              <Link to="/contact" onClick={toggleMenu}>
                Contact
              </Link>
            </li>
            <DarkModeToggle />
            {!isAdmin ? (
              <li className="p-3 hover:bg-purple-600 rounded-md transition-all cursor-pointer border border-white">
                <button onClick={handleLogin}>Admin Login</button>
              </li>
            ) : (
              <>
                <li className="p-1 hover:bg-purple-600 rounded-md transition-all cursor-pointer border border-white">
                  <button onClick={handleDash}>
                    <User />
                  </button>
                </li>
                <li className="p-2 hover:bg-purple-600 rounded-md transition-all cursor-pointer border border-white">
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </>
            )}
          </ul>
        )}
      </div>
    </header>
  );
}
