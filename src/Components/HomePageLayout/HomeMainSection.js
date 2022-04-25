import { faArrowRight, faCommentAlt } from '@fortawesome/fontawesome-free-solid'
import { faDiscord, faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import mainBannerImg01 from '../../Assets/HomePageImages/mainBannerImg01.png'
import mainBannerImg02 from '../../Assets/HomePageImages/mainBannerImg02.png'
import mainBannerImg03 from '../../Assets/HomePageImages/mainBannerImg03.png'
import circle from '../../Assets/HomePageImages/circle.png'
import blueDust from '../../Assets/HomePageImages/blueDust.png'
import homeIcon01 from '../../Assets/HomePageImages/Icons/icon01.png'
import homeIcon02 from '../../Assets/HomePageImages/Icons/icon02.png'
import homeIcon03 from '../../Assets/HomePageImages/Icons/icon03.png'

const HomeMainSection = () => {
    return (
        <div className='HomeMainSection'>
            <Container>
                <Row>
                    <Col lg={4} className='m-auto'>
                        <div className="mainBannerContent">
                            <div className="socialMediaLinks">
                                <ul>
                                    <li>
                                        <a href="javascript:void(0)">
                                            <FontAwesomeIcon className='ms-4 fa-sm' icon={faCommentAlt} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">
                                            <FontAwesomeIcon className='ms-4 fa-sm' icon={faTwitter} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">
                                            <FontAwesomeIcon className='ms-4 fa-sm' icon={faFacebookF} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">
                                            <FontAwesomeIcon className='ms-4 fa-sm' icon={faDiscord} />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <h2 className='mb-4'>Esport Analytics <br /> To Help You <br /> Perform Better</h2>
                            <p className='mb-4'>We provide the latest esports <br /> analytics on a regular basis</p>
                            <button className='btn-warning mb-5 w-50' type='button'>Sign Up Now <FontAwesomeIcon className='ms-2' icon={faArrowRight} /> </button>
                            <Row className='mt-4 mb-5'>
                                <Col lg={3} className='col-3'>
                                    <img className='homeIcon opacity' src={homeIcon01} alt="homeIcon01" />
                                </Col>
                                <Col lg={3} className='col-3'>
                                    <img className='homeIcon opacity' src={homeIcon02} alt="homeIcon02" />
                                </Col>
                                <Col lg={3} className='col-3'>
                                    <img className='homeIcon' src={homeIcon03} alt="homeIcon03" />
                                </Col>
                            </Row>
                            <div className="opacity">
                                <a href="#HomeSection02">
                                    <div className="d-flex">
                                        <div class="mouse me-3">
                                            <div class="move"></div>
                                        </div>
                                        <p className='mb-0 m-auto ms-0'>
                                            <b>SCROLL DOWN</b>
                                        </p>
                                    </div>
                                    <div className='scroll-down mt-4 ms-2'>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </Col>
                    <Col lg={7} className='m-auto position-relative'>
                        <img className='w-100 circle' src={circle} alt="circle" />
                        <img className='w-100 mainBannerImg01' src={mainBannerImg01} alt="homePageImage01" />
                        <img className='w-100 mainBannerImg02' src={mainBannerImg02} alt="homePageImage01" />
                        <img className='w-100 mainBannerImg03' src={mainBannerImg03} alt="homePageImage01" />
                        <img className='w-100 mainBannerImg04' src={blueDust} alt="mainBannerImg04" />
                        <img className='w-100 mainBannerImg05' src={blueDust} alt="mainBannerImg05" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default HomeMainSection