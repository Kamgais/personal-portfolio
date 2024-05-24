import React from 'react';


const Lightbox = ({ selectedImage, onClose }) => {
    if (!selectedImage) return null;

    return (
        <div className="lightbox" onClick={onClose}>
            <span className="close" onClick={onClose}>&times;</span>
            <img className="lightbox-content" src={selectedImage} alt="" />
        </div>
    );
};

export default Lightbox;
