import React from 'react'
import WithSideMenu from './../Wrapper/WithSideMenu';
import UploadMapsHero from './../Components/Hero/uploadmaps';
import { Container, Row, Card, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/fontawesome-free-solid'
import Img1 from '../Assets/UploadMaps/uploadimage1.png'
import Img2 from '../Assets/UploadMaps/uploadimage2.png'
import Img3 from '../Assets/UploadMaps/uploadimage3.png'
import upload from '../Assets/Dashboard/Icons/bxs-archive-in.png'
const UploadMaps = () => {
  return (
    <WithSideMenu>
      <UploadMapsHero />
      <Container fluid>
        <Row>
          <div className="bg-black">
            <div className="bg-dark rounded m-5">
              <div className="inner-container p-3">
                <div className="d-flex justify-content-start align-items-center">
                  <h4 className='m-0 p-0 text-light'> FRACTURE</h4>
                  <FontAwesomeIcon className='mx-3 fw-light' color="#989898" icon={faPenToSquare} />
                  <FontAwesomeIcon className='fw-light' color="#989898" icon={faTimes} />
                </div>
                <Row>
                  <Col lg={3}>
                    <Card className='upload-map-card position-relative'  >
                      <img src={Img1} className="w-100 p-0 m-0" />
                    </Card>
                    <p className='text-muted my-3'>#1 (GameStart 1/4)</p>
                  </Col>
                  <Col lg={3}>
                    <Card className='upload-map-card position-relative'>
                      <img src={Img2} className="w-100 p-0 m-0" />
                    </Card>
                    <p className='text-muted my-3'>#2 (GameStart 1/4)</p>

                  </Col>
                  <Col lg={3}>
                    <Card className='upload-map-card position-relative'>
                      <img src={Img3} className="w-100 p-0 m-0" />
                    </Card>
                    <p className='text-muted my-3'>#3 (GameStart 1/4)s</p>
                  </Col>
                  <Col lg={3}>
                    <Card className='position-relative upload-map-image'
                      onClick={() => {
                        document.getElementById('map-image-1').click()
                      }}
                    >
                      <Card.Title className="upload-images-title">
                        <img src={upload} className="mx-2" alt="" srcset="" />
                        <span className="text-light m-0 p-0">
                          Upload
                        </span>
                        <input type="file" name="" hidden id="map-image-1" />

                      </Card.Title>
                    </Card>
                  </Col>
                </Row>
              </div>
            </div>
            <div className="bg-dark rounded m-5">
              <div className="inner-container p-3">
                <div className="d-flex justify-content-start align-items-center">
                  <h4 className='m-0 p-0 text-light'> Map #2</h4>
                  <FontAwesomeIcon className='mx-3 fw-light' color="#989898" icon={faPenToSquare} />
                  <FontAwesomeIcon className='fw-light' color="#989898" icon={faTimes} />
                </div>
                <Row>
                  <Col lg={3}>
                    <Card className='upload-map-card position-relative'>
                      <Card.Title className="upload-images-title">
                        <div className='text-center'>
                          <FontAwesomeIcon color="#FFFAFA" icon={faCamera} />
                        </div>
                        <span>261x158</span>
                      </Card.Title>
                    </Card>
                  </Col>
                  <Col lg={3}>
                    <Card className='upload-map-card position-relative'>
                      <Card.Title className="upload-images-title">
                        <div className='text-center'>
                          <FontAwesomeIcon color="#FFFAFA" icon={faCamera} />
                        </div>
                        <span>261x158</span>
                      </Card.Title>
                    </Card>
                  </Col>
                  <Col lg={3}>
                    <Card className='upload-map-card position-relative'>
                      <Card.Title className="upload-images-title">
                        <div className='text-center'>
                          <FontAwesomeIcon color="#FFFAFA" icon={faCamera} /></div>
                        <span>261x158</span>
                      </Card.Title>
                    </Card>
                  </Col>
                  <Col lg={3}>
                    <Card className='position-relative upload-map-image'
                      onClick={() => {
                        document.getElementById('map-image-2').click()
                      }}
                    >
                      <Card.Title className="upload-images-title">
                        <img src={upload} className="mx-2" alt="" srcset="" />
                        <span className="text-light m-0 p-0">
                          Upload
                        </span>
                        <input type="file" name="" hidden id="map-image-2" />

                      </Card.Title>
                    </Card>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </WithSideMenu >
  )
}

export default UploadMaps