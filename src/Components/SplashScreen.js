import { motion } from "framer-motion";
import "./SplashScreen.css";
import { useEffect, useState } from "react";
import Counter from "./Counter";

const SplashScreen = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [displayedLatitude, setDisplayedLatitude] = useState(0);
    const [displayedLongitude, setDisplayedLongitude] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isVisible ? 'hidden' : 'unset';
    }, [isVisible]);

    

    return (
        <motion.div
            className="splash-screen-container"
            initial={{ y: 0 }}
            animate={{ y: isVisible ? 0 : '-100vh' }}
            transition={{ duration: 0.5 }}
        >
            <motion.p>
                <Counter inputNum="123.4" />&deg;
            </motion.p>
            <div>
                {['H', 'C', 'R'].map((letter, index) => (
                    <motion.h1
                        key={index}
                        initial={{ y: 0, opacity: 1 }}
                        animate={{ y: -200, opacity: 0 }}
                        transition={{ duration: 0.5, delay: 2.3 + index * 0.1 }}
                    >
                        {letter}
                    </motion.h1>
                ))}
            </div>
            <motion.p>
                123.4&deg;
            </motion.p>
        </motion.div>
    )
}

export default SplashScreen;