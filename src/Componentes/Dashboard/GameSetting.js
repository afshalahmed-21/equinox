import React from 'react'
import { Col, Row } from 'react-bootstrap'
import SideMenu from '../CommonComponents/SideMenu/SideMenu'

const GameSetting = () => {
    return (
        <>
            <Row>
                <Col lg={3}>
                    <SideMenu/>
                </Col>
            </Row>
        </>
    )
}

export default GameSetting