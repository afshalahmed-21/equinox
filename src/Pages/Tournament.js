import React from 'react'
import { Col, Container, FormControl, FormLabel, Row } from 'react-bootstrap'
import FormInput from './../Components/FormInput/index';
import gameIcon from '../Assets/Dashboard/Icons/bx-joystick.png'
import map from '../Assets/Dashboard/Icons/bx-map-alt.png'
import GenerateURL from './../Components/GenerateURL/index';
import clock from '../Assets/Dashboard/Icons/clock.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Report from '../Assets/Dashboard/image 9.png'
import './tournamet.css';
import { faEdit, faTimes } from '@fortawesome/fontawesome-free-solid';
import WithSideMenu from '../Wrapper/WithSideMenu';
const Tournament = () => {
  return (
    <WithSideMenu>
      <Container fluid>
        <Row>
          <div className="hero-tournament">
            <div className="  ms-lg-5 ps-lg-5">
              <h2>Tournament</h2>
              <p>
                Game tournament settings are already here
              </p>
            </div>
          </div>
        </Row>
        <Row className='' style={{ backgroundColor: '#191C26' }}>

          <Col lg={5} className="m-auto">
            <h2 className='text-uppercase text-light my-4'>Tournaments</h2>
            <Row>
              <Col>
                <FormInput type="text" label="Tournament Name" placeholder={"GameProWatc"} icon={gameIcon} />
              </Col>
            </Row>
            <Row>
              <Col lg={6}>
                <FormLabel className='text-muted'>
                  <small>Start Date</small>
                </FormLabel>
                <FormControl
                  className="mb-3 bg-light date-input"
                  placeholder="Start Date"
                  type="date"
                />
              </Col>
              <Col lg={6}>
                <FormLabel className='text-muted'>
                  <small>End Date</small>
                </FormLabel>
                <FormControl
                  className="mb-3 bg-light date-input"
                  placeholder="End Date"
                  type="date"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <FormInput type="time" label="Time" placeholder={"0:34 EST"} icon={clock} />
              </Col>
            </Row>
            <Row>
              <Col>
                <FormInput as="textarea" label="Additional Information" placeholder={"The tournament will be held at the specified time, so the whole team should be in place at exactly 10:00 in the discord channel"} className="ad-info" rows={"4"} />
              </Col>
            </Row>
            <button className="btn btn-secondary mb-4 mt-3">
              Save changes
            </button>
            <div className="my-4">
              <GenerateURL />
            </div>
          </Col>
          <Col lg={5} className="m-auto">
            <h2 className='text-uppercase text-light my-4'>Maps</h2>

            <FormInput type="text" label="Map Name" placeholder={"FRACTURE"} icon={map} />
            <Row className='text-light'>
              <Col lg={6}>
                Map List
              </Col>
              <Col lg={6}>
                <div className='d-flex justify-content-end align-items-center'>
                  <span>
                    Add Maps
                  </span>
                  <FontAwesomeIcon icon="fa-solid fa-plus" className="mx-2 border border-light p-1" />
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div class="input-group mt-3">
                  <input type="text" placeholder='Map #1' class="form-control" aria-label="" />
                  <span class="input-group-text">
                    <FontAwesomeIcon icon={faEdit} className='text-light' />
                  </span>
                  <span class="input-group-text">
                    <FontAwesomeIcon icon={faTimes} className='text-light' />

                  </span>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div class="input-group mt-3">
                  <input type="text" placeholder='Map #2' class="form-control" aria-label="" />
                  <span class="input-group-text">
                    <FontAwesomeIcon icon={faEdit} className='text-light' />
                  </span>
                  <span class="input-group-text">
                    <FontAwesomeIcon icon={faTimes} className='text-light' />

                  </span>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div class="input-group mt-3">
                  <input type="text" placeholder='Map #3' class="form-control" aria-label="" />
                  <span class="input-group-text">
                    <FontAwesomeIcon icon={faEdit} className='text-light' />
                  </span>
                  <span class="input-group-text">
                    <FontAwesomeIcon icon={faTimes} className='text-light' />

                  </span>
                </div>
              </Col>
            </Row>
            <Row>
              <h2 className='text-light mt-5 mb-4'>Ranking</h2>
              <img src={Report} alt="" className=" w-100 ranking-image" />
            </Row>
          </Col>
        </Row>
      </Container>

    </WithSideMenu>)
}

export default Tournament