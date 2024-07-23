import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AvatarImage from "../Assets/Images/avatar_placeholder.png";

const testimonials = [
    { quote: '"Great place with great views and supreme quietness. Host was very responsive and communicative. Perfect selection for the 11 person stay we planned. Privacy within the house and yet plenty of open space to socialize. Highly recommend."', author: "Greg, Minnesota", image: "https://a0.muscache.com/im/pictures/user/2ac35ef2-ea1c-4ead-9dbb-274106d96106.jpg?im_w=240" },
    { quote: '"This is a wonderful house with with a beautiful view of surrounding mountains. The property is nestled in a treed hill side giving you privacy and a great view. The house’s interior is spacious, yet is very comfortable and cozy. The property is close enough to town that you can pop in for a quick visit or to pick up food if needed. We plan to return to the area soon and plan to reserve this property again! Thank you so to the host for making our stay so fantastic and special!!"', author: "Doug, Montana", image: "https://a0.muscache.com/im/pictures/user/5b59a83b-e10f-4885-bdd5-6beb0d394c69.jpg?im_w=240" },
    { quote: '"This is a very unique place with amazing spaces and views. We all enjoyed our stay and time together in this home, especially sitting in front of the big beautiful fireplace and sitting around the kitchen bar/table visiting while we were cooking and preparing meals! We also enjoyed the great gas fire out in the back yard.\n' +
            'Angela’s was responsive and easy to work with. We had a great time together in their home."', author: "Wanda, South Dakota", image: "https://a0.muscache.com/im/pictures/user/e9f7b91f-cfc9-4105-bc00-8bfc23f3cbc8.jpg?im_w=240" },
    { quote: '"Our family had a wonderful stay at the beautiful home. Photos do not do it justice and views of the surrounding area are breathtaking. Angie is a warm, thoughtful and easy-to-work with host and the home has everything you could want along with an incredible amount of space for a group. We will definitely be back."', author: "Maria, California", image: "https://a0.muscache.com/im/pictures/user/33d08307-2c50-46c0-ad0b-a9eb3fce49ef.jpg?im_w=240"},
    { quote: '"Pictures don’t do this house justice. It’s amazing! Anything you could possibly need is inside. Part of our group was coming from out of state and Angela was so great working with us if we were going to have to cancel due to COVID. Luckily we didn’t! The views are amazing too! The bunk bed room was a hit with all the kids. The adults loved the basketball hoop in the garage. The list goes on and on. We will definitely be back!"', author: "Kellie, Montana", image: "https://a0.muscache.com/im/Portrait/Avatars/messaging/b3e03835-ade9-4eb7-a0bb-2466ab9a534d.jpg?im_policy=medq_w_text&im_t=K&im_w=240&im_s=133.33&im_f=airbnb-cereal-medium.ttf&im_c=ffffff"}
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
            <Slider {...settings} className={"testimonials-slider"}>
                {testimonials.map((testimonial, index) => (
                    <div className="testimonial-wrap" key={index}>
                        <img src={testimonial.image} alt="Testimonial avatar" />
                        <div className="testimonial-text">
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