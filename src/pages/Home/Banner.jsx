import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const Banner = () => {
    return (
        <div>
            <Carousel autoPlay={true} className=''>
                <div>
                    <img src="/src/assets/home/01.jpg" alt="" />
                </div>
                <div>
                    <img src="/src/assets/home/02.jpg" alt="" />
                </div>
                <div>
                    <img src="/src/assets/home/03.png" alt="" />
                </div>
                <div>
                    <img src="/src/assets/home/04.jpg" alt="" />
                </div>
                <div>
                    <img src="/src/assets/home/05.png" alt="" />
                </div>
                <div>
                    <img src="/src/assets/home/06.png" alt="" />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;