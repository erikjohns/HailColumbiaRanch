import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AvatarImage from "../Assets/Images/avatar_placeholder.png"

const testimonials = [
    { quote: "This is the best venue ever!", author: "John Doe", image: {AvatarImage} },
    { quote: "We had an amazing experience!", author: "Jane Smith", image: {AvatarImage} },
    { quote: "Highly recommend this place.", author: "Jim Beam", image: {AvatarImage} }
];

const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false
    };

    return (
        <div className="testimonials">
            <Slider {...settings}>
                {testimonials.map((testimonial, index) => (
                    <div className="testimonial-wrap" key={index}>
                        <img src={AvatarImage} alt={"Testimonial avatar"} />
                        <div key={index} className="testimonial">
                            <p>{testimonial.quote}</p>
                            <h6>{testimonial.author}</h6>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Testimonials;