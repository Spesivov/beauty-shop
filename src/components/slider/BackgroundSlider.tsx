import React, { useState, useEffect } from "react"
import slidePhoto1 from '../../assets/slide_photo.jpg'
import slidePhoto2 from '../../assets/slide_photo1.jpg'

const images: string[] = [slidePhoto1, slidePhoto2];
const slideTimeout = 10000;

export const BackgroundSlider: React.FC = () => {
    const [currentImageIndex, setNextImageIndex] = useState<number>(0)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setNextImageIndex(currentImageIndex == images.length - 1 ? 0 : currentImageIndex + 1)
        }, slideTimeout);

        return () => {
            clearInterval(intervalId);
        };
    })

    return (
        <div className="img-container">
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`image-layer ${index === currentImageIndex ? 'active' : ''}`}
                    style={{ backgroundImage: `url(${image})` }}
                />
            ))}
        </div>
    );
};