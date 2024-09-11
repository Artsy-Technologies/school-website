import { Mail, Phone, MapPin, Copyright } from 'lucide-react'
import Logo from '/assets/logo.png'
import { useLocation } from 'react-router-dom';

function Footer() {
  const location = useLocation();
  console.log(location.pathname);

  return location.pathname === "/dashboard" ? <></> :
    <footer className="bg-white dark:border-t-white border dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-10 mt-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-10">
          <div className="flex flex-col gap-5 max-w-full">
            <div className="flex items-center gap-2">
              <img
                src={Logo}
                alt="Logo"
                width={25}
                height={25}
                className="ml-0.5"
              />
              <h4 className="text-1xl text-orange-600 dark:text-orange-400">
                J K MEMORIAL CENTRAL(CBSE) SCHOOL
              </h4>
            </div>
            <p className="font-Outfit ">
              (Affiliated to CBSE New Dehli)
              CBSE Aff.No : 830452, School Code : 45370.
            </p>
            <div className="flex items-center gap-1">
              <Mail className="text-gray-600 dark:text-gray-300" />
              <p>jkmcskrt@gmail.com</p>
            </div>
            <div className="flex items-center gap-1">
              <Phone className="text-gray-600 dark:text-gray-300" />
              <p>+91 8722971663</p>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="text-gray-600 dark:text-gray-300" />
              <p>Kamenahalli, Koratagere,Tumukuru district, Pincode : 572129.</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10">
            <div className="flex flex-col gap-5">
              <ul>
                <li className="text-22px list-none font-semibold text-orange-600 dark:text-orange-400">
                  Home
                </li>
                <li className="my-4 list-none">Features</li>
                <li className="my-4 list-none">Our Testimonials</li>
                <li className="my-4 list-none">FAQ</li>
              </ul>
            </div>

            <div className="flex flex-col gap-5">
              <ul>
                <li className="text-22px list-none font-semibold text-orange-600 dark:text-orange-400">
                  About Us
                </li>
                <li className="my-4 list-none">Our Mission</li>
                <li className="my-4 list-none">Our Vision</li>
                <li className="my-4 list-none">Awards and Recognitions</li>
                <li className="my-4 list-none">History</li>
                <li className="my-4 list-none">Teachers</li>
              </ul>
            </div>

            <div className="flex flex-col gap-5">
              <ul>
                <li className="text-22px list-none font-semibold text-orange-600 dark:text-orange-400">
                  Academics
                </li>
                <li className="my-4 list-none">Special Features</li>
                <li className="my-4 list-none">Gallery</li>
              </ul>
            </div>

            <div className="flex flex-col gap-5">
              <ul>
                <li className="text-22px list-none font-semibold text-orange-600 dark:text-orange-400">
                  Contact Us
                </li>
                <li className="my-4 list-none">Information</li>
                <li className="my-4 list-none">Map & Direction</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-black dark:border-gray-700 mt-10 pt-5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-5 text-center md:text-left">
            <p>Terms of Service | Privacy Policy | Cookie Policy</p>
            <p className="font-Outfit flex items-center gap-2">
              <Copyright className="text-gray-600 h-8 lg:h-6 lg:w-6   w-24  dark:text-gray-300" /> {new Date().getFullYear()} J K MEMORIAL CENTRAL(CBSE) SCHOOL. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
}

export default Footer
