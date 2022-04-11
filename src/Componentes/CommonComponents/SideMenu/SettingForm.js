import React from 'react'
import { Col, Container, FormControl, FormLabel, InputGroup, Row } from 'react-bootstrap'
import mailIcon from '../../../Assets/RegistrationPageImages/icon/bx-envelope.png'
import userIcon from '../../../Assets/RegistrationPageImages/icon/bx-user.png'
import GameID from '../../../Assets/Dashboard/Icons/bx-customize.png'
import locationIcon from '../../../Assets/Dashboard/Icons/location.png'
import Password from '../../tabs/RegistrationTabs/RegistrationTabsComponents/Password'
const SettingForm = () => {
  return (
    <Container>
      <div className="ms-lg-5 ps-lg-5 mt-5 setting-from">
        <Row>
          <Col lg={5} className="">
            <h5 className='text-light'>INFO</h5>
            <div className="row">
              <div className="col-lg-12">
                <FormLabel className='text-muted'>
                  <small>E-Mail</small>
                </FormLabel>
                <InputGroup className="my-3">
                  <InputGroup.Text id="basic-addon2" className='leftIcon'>
                    <img className='w-100' src={mailIcon} alt='mailIcon' />

                  </InputGroup.Text>
                  <FormControl
                    placeholder="E-Mail"
                    type="email"
                  />
                </InputGroup>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <FormLabel className='text-muted'>
                  <small>Login</small>
                </FormLabel>
                <InputGroup className="my-3">
                  <InputGroup.Text className='leftIcon'>
                    <img className='w-100' src={userIcon} alt='userIcon' />
                  </InputGroup.Text>
                  <FormControl
                    placeholder="Login"
                    type="text"
                  />
                </InputGroup>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <FormLabel className='text-muted'>
                  <small>Country</small>
                </FormLabel>
                <InputGroup className="my-3">
                  <InputGroup.Text className='leftIcon'>
                    <img className='w-100' src={locationIcon} alt='userIcon' />
                  </InputGroup.Text>
                  <select className="form-select text-muted ps-5 ms-4 game-setting-from-country-select" aria-label="Default select example">
                    <option selected>Select Country</option>
                    <option value="Singapore">Singapore</option>
                  </select>
                </InputGroup>
              </div>
            </div>
            <div className="row">
              <Password isLabeledInput={true} />
            </div>
            <button className="btn btn-secondary my-4">
              Save changes
            </button>
          </Col>
          <Col lg={5} className="">
            <h5 className='text-light'>
              GAME ID
            </h5>
            <div className="row">
              <div className="col-lg-12">
                <FormLabel className='text-muted'>
                  <small>In-Game Name</small>
                </FormLabel>
                <InputGroup className="my-3">
                  <InputGroup.Text className='leftIcon'>
                    <img className='w-100' src={userIcon} alt='userIcon' />
                  </InputGroup.Text>
                  <FormControl
                    placeholder="Game Name"
                    type="text"
                  />
                </InputGroup>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <FormLabel className='text-muted'>
                  <small>In-Game Name</small>
                </FormLabel>
                <InputGroup className="my-3">
                  <InputGroup.Text className='leftIcon'>
                    <img className='w-100' src={GameID} alt='userIcon' />
                  </InputGroup.Text>
                  <FormControl
                    placeholder="Game ID"
                    type="text"
                  />
                </InputGroup>
              </div>
            </div>
            <button className="btn btn-secondary my-4">
              Save changes
            </button>
          </Col>
        </Row>
      </div>
    </Container>
  )
}

export default SettingForm