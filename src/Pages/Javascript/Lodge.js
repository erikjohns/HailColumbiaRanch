import LodgeHeroImage from "../../Assets/Images/McGrath-17.jpg"
import HeroSection from "../../Components/Hero";
import "../Styling/Lodge.css";
import Images from "../../Assets/Images";
import Footer from "../../Components/Footer";

function LodgePage () {
    return (
        <div className="lodge-page">
            <HeroSection
                title="The Lodge"
                subtitle="Blah Blah"
                image={LodgeHeroImage}
            />

            <div className="lodge-left-section">
                <h1>The Home</h1>
                <h4>Enjoy the Mountain's Majesty</h4>
                <p>
                    Welcome to our stunning lodge, conveniently situated just 5 miles north of Butte, nestled amidst 
                    the breathtaking beauty of the mountains. This inviting 5-bedroom retreat offers an unparalleled 
                    blend of modern comfort and rustic charm. Step inside and discover a sanctuary designed for relaxation 
                    and rejuvenation. The lodge boasts a spacious layout that effortlessly accommodates families, groups 
                    of friends, or corporate teams seeking a memorable escape.
                </p>
            </div>

            <div className="lodge-gallery-container">
                <div className="image-full-width">
                    <img src={Images.theHome[0]} alt="home page" />
                </div>
                <div className="image-half-width">
                    <img src={Images.theHome[1]} alt="home" />
                    <img src={Images.theHome[2]} alt="home" />
                </div>
                <div className="image-full-width">
                    <img src={Images.theHome[3]} alt="home"/>
                </div>
                <div className="image-half-width">
                    <img src={Images.theHome[4]} alt="home" />
                    <img src={Images.theHome[5]} alt="home" />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default LodgePage;