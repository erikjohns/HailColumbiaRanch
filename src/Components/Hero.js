import { motion } from "framer-motion";
import Navbar from "./Navbar";
const HeroSection = ({ title, subtitle, image }) => {
    const altText = `${title} Hero`

    return (
        <div className="hero-image-photo">
            <Navbar />
            <motion.div
                className="hero-text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 5 }}
            >
                <h4>{subtitle}</h4>
                <h1>{title}</h1>
            </motion.div>
            <img src={image} alt={altText} />
            <div className="hero-image-overlay" />
            <div className="hero-image-gradient" />
        </div>
    )
}

export default HeroSection;