import React from 'react'
import { Col, Container } from 'react-bootstrap'
import { Zoom } from 'react-reveal'
import HomePageSection02Slider from '../Sliders/HomePageSlide/HomePageSection02Slider'

const HomeSection02 = () => {
    return (
        <div id='HomeSection02'>
            <div className='HomeSection02 pt-5'>
                <Container>
                    <Col lg={4}>
                        <div className="WideRange">
                            <h2><Zoom left cascade>Wide range</Zoom></h2>
                            <p><Zoom right cascade>More than 20 games and 12,000 analytics</Zoom></p>
                        </div>
                    </Col>
                </Container>
                <Container fluid>
                    <HomePageSection02Slider />
                </Container>
            </div>
        </div>
    )
}

export default HomeSection02