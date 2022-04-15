import React from 'react'
import { Col, Row } from 'react-bootstrap'
import SideMenu from '../Componentes/CommonComponents/SideMenu/SideMenu'

const WithSideMenu = ({ children }) => {
  return (
    <div className="bg-dark">
      <Col lg={3}>
        <SideMenu />
      </Col>
      <Row>
        <Col lg={9} className="m-auto me-0">
          {children}
        </Col>
      </Row>
    </div>
  )
}

export default WithSideMenu