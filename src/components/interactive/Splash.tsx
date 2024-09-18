import { AnimatePresence, motion } from 'framer-motion'

const Splash = () => {
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="bg-white w-[98vw] h-[98vh] overflow-x-hidden overflow-y-hidden flex 
                justify-center items-center ">
                <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.1 }}
                    src="logo-footer.svg"
                    alt="logo"
                />
            </motion.div>
        </AnimatePresence>
    )
}

export default Splash
