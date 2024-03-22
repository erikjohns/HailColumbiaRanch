import "../Styling/Homepage.css";
import Footer from "../../Components/Footer";
import HeroImage from "../../Assets/Images/McGrath.jpg"
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import HeroSection from "../../Components/Hero";

const sections = [
    {
        className: "discover-section",
        title: "Discover",
        subtitle: "Hail Columbia Ranch: Where Love & Nature Unite",
        text:   `Welcome to Hail Columbia Ranch, a picturesque wedding and event venue in Butte, 
                Montana. Our charming barn, surrounded by Montana's natural beauty, 
                sets the stage for your special day. Explore rustic elegance where romance 
                meets rugged allure. Extend your experience by staying at 'The Lodge,' 
                our cozy cabin-style house in Hail Columbia Gulch. It's more than accommodation; 
                it's an immersive retreat, blending rustic charm with modern comfort. 
                Your dream event begins at Hail Columbia Ranch – where love and nature unite in 
                perfect harmony, and every moment is a cherished memory.`,
    },
    {
        className: "venue-section",
        title: "The Venue",
        subtitle: "Amidst The Mountains - Your Serene Venue in Nature's Embrace",
        text:   `Discover the epitome of rustic luxury at our venue in Butte, Montana. Surrounded by 
                nature's breathtaking backdrop, our charming barn exudes timeless elegance, creating 
                the perfect setting for your special day. Embrace the unique allure of our venue, 
                where each moment becomes a cherished memory against the stunning canvas of Montana's 
                natural beauty.`,
        hasButton: true,
        buttonLink: '/venue'
    },
    {
        className: "lodge-section",
        title: "The Lodge",
        subtitle: "A Cozy Mountain Retreat, Tucked Away in Tranquil  Serenity",
        text:   `Explore The Lodge, a hidden gem where cozy comforts meet serene surroundings. Nestled in 
                tranquil serenity, this retreat offers a perfect blend of rustic charm and modern tranquility. 
                Every moment spent at The Lodge is a memory etched against the backdrop of nature's beauty, 
                creating an enchanting experience for your getaway or special event.`,
        hasButton: true,
        buttonLink: '/lodge'
    },
];

function Homepage () {

    const animationControl = useAnimation();
    const animationControl2 = useAnimation();
    const animationControl3 = useAnimation();

    const { ref: ref1, inView: inView1 } = useInView();
    const { ref: ref2, inView: inView2 } = useInView();
    const { ref: ref3, inView: inView3 } = useInView();

    useEffect(() => {
        if (inView1) {
            animationControl.start({
                x: 0,
                opacity: 1,
                transition: {
                    delay: 0.5,
                    duration: 2
                }
            })
        }
        if (inView2) {
            animationControl2.start({
                x: 0,
                opacity: 1,
                transition: {
                    delay: 0.5,
                    duration: 2
                }
            })
        }
        if (inView3) {
            animationControl3.start({
                x: 0,
                opacity: 1,
                transition: {
                    delay: 0.5,
                    duration: 2
                }
            })
        }
    }, [inView1, inView2, inView3, animationControl, animationControl2, animationControl3]);

    return (
        <div className="homepage">
            <HeroSection
                title="Hail Columbia Ranch"
                subtitle="Wedding & Event Venue"
                image={HeroImage}
            />

            {sections.map((section, index) => (
                <div key={index} className={section.className} ref={index === 0 ? ref1 : index === 1 ? ref2 : ref3}>
                    <motion.div
                        className={`${section.className}-text`}
                        initial={{ opacity: 0, x: -50 }}
                        animate={index === 0 ? animationControl : index === 1 ? animationControl2 : animationControl3}
                        transition={{ duration: 0.5 }}
                    >
                        <h1>{section.title}</h1>
                        <h4>{section.subtitle}</h4>
                        <p>{section.text}</p>
                        {section.hasButton && (
                            <div className={`${section.className}-button`}>
                                <a href={section.buttonLink} className={`${section.className}-hover-underline`}>
                                    Learn More
                                </a>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 16" fill="none">
                                    <g clipPath="url(#clip0_65_28)">
                                        <path d="M16 0L14.59 1.41L20.17 7H0L8.7422e-08 9H20.17L14.58 14.58L16 16L24 8L16 0Z" fill="white"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_65_28">
                                        <rect width="24" height="16" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        )}
                    </motion.div>
                    <div className={`${section.className}-image`}></div>
                </div>
            ))}

            <Footer className="homepage-footer" />
        </div>
    );
};

export default Homepage;
