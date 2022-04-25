import { faFolderPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Container, Row, Button, DropdownButton, Dropdown, Col } from 'react-bootstrap';
import game_icon from '../../Assets/Dashboard/Icons/game_icon.png'
const TranslateStats = () => {
  return (
    <div className="container">
      <Row>
        <div className="hero-upload-maps">
          <Container>
            <div className="context-text ms-lg-5 ps-lg-5">
              <h2>Translate scores to stats</h2>
              <p>
                lorem ipsum test text
              </p>
              <div className="row">
                <Col lg={3} md={6} className="position-relative main-c">
                  <img src={game_icon} className="position-absolute m-0 icon-image" alt="" sizes="" srcset="" />
                  <DropdownButton
                    id="dropdown-button-dark-example2"
                    menuVariant="light"
                    title="pubg"
                    className='bg-dark rounded score-stats'
                  >
                    <Dropdown.Item href="#/action-1" active>
                      Action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
                  </DropdownButton>
                </Col>
                <Col lg={3}>
                  <Button variant='transparent' className='text-light'>
                    Create New Map
                    <FontAwesomeIcon icon="fa-solid fa-plus" className=" m-0 mx-2 text-muted border border-muted p-1" style={{ fontSize: '8px' }} />
                  </Button>
                </Col>
              </div>
            </div>
          </Container>
        </div>
      </Row>
    </div>
  )
}

export default TranslateStats