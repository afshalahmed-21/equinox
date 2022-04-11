import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SideMenu from './../Componentes/CommonComponents/SideMenu/SideMenu';
import FormInput from './../Componentes/FormInput/index';
import gameIcon from '../Assets/Dashboard/Icons/bx-joystick.png'
import map from '../Assets/Dashboard/Icons/bx-map-alt.png'
import GenerateURL from './../Componentes/GenerateURL/index';
const Tournament = () => {
  return (
    <Row>
      <Col lg={3}>
        <SideMenu />
      </Col>
      <Col lg={9}>
        <div className="me-lg-4">
          <Row>
            <div className="hero-tournament">
              <Container>
                <div className="context-text ms-lg-5 ps-lg-5">
                  <h2>Tournament</h2>
                  <p>
                    Game tournament settings are already here
                  </p>
                </div>
              </Container>
            </div>
          </Row>
          <div className="mt-5 setting-from">
            <Row>

              <Col lg={5} className="m-auto">
                <h2 className='text-uppercase text-light my-4'>Tournaments</h2>
                <FormInput type="text" label="Tournament Name" placeholder={"GameProWatc"} icon={gameIcon} />
                <GenerateURL />
              </Col>
              <Col lg={5} className="m-auto">
                <h2 className='text-uppercase text-light my-4'>Maps</h2>

                <FormInput type="text" label="Map Name" placeholder={"FRACTURE"} icon={map} />

              </Col>
            </Row>
          </div>
        </div>
      </Col>
    </Row>)
}

export default Tournament