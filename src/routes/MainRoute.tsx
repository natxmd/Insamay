import { Outlet } from "react-router-dom"
import NavbarTransparent from "../shared/NavbarTransparent"
import Footer from "../shared/Footer"

const MainRoutes = () => {
  return (
    <>
      <NavbarTransparent />
      <Outlet />
      <Footer/>
    </>
  )
}

export default MainRoutes
