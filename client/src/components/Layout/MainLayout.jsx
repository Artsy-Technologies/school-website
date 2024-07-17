import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../header/Navbar'
function MainLayout() {
    return (
        <main>
            <Navbar />
            <Outlet />
        </main>
    )
}

export default MainLayout