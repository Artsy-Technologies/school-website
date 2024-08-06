import { Link } from 'react-router-dom'
import { useState } from 'react'
import {Menu} from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-purple-500 text-white p-1 drop-shadow-md flex justify-between items-center text-xl">
      <h1>SRI MURUGHA RAJENDRASWAMY CBSE SCHOOL</h1>
      <div className="md:hidden">
        <i className="bx bx-menu text-3xl cursor-pointer" onClick={toggleMenu}><Menu /></i>
      </div>

      {/* Sidebar */}
      <nav className={`fixed top-0 right-0 w-64 h-full z-20 p-4 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:relative md:translate-x-0 md:flex md:items-center md:w-auto`}>
        <div className="md:hidden flex justify-end">
          <i className="bx bx-x text-3xl cursor-pointer" onClick={toggleMenu}></i>
        </div>
        <ul className="mt-10 md:mt-0 space-y-4 md:space-y-0 md:flex md:space-x-10">
          <li className="p-3 hover:bg-purple-400 rounded-md transition-all cursor-pointer">
            <Link to="/HomePage" onClick={toggleMenu} className="hover:underline">Home</Link>
          </li>
          <li className="p-3 hover:bg-purple-400 rounded-md transition-all cursor-pointer">
            <Link to="/AboutPage" onClick={toggleMenu} className="hover:underline">About Us</Link>
          </li>
          <li className="p-3 hover:bg-purple-400 rounded-md transition-all cursor-pointer">
            <Link to="/AcademicsPage" onClick={toggleMenu} className="hover:underline">Academics</Link>
          </li>
          <li className="p-3 hover:bg-purple-400 rounded-md transition-all cursor-pointer">
            <Link to="/Admissionpage" onClick={toggleMenu} className="hover:underline">Admission</Link>
          </li>
          <li className="p-3 hover:bg-purple-400 rounded-md transition-all cursor-pointer">
            <Link to="/StudentPage" onClick={toggleMenu} className="hover:underline">Student Life</Link>
          </li>
          <li className="p-3 hover:bg-purple-400 rounded-md transition-all cursor-pointer">
            <Link to="/contact" onClick={toggleMenu} className="hover:underline">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

