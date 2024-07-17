import React from 'react';
import './Modal.css';

const Modal = ({ image, onClose, onNext, onPrev }) => {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="arrow left-arrow" onClick={onPrev}>&#10094;</button>
                <img src={image} alt="Expanded view" />
                <button className="arrow right-arrow" onClick={onNext}>&#10095;</button>
                <button className="close-button" onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default Modal;
