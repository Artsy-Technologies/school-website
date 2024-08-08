import Banner from '../components/banner/Banner'
import { useData } from '../context/BannerContext'
function ContactPage() {
  const {contactPage}=useData();
  return (
    <div>
      <Banner
        main={contactPage.title}
        content={contactPage.content}
        buttonText={contactPage.buttonText}
      />
    </div>
  )
}

export default ContactPage
