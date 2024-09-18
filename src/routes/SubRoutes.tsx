import { Outlet } from 'react-router-dom'
import Navbar from '../shared/Navbar'
import Footer from '../shared/Footer'

const SubRoutes = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default SubRoutes