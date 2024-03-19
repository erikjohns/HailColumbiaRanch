import Navbar from "../Components/Navbar";
import "./Homepage.css";
import Footer from "../Components/Footer";
import HeroImage from "../Assets/Images/McGrath.jpg"
import SplashScreen from "../Components/SplashScreen";

function Homepage () {
    return (
        <div className="homepage">
            <div className="hero-image-photo">
                <Navbar />
                <div className="hero-text">
                    <h4>Wedding & Event Venue</h4>
                    <h1>Hail Columbia Ranch</h1>
                </div>
                <img src={HeroImage} />
                <div className="hero-image-overlay"></div>
                <div className="hero-image-gradient"></div>
            </div>
            <div className="discover-section">
                    <div className="discover-section-text">
                        <h1>Discover</h1>
                        <h4>Hail Columbia Ranch: Where Love & Nature Unite</h4>
                        <p>
                            Welcome to Hail Columbia Ranch, a picturesque wedding and event venue in Butte, 
                            Montana. Our charming barn, surrounded by Montana's natural beauty, 
                            sets the stage for your special day. Explore rustic elegance where romance 
                            meets rugged allure. Extend your experience by staying at 'The Lodge,' 
                            our cozy cabin-style house in Hail Columbia Gulch. It's more than accommodation; 
                            it's an immersive retreat, blending rustic charm with modern comfort. 
                            Your dream event begins at Hail Columbia Ranch – where love and nature unite in 
                            perfect harmony, and every moment is a cherished memory.
                        </p>
                    </div>
                    <div className="discover-section-image">
                        
                    </div>
                </div>


                <div className="venue-section">
                    <div className="venue-section-image">
                    </div>
                    <div className="venue-section-text">
                        <h1>The Venue</h1>
                        <h4>Amidst The Mountains - Your Serene Venue in Nature's Embrace</h4>
                        <p>
                            Discover the epitome of rustic luxury at our venue in Butte, Montana. Surrounded by 
                            nature's breathtaking backdrop, our charming barn exudes timeless elegance, creating 
                            the perfect setting for your special day. Embrace the unique allure of our venue, 
                            where each moment becomes a cherished memory against the stunning canvas of Montana's 
                            natural beauty.
                        </p>
                        <div className="venue-section-button">
                            <a href="#" className="venue-section-hover-underline">Learn More</a>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 16" fill="none">
                                <g clip-path="url(#clip0_65_28)">
                                    <path d="M16 0L14.59 1.41L20.17 7H0L8.7422e-08 9H20.17L14.58 14.58L16 16L24 8L16 0Z" fill="white"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_65_28">
                                    <rect width="24" height="16" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>


                <div className="lodge-section">
                    <div className="lodge-section-text">
                        <h1>The Lodge</h1>
                        <h4>A Cozy Mountain Retreat, Tucked Away in Tranquil  Serenity</h4>
                        <p>
                            Explore The Lodge, a hidden gem where cozy comforts meet serene surroundings. Nestled in 
                            tranquil serenity, this retreat offers a perfect blend of rustic charm and modern tranquility. 
                            Every moment spent at The Lodge is a memory etched against the backdrop of nature's beauty, 
                            creating an enchanting experience for your getaway or special event.
                        </p>
                        <div className="lodge-section-button">
                            <a href="#" className="lodge-section-hover-underline">Learn More</a>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 16" fill="none">
                                <g clip-path="url(#clip0_65_28)">
                                    <path d="M16 0L14.59 1.41L20.17 7H0L8.7422e-08 9H20.17L14.58 14.58L16 16L24 8L16 0Z" fill="white"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_65_28">
                                    <rect width="24" height="16" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                    <div className="lodge-section-image">
                    </div>
                </div>

                <Footer className="homepage-footer" />
        </div>
    );
};

export default Homepage;