
import { Outlet } from 'react-router-dom'
import Navbar from '../header/Navbar'
import Footer from '../footer/Footer'
function MainLayout() {
    return (
        <main className='dark:bg-darkmode  '>
            <Navbar />
            <div className='pt-[7rem] ' >
                <Outlet />
            </div>
            <Footer />
        </main>
    )
}

export default MainLayout