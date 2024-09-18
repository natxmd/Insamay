import { useMediaQuery } from "react-responsive"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import BtnYellow from "../components/buttons/BtnYellow"
import Burger from "../components/svg/Burger"
import TextNav from "../components/titles/TextNav"
import { Link } from "react-router-dom"
import { linkWhatsApp } from "../Global"

const Navbar = () => {

   const desktop = useMediaQuery({ query: '(min-width: 1024px)' })

   const [menu, setMenu] = useState(false)

   const onMenu = () => setMenu(!menu)

   return (
      <header
         className="w-full flex items-center bg-white shadow-md
         h-[80px] sm:h-[120px]">
         <nav
            className="flex justify-between items-center
                  w-[94%] max-w-[1312px] mx-auto">
            <Link to={"/"}>
               <img
                  src="svg/logo-header-black.svg"
                  alt="Logo"
                  className="cursor-pointer w-[100px] sm:w-[142px] xl:w-[160px]"
               />
            </Link>
            {desktop &&
               <div className="flex gap-[36px] xl:gap-[40px]">
                  <TextNav to="/" text="Inicio" onclick={onMenu} ClassName="!text-blacki" />
                  <TextNav to="/las-rutas" text="Las Rutas" onclick={onMenu} ClassName="!text-blacki" />
                  <TextNav to="/las-semillas" text="Las Semillas" onclick={onMenu} ClassName="!text-blacki" />
                  <TextNav to="/nosotros" text="Nosotros" onclick={onMenu} ClassName="!text-blacki" />
                  <TextNav to="/blog" text="Blog" onclick={onMenu} ClassName="!text-blacki" />
                  <TextNav to="/contacto" text="Contacto" onclick={onMenu} ClassName="!text-blacki" />
               </div>
            }
            {desktop && <BtnYellow text="Conversemos" link={linkWhatsApp} />}
            {!desktop && <Burger onClick={onMenu} fill="#2C2C2C"/>}
         </nav>
         <AnimatePresence>
            {
               !desktop && menu &&
               <motion.div
                  initial={{ opacity: 0.5, x: 325 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 325 }}
                  transition={{ duration: 0.8 }}
                  className="fixed top-0 right-0 !z-40 overflow-y-hidden
                  w-full mobile:max-w-[400px] h-[100vh] bg-white
                  py-[115px] px-[88px] grid justify-start">
                  <div className="grid gap-[32px]">
                     <TextNav to="/" text="Inicio" onclick={onMenu} />
                     <TextNav to="/las-rutas" text="Las Rutas" onclick={onMenu} />
                     <TextNav to="/las-semillas" text="Las Semillas" onclick={onMenu} />
                     <TextNav to="/nosotros" text="Nosotros" onclick={onMenu} />
                     <TextNav to="/blog" text="Blog" onclick={onMenu} />
                     <TextNav to="/contacto" text="Contacto" onclick={onMenu} />
                  </div>
                  <BtnYellow
                     text="Conversemos"
                     ClassName="mt-[56px]"
                     link={linkWhatsApp}
                  />
                  <img
                     src="/svg/close.svg"
                     alt="X"
                     className="cursor-pointer
                     absolute top-[32px] right-[32px]"
                     onClick={() => setMenu(!menu)}
                  />
               </motion.div>
            }
         </AnimatePresence>
         <AnimatePresence>
            {
               !desktop && menu &&
               <motion.div
                  initial={{ opacity: 0, x: 0 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="fixed top-0 right-0 !z-30 overflow-y-hidden
                  w-[100vw] h-[100vh] bg-black bg-opacity-50"
               />
            }
         </AnimatePresence>
      </header>
   )
}

export default Navbar
