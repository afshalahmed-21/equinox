import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import RegistrationSlider from '../Componentes/sliders/RegistrationSlider/RegistrationSlider'
import TabsForm from '../Componentes/tabs/RegistrationTabs/TabsForm'

const Registration = () => {
  return (
    <div className='mainBackground'>
        <Container fluid className='pe-0 ps-0'>
            <Row>
                <Col lg={6}>
                    <RegistrationSlider />
                </Col>
                <Col lg={4} className='m-auto'>
                  <TabsForm />
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Registration