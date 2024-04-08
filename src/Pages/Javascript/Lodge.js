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
                Welcome to our stunning lodge, conveniently situated just 5 miles north of Butte, nestled amidst the breathtaking beauty of the mountains. This inviting 5-bedroom retreat offers an unparalleled blend of modern comfort and rustic charm.

                Step inside and discover a sanctuary designed for relaxation and rejuvenation. The lodge boasts a spacious layout that effortlessly accommodates families, groups of friends, or corporate teams seeking a memorable escape.

                Each of the 5 bedrooms has been meticulously appointed to ensure a restful night's sleep for every guest. Sink into plush bedding and let the tranquility of the mountains lull you into a state of blissful repose.

                For those who enjoy staying active, our lodge features a fully equipped gym where you can maintain your fitness routine amidst the stunning backdrop of nature. After a workout, unwind by one of the three cozy fireplaces scattered throughout the house, perfect for cozy evenings spent sharing stories and creating memories.

                One of the highlights of our lodge is the spacious screened-in porch, an idyllic setting for entertaining or simply soaking in the panoramic views that surround you. Whether you're savoring a morning cup of coffee or hosting a lively barbecue with loved ones, this versatile outdoor space is sure to become a favorite gathering spot.

                Ideal for family vacations, milestone celebrations, or productive company retreats, our lodge offers something for everyone. Explore nearby hiking trails, embark on scenic drives, or simply bask in the serenity of your surroundings.

                Escape the hustle and bustle of everyday life and experience the magic of our mountain retreat. Book your stay with us today and embark on an unforgettable journey of relaxation, adventure, and connection.
                </p>
            </div>

            <div className="lodge-right-section">
                <h1>The Gallery</h1>
                <h4>See The Place for Yourself</h4>
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
                <button>See Full Gallery</button>
            </div>
            <Footer />
        </div>
    )
}

export default LodgePage;