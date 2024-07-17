import React, { useState } from 'react';
import LodgeHeroImage from "../../Assets/Images/McGrath-17.jpg";
import HeroSection from "../../Components/Hero";
import "../Styling/Lodge.css";
import Images from "../../Assets/Images";
import Footer from "../../Components/Footer";
import Modal from "../../Components/Modal"; // Import the modal component

function LodgePage() {
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);

    const openImage = (index) => {
        setSelectedImageIndex(index);
    };

    const closeModal = () => {
        setSelectedImageIndex(null);
    };

    const nextImage = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex + 1) % Images.theHome.length);
    };

    const prevImage = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex - 1 + Images.theHome.length) % Images.theHome.length);
    };

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
                <p> /* Your text here */ </p>
            </div>

            <div className="lodge-right-section">
                <h1>The Gallery</h1>
                <h4>See The Place for Yourself</h4>
            </div>

            <div className="lodge-gallery-container">
                <div className="image-full-width" onClick={() => openImage(0)}>
                    <img src={Images.theHome[0]} alt="home page" />
                </div>
                <div className="image-half-width">
                    <img src={Images.theHome[1]} alt="home" onClick={() => openImage(1)} />
                    <img src={Images.theHome[2]} alt="home" onClick={() => openImage(2)} />
                </div>
                <div className="image-full-width" onClick={() => openImage(3)}>
                    <img src={Images.theHome[3]} alt="home" />
                </div>
                <div className="image-half-width">
                    <img src={Images.theHome[4]} alt="home" onClick={() => openImage(4)} />
                    <img src={Images.theHome[5]} alt="home" onClick={() => openImage(5)} />
                </div>
                <button>See Full Gallery</button>
            </div>
            {selectedImageIndex !== null && (
                <Modal
                    image={Images.theHome[selectedImageIndex]}
                    onClose={closeModal}
                    onNext={nextImage}
                    onPrev={prevImage}
                />
            )}
            <Footer />
        </div>
    );
}

export default LodgePage;
