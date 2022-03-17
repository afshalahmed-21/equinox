import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import RegistrationSlider from '../Componentes/sliders/RegistrationSlider/RegistrationSlider'
import ResetPasswordTab from '../Componentes/tabs/RegistrationTabs/RegistrationTabsComponents/ResetPasswordTab'

const ResetPassword = () => {
    return (
        <div className='mainBackground'>
            <Row>
                <Col lg={6}>
                    <RegistrationSlider />
                </Col>
                <Col lg={4} className='m-auto'>
                    <ResetPasswordTab />
                    <small className='d-block text-center mt-4'>
                        <Link className='text-muted' to="">Do you have any questions? Contact us.</Link>
                    </small>
                </Col>
            </Row>
        </div>
    )
}

export default ResetPassword