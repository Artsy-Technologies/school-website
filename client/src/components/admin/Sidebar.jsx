/* eslint-disable no-unused-vars */
import  { useState } from "react";

// ICONS //
import { LuBox, LuUser, LuMessageSquare, LuCalendar } from "react-icons/lu";
import { FaSuitcase } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoImages, IoDocumentTextOutline, IoDocumentAttachOutline } from "react-icons/io5";
// ICONS //

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState(0);
  const handleLinkClick = (index) => {
    setActiveLink(index);
  };
const SIDEBAR_LINKS = [
  { id: 1, path: "/dashboard", name: "Dashboard", icon: LuBox },
  { id: 2, path: "/dashboard/image-gallery", name: "Image-Gallery", icon: IoImages },
  { id: 3, path: "/dashboard/admission-forms", name: "Admission Forms", icon: IoDocumentAttachOutline },
  { id: 4, path: "/dashboard/contact-forms", name: "Contact Forms", icon: IoDocumentTextOutline },
  { id: 5, path: "/dashboard/messages", name: "Messages", icon: LuMessageSquare },
  { id: 6, path: "/dashboard/projects", name: "Projects", icon: FaSuitcase },
  { id: 7, path: "/dashboard/clients", name: "Clients", icon: LuUser },
  { id: 8, path: "/dashboard/work", name: "Work Plan", icon: LuCalendar },
];
  return (
    <div className="w-[20%] fixed left-0 top-0 z-10 h-screen border-r pt-8 px-4 bg-white">
      {/* logo */}
      <div className="mb-8">
        <img src="/logo.svg" alt="logo" className="w-28 hidden md:flex" />
        <img src="/logo_mini.svg" alt="logo" className="w-8 flex md:hidden" />
      </div>
      {/* logo */}

      {/* Navigation Links */}
      <ul className="mt-6 space-y-6">
        {SIDEBAR_LINKS.map((link, index) => (
          <li
            key={index}
            className={`font-medium rounded-md py-2 px-5 hover:bg-gray-100 hover:text-indigo-500 ${
              activeLink === index ? "bg-indigo-100 text-indigo-500" : ""
            }`}
          >
            <Link
              to={link.path}
              className="flex justify-center md:justify-start items-center md:space-x-5"
              onClick={() => handleLinkClick(index)}
            >
              <span>{link.icon()}</span>
              <span className="text-sm text-gray-500 hidden md:flex">
                {link.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      {/* Navigation Links */}

      <div className="w-full absolute bottom-5 left-0 px-4 py-2 cursor-pointer text-center">
        <p className="flex items-center space-x-2 text-xs text-white py-2 px-5 bg-gradient-to-r from-indigo-500 to-violet-600 rounded-full">
          {" "}
          <span>?</span> <span className="hidden md:flex">Need Help</span>
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
