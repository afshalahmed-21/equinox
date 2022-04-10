import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import './HomePageCss.css'

const SingUpNowSection = () => {
    return (
        <div className='SingUpNowSection'>
            <Row>
                <div className="SingUpNowSectionContent">
                    <Col lg={5}>
                        <h5>
                            Enjoy thee deep analytics and
                            share with your team to understand your
                            focus areas compare against other Pro
                            teams as well
                        </h5>
                        <Button className='SignUpNow mt-4 w-50'>Sign Up Now</Button>
                    </Col>
                </div>
            </Row>
        </div>
    )
}

export default SingUpNowSection