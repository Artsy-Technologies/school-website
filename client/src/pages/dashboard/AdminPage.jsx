/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import { useAdmin } from '../../hooks/AdminContext';
import Sidebar from '../../components/admin/Sidebar';
function AdminPage() {

    return (
        <section className="h-screen  " >
            <Sidebar />
        </section>
    )
}

export default AdminPage