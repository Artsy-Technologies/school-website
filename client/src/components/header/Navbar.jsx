import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="flex justify-between items-center bg-purple-500 text-white p-4 drop-shadow-md">
      
          <h1 className="px-30">SRI MURUGHA  RAJENDRASWAMY CBSE SCHOOL</h1>
    
    
          <ul className=" flex justify-between items-end flex space-x-10">
            <li className="p-3 hover:bg-purple-400 rounded-md transition-all cursor-pointer"><Link to="/HomePage" className="hover:underline">Home</Link></li>
            <li className="p-3 hover:bg-purple-400 rounded-md transition-all cursor-pointer"><Link to="/AboutPage" className="hover:underline">About Us</Link></li>
            <li className="p-3 hover:bg-purple-400 rounded-md transition-all cursor-pointer"><Link to="/AcademicsPage" className="hover:underline">Academics</Link></li>
            <li className="p-3 hover:bg-purple-400 rounded-md transition-all cursor-pointer"><Link to="/Admissionpage" className="hover:underline">Admission</Link></li>
            <li className="p-3 hover:bg-purple-400 rounded-md transition-all cursor-pointer"><Link to="/StudentPage" className="hover:underline">Student Life</Link></li>
            <li className="p-3 hover:bg-purple-400 rounded-md transition-all cursor-pointer"><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        
          <i className="bx bx-menu x1:hidden block text-5xl cursor-pointer"></i>
      
    </header>
  )
}
