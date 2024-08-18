import { Mail, Phone, MapPin, Copyright } from 'lucide-react'
import Logo from '/assets/logo.png'
import { useLocation } from 'react-router-dom';

function Footer() {
  const location = useLocation();
  console.log(location.pathname);

  return location.pathname === "/dashboard" ? <></> :
    <footer className="bg-gray-100 p-10">
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
              <h4 className="text-1xl text-orange-600">
                SRI MURUGHA RAJENDRASWAMY CBSE SCHOOL
              </h4>
            </div>
            <p className="text-slate-900 font-Outfit">
              We believe in the power of play to foster creativity,
              problem-solving skills, and imagination.
            </p>
            <div className="flex items-center gap-1">
              <Mail />
              <p>example.com</p>
            </div>
            <div className="flex items-center gap-1">
              <Phone />
              <p>+91 123456789</p>
            </div>
            <div className="flex items-center gap-1">
              <MapPin />
              <p>Somewhere in the World</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10">
            <div className="flex flex-col gap-5">
              <ul>
                <li className="text-22px list-none font-semibold text-orange-600">
                  Home
                </li>
                <li className="my-4 list-none">Features</li>
                <li className="my-4 list-none">Our Testimonials</li>
                <li className="my-4 list-none">FAQ</li>
              </ul>
            </div>

            <div className="flex flex-col gap-5">
              <ul>
                <li className="text-22px list-none font-semibold text-orange-600">
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
                <li className="text-22px list-none font-semibold text-orange-600">
                  Academics
                </li>
                <li className="my-4 list-none">Special Features</li>
                <li className="my-4 list-none">Gallery</li>
              </ul>
            </div>

            <div className="flex flex-col gap-5">
              <ul>
                <li className="text-22px list-none font-semibold text-orange-600">
                  Contact Us
                </li>
                <li className="my-4 list-none">Information</li>
                <li className="my-4 list-none">Map & Direction</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-black mt-10 pt-5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-5 text-center md:text-left">
            <p>Terms of Service | Privacy Policy | Cookie Policy</p>
            <p className="text-slate-900 font-Outfit flex items-center gap-2">
              <Copyright /> {new Date().getFullYear()} SRI MURUGHA RAJENDRASWAMY
              CBSE SCHOOL. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
}

export default Footer
