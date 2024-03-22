import { motion } from "framer-motion";
import imageSRCs from "../Assets/Images";
import "./ImageSlider.css";
import { useEffect, useRef, useState } from "react";

const ImageSlider = () => {

    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, []);

    return (
        <div>
            <motion.div ref={carousel} className="carousel" whileTap={{cursor: "grabbing"}}>
                <motion.div 
                    drag="x" 
                    dragConstraints={{ right: 0, left: -width }}
                    className="inner-carousel">
                    {imageSRCs.map(image => {
                        return (
                            <motion.div className="carousel-item" key={image}>
                                <img src={image} alt="gallery" />
                            </motion.div>
                        );
                    })}
                </motion.div>
            </motion.div>
        </div>
    )
}

export default ImageSlider;