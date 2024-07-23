import React, {useEffect, useState} from 'react';
import './SplashScreen.css';
import Logo from '../Assets/Images/HCRLogo.svg';
import { motion } from "framer-motion";

const SplashScreen = ({ onFinish }) => {

    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFadeOut(true);
            setTimeout(onFinish, 1000);
        }, 6000);

        return () => clearTimeout(timer);
    }, [onFinish]);


    return (
        <div className={`splash-screen ${fadeOut ? 'fade-out' : ''}`}>
            <motion.div
                initial={{ scale: 2, x: -250 }}
                animate={{ scale: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 2}}
                style={{ transformOrigin: 'center' }}
                className={"splash-screen-image-wrapper"}
            >
                <motion.img
                    src={Logo}
                    className={'splash-screen__logo'}
                    alt={'Logo'}
                    initial={{x: 300 }}
                    animate={{x: 0 }}
                    transition={{duration: 0.5, delay: 3}}
                    style={{transformOrigin: 'center'}}
                />
            </motion.div>
            <div className={"splash-screen__heading"}>
                <motion.h1
                    initial={{x: -200, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 0.5, delay: 3.5}}
                >
                HAIL COLUMBIA RANCH
                </motion.h1>
                <motion.h4
                    initial={{ x: -200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 4.5 }}
                >
                    Wedding & Event Center in Butte, Montana
                </motion.h4>
            </div>
        </div>
    )
}

export default SplashScreen;