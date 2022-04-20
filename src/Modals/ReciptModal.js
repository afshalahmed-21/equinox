import React from 'react'
import { Modal, Container, Row, Col, Button } from 'react-bootstrap';
import './modal.css'
import img from '../Assets/successmodal/Component 1.png'
const ReciptModal = ({ handleClose }) => {
  return (
    <div className='recipt-modal'>
      <Modal show={true} onHide={handleClose} size={"lg"}>

        <Modal.Body className='text-light'>
          <Container>
            <Row className="align-items-center">
              <Col>
                <img src={img} />
              </Col>
              <Col>
                <h4>You have successfully improved your account</h4>
              </Col>
            </Row>
            <Row>
              <Col lg={8} className="m-auto mt-5">
                <div className="border-top border-bottom border-muted py-4 p-3">
                  <div className="d-flex justify-content-between my-3 recipts-info">
                    <span>
                      Status
                    </span>
                    <span className='text-warning'>
                      Profeccional
                    </span>
                  </div>
                  <div className="d-flex justify-content-between my-3 recipts-info">
                    <span>
                      Info payment
                    </span>
                    <span>
                      55, 00 $
                    </span>
                  </div>
                  <div className="d-flex justify-content-between my-3 recipts-info">
                    <span>
                      Paid before
                    </span>
                    <span>
                      14.12.2022
                    </span>
                  </div>
                  <div className="d-flex justify-content-between my-3 recipts-info">
                    <span>
                      Receipt number
                    </span>
                    <span>
                      #49112
                    </span>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={4} className="m-auto">
                <p className='text-center text-muted my-5'>
                  Take a screenshot , if you suddenly have problems, it will help you solve them fasters
                </p>
              </Col>
            </Row>
            <div className="text-center mb-5">
              <Button variant="transparent" className="go-back rounded border-0">Go Back</Button>
            </div>
          </Container>

        </Modal.Body>
      </Modal>
    </div>
  )
}

export default ReciptModal