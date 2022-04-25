import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Zoom } from 'react-reveal'
import homePageImage02 from '../../Assets/HomePageImages/homePageImage02.png'
import FavorableRatesCard from '../CommonComponents/FavorableRates/FavorableRatesCard'
import SingUpNowSection from './SingUpNowSection'

const HomeSection03 = () => {
    return (
        <div className='HomeSection03'>
            <Container>
                <Row>
                    <Col lg={4}>
                        <div className="WideRange">
                            <h2><Zoom left cascade>Favorable rates</Zoom></h2>
                            <p>
                                Proces start at
                                $2/Month. Free Tier <br /> also available
                            </p>
                        </div>
                    </Col>
                    <Col lg={8} className='position-relative'>
                        <img className='homePageImage02 w-100' src={homePageImage02} alt="homePageImage02" />
                    </Col>
                </Row>
                <FavorableRatesCard />
            </Container>
            <Container>
                <SingUpNowSection/>
            </Container>
        </div>
    )
}

export default HomeSection03