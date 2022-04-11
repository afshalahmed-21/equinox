import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import SideMenu from '../CommonComponents/SideMenu/SideMenu'
import SettingForm from '../CommonComponents/SideMenu/SettingForm'
const GameSetting = () => {
    return (
        <>
            <Row>
                <Col lg={3}>
                    <SideMenu />
                </Col>
                <Col lg={9}>
                    <div className="me-lg-4">
                        <Row>
                            <div className="hero-settings">
                                <Container>
                                    <div className="context-text ms-lg-5 ps-lg-5">
                                        <h2>Game Settings</h2>
                                        <p>
                                            Сonfigurare profile opus est tibi ut
                                        </p>
                                    </div>
                                </Container>
                            </div>
                        </Row>
                        <Row>
                            <SettingForm />
                        </Row>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default GameSetting