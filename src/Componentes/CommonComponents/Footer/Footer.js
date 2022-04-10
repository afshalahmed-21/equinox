import { faCommentAlt } from '@fortawesome/fontawesome-free-regular'
import { faDiscord, faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './FooterCss.css'

const Footer = () => {
    return (
        <div className="footer">
            <Container>
                <Row>
                    <Col lg={4} className='text-light mobileMargin'>
                        <div className="footerLogo">
                            <Link className='text-light' to='/'>EQUINOX</Link>
                            <p>
                                Weit hinten den Wortbergen, fern der Lander
                                Vokalien und Konsanantien leben die Blindtexte.
                            </p>
                            <h6>All Rights Reserverd Wicked Dumplings Pte. Ltd.</h6>
                        </div>
                    </Col>
                    <Col lg={2} className='text-light mobileMargin'>
                        <div className="footerUl">
                            <h5>MENU</h5>
                            <ul>
                                <li>
                                    <a href="javascript:void(0)">Scores</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">About us</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">Partners</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">Teams</a>
                                </li>
                                <li className='border-0'>
                                    <a href="javascript:void(0)">Pricing</a>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={2} className='text-light mobileMargin'>
                        <div className="footerUl">
                            <h5>SOCIAL MEDIA</h5>
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
                                    <li className='border-0'>
                                        <a href="javascript:void(0)">
                                            <FontAwesomeIcon className='ms-4 fa-sm' icon={faDiscord} />
                                        </a>
                                    </li>
                                </ul>
                                <div className="d-flex">
                                    <a className='projects' href="javascript:void(0)">EQUINOX <br /> Project</a>
                                    <a className='visitWebSite' href="javascript:void(0)">Design by<br />U-DESIGN.SU</a>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} className='text-light ms-auto mobileMargin'>
                        <div className="footerUl contactUl">
                            <h5>Contact</h5>
                            <ul>
                                <li>
                                    <p>Get the latest update scores.</p>
                                    <a className='discordServer mb-4' href="javascript:void(0)">Discord Server</a>
                                </li>
                                <li>
                                    <p>Got a burning qustion?</p>
                                    <a className='discordServer' href="javascript:void(0)">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer