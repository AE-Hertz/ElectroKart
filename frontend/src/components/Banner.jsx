import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/slider.css';

const Banner = ({ banner }) => {
    const [touchPosition, setTouchPosition] = useState(null);

    const handleTouchStart = (e) => {
        const touchDown = e.touches[0].clientX;
        setTouchPosition(touchDown);
    };

    const handleTouchMove = (e) => {
        if (touchPosition === null) {
            return;
        }

        const currentTouch = e.touches[0].clientX;
        const diff = touchPosition - currentTouch;

        if (diff > 5) {
            document.querySelector('.carousel-control-next').click();
        }

        if (diff < -5) {
            document.querySelector('.carousel-control-prev').click();
        }

        setTouchPosition(null);
    };

    return (
        <Carousel
            fade
            onTouchStart={handleTouchStart} 
            onTouchMove={handleTouchMove} 
            interval={5000} 
            keyboard={true}
            pause="hover"
        >
            {banner.end.map((item, index) => (
                <Carousel.Item
                    key={item.image}
                    id="banner"
                    interval={1000}
                    keyboard={true}
                >
                    <img
                        className="d-block w-100"
                        id="bannerImage"
                        src={item.image}
                        alt={`${index} banner`}
                        loading="lazy"
                    />
                    <Carousel.Caption>
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        <p>{item.source}</p>
                        <u><a href="/" className="text-white">Read more</a></u>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
};


export default Banner;

