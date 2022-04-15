import React from 'react'
import { Card } from 'react-bootstrap'
import uploadicon from '../../Assets/Dashboard/Icons/upload-icon.png'
const GenerateURL = () => {
  return (

    <Card className="text-light px-2" style={{ backgroundColor: '#242633' }}>
      <Card.Body>
        <Card.Title className='my-4'>Generate URL</Card.Title>
        <Card.Text className="mb-4">
          PSVP URL
        </Card.Text>
        <div class="input-group flex-nowrap "  >
          <span class="input-group-text" id="addon-wrapping">
            <img src={uploadicon} />
          </span>
          <input type="url" class="" placeholder="http://rsvp.wdu-design.su" aria-label="http://rsvp.wdu-design.su" aria-describedby="addon-wrapping" />
          <span class="input-group-text bg-primary" id="addon-wrapping-g-url">
            Generate
          </span>
        </div>
      </Card.Body>
    </Card>
  )
}

export default GenerateURL