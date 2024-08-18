import Banner from '../components/banner/Banner'
import ContactForm from '../components/contact-form/contact-form';
import { useData } from '../context/BannerContext'
function ContactPage() {
  const {contactPage}=useData();
  return (
    <div className='dark:bg-darkmode'>
      <Banner
        main={contactPage.title}
        content={contactPage.content}
        buttonText={contactPage.buttonText}
      />
      <ContactForm />
    </div>
  )
}

export default ContactPage
