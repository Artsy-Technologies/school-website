/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link } from "react-router-dom";

// ICONS //
import { LuBox, LuUser, LuMessageSquare, LuCalendar } from "react-icons/lu";
import { FaSuitcase, FaFilePdf } from "react-icons/fa";
import { IoImages, IoDocumentTextOutline, IoDocumentAttachOutline } from "react-icons/io5";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [activeSubLink, setActiveSubLink] = useState(null);

  const handleLinkClick = (index) => {
    setActiveLink(index);
    setActiveSubLink(null); // Reset sub-link when a new link is clicked
  };

  const handleSubLinkClick = (subIndex) => {
    setActiveSubLink(subIndex);
  };

  const SIDEBAR_LINKS = [
    { id: 1, path: "/dashboard", name: "Dashboard", icon: LuBox },
    { id: 2, path: "/dashboard/image-gallery", name: "Image-Gallery", icon: IoImages },
    { id: 9, path: "/dashboard/pdf", name: "Upload Fees Structure", icon: FaFilePdf },
    { id: 3, path: "/dashboard/admission-forms", name: "Admission Forms", icon: IoDocumentAttachOutline },
    { id: 10, path: "/dashboard/testimonials", name: "Testimonial", icon: LuMessageSquare },

    { id: 4, path: "/dashboard/contact-forms", name: "Contact Forms", icon: IoDocumentTextOutline },
    {
      id: 5,
      path: "/dashboard/fee",
      name: "Fee",
      icon: FaSuitcase,
      subMenu: [
        { id: 1, name: "Kindergarten", path: "/dashboard/fee/kindergarten" },
        { id: 2, name: "Class One", path: "/dashboard/fee/one" },
        { id: 3, name: "Class Two", path: "/dashboard/fee/two" },
        { id: 4, name: "Class Three", path: "/dashboard/fee/three" },
      ],
    },

  ];

  return (
    <div className="w-[20%] fixed left-0 top-0 z-10 h-screen border-r pt-8 px-4 bg-white overflow-y-auto pb-[2rem] ">
      {/* logo */}
      <div className="mb-8">
        <img src="/logo.svg" alt="logo" className="w-28 hidden md:flex" />
        <img src="/logo_mini.svg" alt="logo" className="w-8 flex md:hidden" />
      </div>
      {/* logo */}

      {/* Navigation Links */}
      <ul className="mt-6 space-y-6">
        {SIDEBAR_LINKS.map((link, index) => (
          <li key={index} className="group">
            <div
              className={`font-medium rounded-md py-2 px-5 hover:bg-gray-100 hover:text-indigo-500 cursor-pointer ${
                activeLink === index ? "bg-indigo-100 text-indigo-500" : ""
              }`}
              onClick={() => handleLinkClick(index)}
            >
              <Link
                to={link.path}
                className="flex justify-center md:justify-start items-center md:space-x-5"
              >
                <span>{link.icon && <link.icon />}</span>
                <span className="text-sm text-gray-500 hidden md:flex">
                  {link.name}
                </span>
              </Link>
            </div>

            {/* Sub Menu */}
            {link.subMenu && activeLink === index && (
              <ul className="ml-8 mt-2 space-y-2">
                {link.subMenu.map((subLink, subIndex) => (
                  <li key={subIndex}>
                    <Link
                      to={subLink.path}
                      className={`block text-gray-500 hover:text-indigo-500 text-sm ${
                        activeSubLink === subIndex
                          ? "text-indigo-500 font-semibold"
                          : ""
                      }`}
                      onClick={() => handleSubLinkClick(subIndex)}
                    >
                      {subLink.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      {/* Navigation Links */}

      {/* <div className="w-full absolute bottom-5 left-0 px-4 py-2 cursor-pointer text-center">
        <p className="flex items-center space-x-2 text-xs text-white py-2 px-5 bg-gradient-to-r from-indigo-500 to-violet-600 rounded-full">
          <span>?</span> <span className="hidden md:flex">Need Help</span>
        </p>
      </div> */}
    </div>
  );
};

export default Sidebar;
