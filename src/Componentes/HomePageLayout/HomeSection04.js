import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import aboutImg from '../../Assets/HomePageImages/homePageImage04.png'

const HomeSection04 = () => {
  return (
    <div className='HomeSection04'>
      <Container>
        <Row>
          <Col lg={6}>
            <div className="WideRange WideRangeForMobile">
              <h2>About</h2>
              <p>
                We are a “Gamers Only” Singapore organization focused on advanced technologies to improve player performance.
              </p>
              <p>
                Born in  the heart of ASIA , where every 3d house has a kid trying to get better every day. We strive to enable them and reach their goal in the game of their choince.
              </p>
              <p>
                Most games do not help you track your perfomance and improvements over a period of time and that’s the problem we are trying to sovle.
              </p>
            </div>
          </Col>
          <Col lg={6}>
            <img className='aboutImg' src={aboutImg} alt="aboutImg" />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default HomeSection04