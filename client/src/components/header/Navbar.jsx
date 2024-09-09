import { useState, useEffect } from "react";
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

  // Function to check if the link is active
  const isActive = (path) => location.pathname === path;

  // Close the menu when a link is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Close the menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      const menu = document.getElementById("mobile-menu");
      if (menu && !menu.contains(event.target) && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <header className={`flex flex-col h-auto p-4 bg-purple-500 text-white drop-shadow-md z-40 fixed w-full ${isDashboard ? "md:w-[80%]" : "w-full"}`}>
      <div className="flex justify-between items-center mb-4">
        {/* Logo Section */}
        {!isDashboard && (
          <h1 className="text-xl font-bold">
            J K MEMORIAL CENTRAL (CBSE) SCHOOL
          </h1>
        )}
        {/* Hamburger Menu Button */}
        <button className="md:hidden text-3xl focus:outline-none" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Desktop Menu */}
      <ul className={`hidden md:flex flex-col md:flex-row md:space-x-6 ${isDashboard ? 'ml-auto' : ''} md:items-center md:justify-center space-y-4 md:space-y-0`}>
        <li className={`p-3 rounded-md transition-all cursor-pointer ${isActive('/') ? 'bg-purple-600' : 'hover:bg-purple-400'}`}>
          <Link to="/" className="hover:underline">Home</Link>
        </li>
        <li className={`p-3 rounded-md transition-all cursor-pointer ${isActive('/about') ? 'bg-purple-600' : 'hover:bg-purple-400'}`}>
          <Link to="/about" className="hover:underline">About Us</Link>
        </li>
        <li className={`p-3 rounded-md transition-all cursor-pointer ${isActive('/academics') ? 'bg-purple-600' : 'hover:bg-purple-400'}`}>
          <Link to="/academics" className="hover:underline">Academics</Link>
        </li>
        <li className={`p-3 rounded-md transition-all cursor-pointer ${isActive('/admission') ? 'bg-purple-600' : 'hover:bg-purple-400'}`}>
          <Link to="/admission" className="hover:underline">Admission</Link>
        </li>
        <li className={`p-3 rounded-md transition-all cursor-pointer ${isActive('/students') ? 'bg-purple-600' : 'hover:bg-purple-400'}`}>
          <Link to="/students" className="hover:underline">Student Life</Link>
        </li>
        <li className={`p-3 rounded-md transition-all cursor-pointer ${isActive('/contact') ? 'bg-purple-600' : 'hover:bg-purple-400'}`}>
          <Link to="/contact" className="hover:underline">Contact</Link>
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

      {/* Mobile Menu */}
      <div id="mobile-menu" className={`absolute right-0 top-16 bg-purple-500 w-full flex flex-col items-center space-y-4 p-4 ${isMenuOpen ? 'block' : 'hidden'}`}>
        <li className={`p-3 rounded-md transition-all cursor-pointer ${isActive('/') ? 'bg-purple-600' : 'hover:bg-purple-400'}`}>
          <Link to="/" onClick={closeMenu}>Home</Link>
        </li>
        <li className={`p-3 rounded-md transition-all cursor-pointer ${isActive('/about') ? 'bg-purple-600' : 'hover:bg-purple-400'}`}>
          <Link to="/about" onClick={closeMenu}>About Us</Link>
        </li>
        <li className={`p-3 rounded-md transition-all cursor-pointer ${isActive('/academics') ? 'bg-purple-600' : 'hover:bg-purple-400'}`}>
          <Link to="/academics" onClick={closeMenu}>Academics</Link>
        </li>
        <li className={`p-3 rounded-md transition-all cursor-pointer ${isActive('/admission') ? 'bg-purple-600' : 'hover:bg-purple-400'}`}>
          <Link to="/admission" onClick={closeMenu}>Admission</Link>
        </li>
        <li className={`p-3 rounded-md transition-all cursor-pointer ${isActive('/students') ? 'bg-purple-600' : 'hover:bg-purple-400'}`}>
          <Link to="/students" onClick={closeMenu}>Student Life</Link>
        </li>
        <li className={`p-3 rounded-md transition-all cursor-pointer ${isActive('/contact') ? 'bg-purple-600' : 'hover:bg-purple-400'}`}>
          <Link to="/contact" onClick={closeMenu}>Contact</Link>
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
      </div>
    </header>
  );
}
