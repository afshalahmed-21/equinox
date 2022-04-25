import React from 'react'
import { Row, Container } from 'react-bootstrap'
import WithSideMenu from '../../Wrapper/WithSideMenu'
import SettingForm from '../CommonComponents/SideMenu/SettingForm'
const GameSetting = () => {
    return (
        <WithSideMenu>
            <Container fluid>
                <Row>
                    <div className="hero-settings">
                        <div className="context-text ms-lg-5 ps-lg-5">
                            <h2>Game Settings</h2>
                            <p>
                                Сonfigurare profile opus est tibi ut
                            </p>
                        </div>
                    </div>
                </Row>
                <Row className='bg-dark'>
                    <SettingForm />
                </Row>
            </Container>
            {/* <div className="container">
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
            </div> */}
        </WithSideMenu>
    )
}

export default GameSetting