import  { createContext, useContext } from 'react'

const BannerContext = createContext()

export const DataProvider = ({ children }) => {
  const data = {
    mainHeader: {
      title: 'Welcome to Little Learners Academy',
      description:
        'At Little Learners Academy, we are a leading kindergarten school dedicated to nurturing and stimulating young minds...',
    },
    aboutPage: {
      title: 'Welcome to Little Learners Academy',
      buttonText: 'Overview',
      content:
        'A leading kinder garden school dedicated to providing a nurturing and stimulating environment for young learners. With a commitment to excellence in early education, we believe in shaping curious minds and building a strong foundation for a lifelong love of learning. Our holistic approach fosters intellectual, social, emotional, and physical development, ensuring that each child reaches their full potential.',
    },

    admissionPage: {
      title: 'Join Our Family of Young Learners',
      buttonText: 'Admissions',
      content:
        'At Little Learners Academy, we welcome you to embark on an exciting educational journey for your child. Our admission process is designed to be transparent, straightforward, and inclusive. Heres a step-by-step guide to joining our school.',
    },

    academicsPage: {
      title: 'Overview',
      buttonText: 'Know More',
      content:
        "Welcome to our Academics page, where we take pride in providing a comprehensive and stimulating educational experience for your child. Our kindergarten school's academic program is thoughtfully designed to foster a love for learning while building a strong foundation of essential skills and knowledge. From language arts and mathematics to science and social studies, our curriculum is carefully crafted to spark curiosity and encourage active exploration.",
    },
    studentLifePage: {
      title: 'Embracing Learning with Discovery and Joy',
      buttonText: 'Enriching Student Life',
      content:
        'Welcome to our Student Life page, where the magic of childhood comes alive through the enriching experiences and adventures that our students embark on each day. At our kindergarten school, we believe that learning goes beyond textbooks, and we strive to create a holistic and engaging environment that nurtures every aspect of a childs development.',
    },
    contactPage: {
      title: 'Feel Free To Connect With Us',
      buttonText:'Contact Us',
      content:
        'We value open communication and are eager to assist you with any inquiries. Feel free to reach out to us through any of the following contact methods',
    },
  }

  return <BannerContext.Provider value={data}>{children}</BannerContext.Provider>
}

export const useData = () => useContext(BannerContext)
