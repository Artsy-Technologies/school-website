import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Use local state or global context
  const navigate = useNavigate();

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle login/logout
  const handleClick = () => {
    if (isLoggedIn) {
      // Handle logout
      setIsLoggedIn(false);
      navigate("/");
    } else {
      // Handle login
      navigate("/dashboard/auth");
    }
  };

  // Example useEffect to simulate login state persistence (replace with actual auth logic)
  useEffect(() => {
    // Replace with actual logic to check if the user is logged in
    const checkLoginStatus = () => {
      // Simulate fetching login status
      const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
      setIsLoggedIn(loggedIn);
    };

    checkLoginStatus();
  }, []);

  // Update localStorage or other storage on login status change
  useEffect(() => {
    localStorage.setItem('isLoggedIn', isLoggedIn ? 'true' : 'false');
  }, [isLoggedIn]);

  return (
    <header className="flex justify-between items-center bg-purple-500 text-white p-4 drop-shadow-md z-50 relative">
      <h1 className="text-xl">SRI MURUGHA RAJENDRASWAMY CBSE SCHOOL</h1>

      <nav className="md:hidden fixed right-0 z-50">
        <button className="text-3xl focus:outline-none" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      <ul
        className={`${
          isMenuOpen ? 'flex' : 'hidden'
        } flex-col md:flex-row md:flex justify-between items-center text-m space-y-2 md:space-y-0 md:space-x-10 absolute md:relative top-16 left-0 right-0 md:top-auto md:left-auto md:right-auto bg-purple-500 md:bg-transparent w-full md:w-auto p-4 md:p-0 z-40`}
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
        <li className="p-3 hover:bg-purple-600 rounded-md transition-all cursor-pointer border border-white">
          <button onClick={handleClick}>
            {isLoggedIn ? 'Logout' : 'Admin Login'}
          </button>
        </li>
      </ul>
    </header>
  );
}
