import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import RegistrationSlider from '../Componentes/AuthPagesLayout/Sliders/RegistrationSlider/RegistrationSlider'
import TabsForm from '../Componentes/AuthPagesLayout/Tabs/RegistrationTabs/TabsForm'

const Registration = () => {
  return (
    <div className='mainBackground'>
      <Container fluid className='pe-0 ps-0'>
        <Row>
          <Col lg={6} className='p-0'>
            <div className='RegistrationSliderMainBg'>
              <RegistrationSlider />
            </div>
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