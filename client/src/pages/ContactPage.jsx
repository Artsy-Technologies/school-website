import { useState } from 'react';
import Banner from '../components/banner/Banner';
import ContactForm from '../components/contact-form/contact-form';
import AdmissionForm from '../components/admission-form/admission-form';
import { useData } from '../context/BannerContext';

function ContactPage() {
  const { contactPage } = useData();
  const [showContactForm, setShowContactForm] = useState(true);

  return (
    <div className='dark:bg-darkmode flex flex-col'>
      <Banner
        main={contactPage.title}
        content={contactPage.content}
        buttonText={contactPage.buttonText}
      />
      <div className="flex justify-center mb-4">
        <button
          onClick={() => setShowContactForm(true)}
          className={`px-4 py-2 mr-2 rounded-md ${showContactForm ? 'bg-orange-500 text-white' : 'bg-purple-600 text-white'}`}
        >
          Contact Form
        </button>
        <button
          onClick={() => setShowContactForm(false)}
          className={`px-4 py-2 rounded-md ${!showContactForm ? 'bg-orange-500 text-white' : 'bg-purple-600 text-white'}`}
        >
          Admission Form
        </button>
      </div>
      {showContactForm ? <ContactForm /> : <AdmissionForm />}
    </div>
  );
}

export default ContactPage;
