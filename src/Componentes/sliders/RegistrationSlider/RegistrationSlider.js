import React from 'react'
import Slider from 'react-slick/lib/slider';
import './RegistrationSlider_Css.css';

import RegistrationSlide01 from '../RegistrationSlider/RegistrationSlide01';
import RegistrationSlide02 from '../RegistrationSlider/RegistrationSlide02';
import RegistrationSlide03 from './RegistrationSlide03';

const RegistrationSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <Slider {...settings}>
                <RegistrationSlide01 />
                <RegistrationSlide02 />
                <RegistrationSlide03 />
            </Slider>
        </>
    )
}

export default RegistrationSlider