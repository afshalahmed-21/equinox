import React from 'react'
import Slider from 'react-slick/lib/slider';
import './HomePageSection02SliderCss.css'
import MW from '../../../Assets/HomePageImages/Brands/MW.png'
import CsGo from '../../../Assets/HomePageImages/Brands/csGo.png'
import doTA from '../../../Assets/HomePageImages/Brands/doTA.png'
import volorant from '../../../Assets/HomePageImages/Brands/volorant.png'
import Pubg from '../../../Assets/HomePageImages/Brands/pubg.png'
import overWatch from '../../../Assets/HomePageImages/Brands/overWatch.png'
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap, faUserFriends } from '@fortawesome/fontawesome-free-solid';

const HomePageSection02Slider = () => {
    const settings = {
        className: "HomePageSection02Slider",
        centerMode: true,
        infinite: true,
        centerPadding: "40px",
        slidesToShow: 6,
        speed: 5000,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    centerPadding: "60px",
                    centerMode: true,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
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
        <div>
            <Slider {...settings}>
                <div>
                    <Card className='slideCards slide01'>
                        <Card.Body className='pt-5 mt-5'>
                            <Card.Title className='mt-5 pt-5'>
                                <img src={MW} alt="MW" />
                            </Card.Title>
                            <Card.Subtitle className="mb-2">MW Call Of Duty</Card.Subtitle>
                            <Card.Link className='text-muted' href="#"> <FontAwesomeIcon icon={faMap} /> Ascent Map</Card.Link>
                            <Card.Link className='text-muted' href="#"> <FontAwesomeIcon icon={faUserFriends} /> 16 players</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <Card className='slideCards slide02'>
                        <Card.Body className='pt-5 mt-5'>
                            <Card.Title className='mt-5 pt-5'>
                                <img src={CsGo} alt="CsGo" />
                            </Card.Title>
                            <Card.Subtitle className="mb-2">CS: Global Offence</Card.Subtitle>
                            <Card.Link className='text-muted' href="#">Ascent Map</Card.Link>
                            <Card.Link className='text-muted' href="#">16 players</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <Card className='slideCards slide03'>
                        <Card.Body className='pt-5 mt-5'>
                            <Card.Title className='mt-5 pt-5'>
                                <img src={doTA} alt="doTA" />
                            </Card.Title>
                            <Card.Subtitle className="mb-2">Dota 2</Card.Subtitle>
                            <Card.Link className='text-muted' href="#"> <FontAwesomeIcon icon={faMap} /> Ascent Map</Card.Link>
                            <Card.Link className='text-muted' href="#"> <FontAwesomeIcon icon={faUserFriends} /> 16 players</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <Card className='slideCards slide04'>
                        <Card.Body className='pt-5 mt-5'>
                            <Card.Title className='mt-5 pt-5'>
                                <img src={volorant} alt="Volorant" />
                            </Card.Title>
                            <Card.Subtitle className="mb-2">Volorant</Card.Subtitle>
                            <Card.Link className='text-muted' href="#"> <FontAwesomeIcon icon={faMap} /> Ascent Map</Card.Link>
                            <Card.Link className='text-muted' href="#"> <FontAwesomeIcon icon={faUserFriends} /> 16 players</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <Card className='slideCards slide05'>
                        <Card.Body className='pt-5 mt-5'>
                            <Card.Title className='mt-5 pt-5'>
                                <img src={Pubg} alt="Pubg" />
                            </Card.Title>
                            <Card.Subtitle className="mb-2">Pubg</Card.Subtitle>
                            <Card.Link className='text-muted' href="#"> <FontAwesomeIcon icon={faMap} /> Ascent Map</Card.Link>
                            <Card.Link className='text-muted' href="#"> <FontAwesomeIcon icon={faUserFriends} /> 16 players</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <Card className='slideCards slide06'>
                        <Card.Body className='pt-5 mt-5'>
                            <Card.Title className='mt-5 pt-5'>
                                <img src={overWatch} alt="OverWatch" />
                            </Card.Title>
                            <Card.Subtitle className="mb-2">Over Watch</Card.Subtitle>
                            <Card.Link className='text-muted' href="#"> <FontAwesomeIcon icon={faMap} /> Ascent Map</Card.Link>
                            <Card.Link className='text-muted' href="#"> <FontAwesomeIcon icon={faUserFriends} /> 16 players</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <Card className='slideCards slide07'>
                        <Card.Body className='pt-5 mt-5'>
                            <Card.Title className='mt-5 pt-5'>
                                <img src={MW} alt="MW" />
                            </Card.Title>
                            <Card.Subtitle className="mb-2">MW Call Of Duty</Card.Subtitle>
                            <Card.Link className='text-muted' href="#"> <FontAwesomeIcon icon={faMap} /> Ascent Map</Card.Link>
                            <Card.Link className='text-muted' href="#"> <FontAwesomeIcon icon={faUserFriends} /> 16 players</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
            </Slider>
        </div>
    )
}

export default HomePageSection02Slider