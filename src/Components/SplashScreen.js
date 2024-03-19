import { motion } from "framer-motion";
import "./SplashScreen.css";
import { useEffect, useState } from "react";

const SplashScreen = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        // Disable scrolling when the splash screen is visible
        if (isVisible) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'unset';
        }
      }, [isVisible]);

    return (
        <motion.div
            className="splash-screen-container"
            initial={{ y: 0 }}
            animate={{ y: isVisible ? 0 : '-100vh' }}
            transition={{ duration: 0.5 }}
        >
            <h1>HCR</h1>
        </motion.div>
    )
}

export default SplashScreen;