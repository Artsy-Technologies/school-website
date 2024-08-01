import { Mail } from 'lucide-react';
import {Phone }from 'lucide-react';
import {MapPin }from 'lucide-react';
import { Copyright } from 'lucide-react';
import Logo from '../../../public/assets/logo.png';

//className="container mx-auto flex justify-between items-center"
function Footer() {
  return (
    <footer>
    <div className="rectangle">
     
    <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 p-20">
      <div className="flex flex-col gap-5 max-w-50%">
           <h4 className="text-1xl text-orange-600 alignleft width-391px">{Logo}  SRI MURUGHA  RAJENDRASWAMY CBSE SCHOOL</h4>
           <p className="text-slate-900 font-Outfit ">We believe in the power of play to foster creativity,</p> 
            <p>problem-solving skills, and imagination.</p>
         
           <div className='flex gap-1'>
           <Mail />
           <p>example.com</p>
           </div>
           <div className='flex gap-1'>
            <Phone />
            <p>+91 123456789</p>
            </div>
            <div className='flex gap-1'>
            <MapPin />
            <p>Somewhere in the World</p>
            </div>
      
          
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 p-0"  >
      <div className="flex flex-col gap-5 w-240px">
          <ul>
          <li className="text-{22px} list-none font-semibold text-orange-600">Home</li>
            <li className="my-4 list-none">Features</li>
            <li className="my-4 list-none">Our Testimonials</li>
            <li className="my-4 list-none">FAQ</li>
          </ul>
      </div>

      <div className="flex flex-col gap-5 w-240px">
          <ul>
          <li className="text-{22px} list-none font-semibold text-orange-600">About Us</li>
            <li className="my-4 list-none">Our Mission</li>
            <li className="my-4 list-none">Our Vission</li>
            <li className="my-4 list-none">Awards and Recognitions</li>
            <li className="my-4 list-none">History</li>
            <li className="my-4 list-none">Teachers</li>
          
          </ul>
      </div>
      <div className="flex flex-col gap-5">
          <ul>
          <li className="text-{22px} list-none font-semibold text-orange-600">Academics</li>
            <li className="my-4 list-none">Special Features</li>
            <li className="my-4 list-none">Gallery</li>           
          </ul>
      </div>
      <div className="flex flex-col gap-5">
          <ul>
          <li className="text-{22px} list-none font-semibold text-orange-600">Contact Us</li>
            <li className="my-4 list-none">Information</li>
            <li className="my-4 list-none">Map & Direction</li>           
          </ul>
      </div>
      </div>
    </div>
    <div>
    <div style={{ borderTop: "1px solid black",  marginLeft: 80, marginRight: 80 ,paddingLeft:50 }}></div>
    
    <div className="gap-5" style={{marginLeft:80, margintop:50, paddingTop:20,paddingBottom:20 }}> Terms of Service | Privacy Policy | Cookie Policy</div>
    <div  style={{ borderTop: "1px solid black",  marginLeft: 80, marginRight: 80 ,paddingLeft:50 ,paddingBottom:30}}></div>
    <div style={{paddingInlineStart:500 ,alignContent:'center'}}>
    <p className="text-slate-900 font-Outfit flex gap-2">Copyright [2024] <Copyright /> SRI MURUGHA  RAJENDRASWAMY CBSE SCHOOL. All rights reserved.</p>
    </div>
    </div>
    </div>
    </footer>
  )
}

export default Footer;