import { Col, Container, FormControl, FormLabel, InputGroup, Modal, Row } from 'react-bootstrap'
import React from 'react'
import Cross from '../Assets/Dashboard/Icons/x.png'
import editProfilePhoto from '../Assets/Dashboard/edit-profile-pic.png'
import Check from '../Assets/Dashboard/Icons/check.png'
import './modal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/fontawesome-free-regular'
import bxUser from '../Assets/Dashboard/Icons/bx-user.png'
const EditProfile = ({ show, handleClose }) => {
  return (
    <div className='modal-edit-profile'>
      <Modal centered show={show} onHide={handleClose} size={"md"}>
        <Modal.Header className='border-0 d-flex justify-content-end m-0 p-0'>
          <span className='me-3 mt-3'>
            <img src={Cross} onClick={handleClose} className="cursor-pointer" />
          </span>
        </Modal.Header>
        <Modal.Body className="text-light m-0 p-0">
          <Container className="px-5">
            <div className="d-flex justify-content-between">
              <h4>Edit Profile</h4>
            </div>
            <Row className="align-items-center">
              <Col lg={3}>
                <img className='w-100 mt-4 editProfilePhoto' src={editProfilePhoto} alt='editProfilePhoto' />
              </Col>
              <Col lg={7} className="m-auto">
                <Row className="align-items-center mt-3">
                  <span className='p-0 text-muted'>AVATAR FRAME COLOR:</span>
                </Row>
                <Row className='mt-3 align-items-center'>
                  <div className='bg-orange-c d-flex justify-content-center align-items-center rounded-pill w-100 me-3'>
                    <img src={Check} className="" alt="" />
                  </div>
                  <div className='bg-pink-c d-flex justify-content-center align-items-center rounded-pill w-100 mx-3'>
                    <img src={Check} hidden className="" alt="" />
                  </div>
                  <div className='bg-blue-c d-flex justify-content-center align-items-center rounded-pill w-100 mx-3'>
                    <img src={Check} hidden className="" alt="" />
                  </div>
                  <div className='bg-purple-c d-flex justify-content-center align-items-center rounded-pill w-100 ms-3'>
                    <img src={Check} hidden className="" alt="" />
                  </div>
                </Row>
              </Col>
            </Row>
            <Row className="my-4">
              <FormLabel className='text-muted'>
                Name
              </FormLabel>
              <InputGroup className='mb-4'>

                <InputGroup.Text id="basic-addon2" onClick={() => { }}>
                  <img src={bxUser} className="px-lg-4 p-sm-0" />
                </InputGroup.Text>
                <input
                  placeholder="U_Design13"
                  value="U_Design13"
                  type={"text"}
                  className="text-start py-lg-3 w-50"
                  onChange={() => { }}
                />
                <InputGroup.Text id="basic-addon2" onClick={() => { }}>
                  <FontAwesomeIcon className="px-lg-4 p-sm-0" icon={faEdit} />
                </InputGroup.Text>
              </InputGroup>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default EditProfile