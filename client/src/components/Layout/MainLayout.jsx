
import { Outlet } from 'react-router-dom'
import Navbar from '../header/Navbar'
import Footer from '../footer/Footer'
function MainLayout() {
    return (
        <main>
            <Navbar />
            <Outlet />
            <Footer/>
        </main>
    )
}

export default MainLayout