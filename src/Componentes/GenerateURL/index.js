import React from 'react'
import { Card, Button } from 'react-bootstrap'
import uploadicon from '../../Assets/Dashboard/Icons/upload-icon.png'
const GenerateURL = () => {
  return (

    <Card className="bg-dark text-light py-3 px-2">
      <Card.Body>
        <Card.Title className='my-4'>Generate URL</Card.Title>
        <Card.Text className="mb-4">
          PSVP URL
        </Card.Text>
        <div class="input-group flex-nowrap">
          <span class="input-group-text" id="addon-wrapping">
            <img src={uploadicon} />
          </span>
          <input type="url" class="form-control" placeholder="http://rsvp.wdu-design.su" aria-label="http://rsvp.wdu-design.su" aria-describedby="addon-wrapping" />
          <span class="input-group-text bg-primary" id="addon-wrapping-g-url">
            Generate
          </span>
        </div>
      </Card.Body>
    </Card>
  )
}

export default GenerateURL