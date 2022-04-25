import React from 'react'
import { Col, Row } from 'react-bootstrap'
import RegistrationSlider from '../Components/AuthPagesLayout/Sliders/RegistrationSlider/RegistrationSlider'
import ForgotPasswordTab from '../Components/AuthPagesLayout/Tabs/RegistrationTabs/RegistrationTabsComponents/ForgotPasswordTab'

const ForgotPassword = () => {
  return (
    <div className='mainBackground'>
      <Row>
        <Col lg={6}>
          <div className='RegistrationSliderMainBg'>
            <RegistrationSlider />
          </div>
        </Col>
        <Col lg={4} className='m-auto'>
          <ForgotPasswordTab />
          <small className='d-block text-center mt-4'>
            <a className='text-muted' href='javascript:void(0)'>Do you have any questions? Contact us.</a>
          </small>
        </Col>
      </Row>
    </div>
  )
}

export default ForgotPassword