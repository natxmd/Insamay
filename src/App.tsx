import { useEffect, useState } from "react";
import Home from "./pages/Home"
import { Routes, Route } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion";
import ScrollToTop from "./components/hooks/ScrollToTop";
import Rutas from "./pages/Rutas";
import Semillas from "./pages/Semillas";
import Nosotros from "./pages/Nosotros";
import Blog from "./pages/Blog";
import Contacto from "./pages/Contacto";
import Splash from "./components/interactive/Splash";
import MainRoutes from "./routes/MainRoute";
import SubRoutes from "./routes/SubRoutes";
import BlogRoutes from "./routes/BlogRoutes";

function App() {

   const [splash, setSplash] = useState(true);

   useEffect(() => {
      setTimeout(() => {
         setSplash(false);
      }, 3500);
   }, []);

   return (
      <AnimatePresence>
         {
            splash ?
               <Splash />
               :
               <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.5 }}
                  className="relative">
                  <ScrollToTop />
                  <Routes>
                     <Route path="/" element={<MainRoutes />}>
                        <Route index element={<Home />} />
                     </Route>
                     <Route path="/" element={<SubRoutes />}>
                        <Route path="las-rutas" element={<Rutas />} />
                        <Route path="las-semillas" element={<Semillas />} />
                        <Route path="nosotros" element={<Nosotros />} />
                        <Route path="contacto" element={<Contacto />} />
                        <Route path="blog" element={<Blog />} />
                     </Route>
                     <Route path="/blog" element={<BlogRoutes />}>
                        <Route path="article-1" element={<Rutas />} />
                     </Route>
                  </Routes>
               </motion.div>
         }
      </AnimatePresence>
   )
}

export default App
