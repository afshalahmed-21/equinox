import React from 'react'
import { Col, Row } from 'react-bootstrap'
import SideMenu from '../Componentes/CommonComponents/SideMenu/SideMenu'

const WithSideMenu = ({ children }) => {
  return (
    <Row>
      <Col lg={3}>
        <SideMenu />
      </Col>
      <Col lg={9}>
        {children}
      </Col>
    </Row>
  )
}

export default WithSideMenu