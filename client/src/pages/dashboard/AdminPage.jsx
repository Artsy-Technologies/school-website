/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useAdmin } from '../../hooks/AdminContext';
import Sidebar from '../../components/admin/Sidebar';
import ContactCard from '../../components/admin/ContactCard';
import axios from 'axios';

function AdminPage() {
    const [contactData, setContactData] = useState([]);

    const getContactData = async () => {
        try {
            let response = await axios.get('/api/students/getContactStudentsData');
            setContactData(response?.data?.allContactData);

        } catch (error) {
            console.log(error);

        }
    }



    useEffect(() => {
        getContactData();
    }, [])

    return (
        <section className="h-screen overflow-y-hidden flex " >
            <div className='w-[20%] h-full ' >
                <Sidebar />
            </div>

            <div className='w-[80%] h-full border-2  ' >
                <div className="">
                    {
                        contactData.map((contactData,i) => (
                            <ContactCard key={i} contactData={contactData}  />
                        ))
                    }
                </div>
            </div>

        </section>
    )
}

export default AdminPage
