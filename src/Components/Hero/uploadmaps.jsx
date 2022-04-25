import { faFolderPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Container, Row, Button } from 'react-bootstrap';

const UploadMapsHero = () => {
  return (
    <div className="container">
      <Row>
        <div className="hero-upload-maps">
          <Container>
            <div className="context-text ms-lg-5 ps-lg-5">
              <h2>Upload Map</h2>
              <p>
                Track the statistics of the best players
              </p>
              <Button>
                <FontAwesomeIcon icon={faFolderPlus} className="mx-2" />
                Create New Map
              </Button>
            </div>
          </Container>
        </div>
      </Row>
    </div>
  )
}

export default UploadMapsHero