import "../Styling/Venue.css";
import VenueHeroImage from "../../Assets/Images/McGrath-69.jpg";
import HeroSection from "../../Components/Hero";

function VenuePage () {
    return (
        <div className="venue-page">
            <HeroSection 
                title="The Venue" 
                subtitle="blah blah" 
                image={VenueHeroImage}  
            />        
        </div>     
    )
}

export default VenuePage;