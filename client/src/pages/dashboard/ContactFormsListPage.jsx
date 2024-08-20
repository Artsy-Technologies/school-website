import { useEffect, useState } from "react";
import ContactCard from "../../components/admin/ContactCard"
import axios from "axios";

function ContactFormsListPage() {
  const [contactData, setContactData] = useState([]);

  const getContactData = async () => {
    try {
      let response = await axios.get("/api/students/getContactStudentsData");
      setContactData(response?.data?.allContactData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getContactData();
  }, []);

  return (
    <div className="w-[100%] h-full">
      <div className="">
        {contactData.map((contactData, i) => (
          <ContactCard key={i} contactData={contactData} />
        ))}
      </div>
    </div>
  );
}

export default ContactFormsListPage;
