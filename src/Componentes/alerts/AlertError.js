import { faEnvelope } from '@fortawesome/fontawesome-free-regular'
import { faTimes } from '@fortawesome/fontawesome-free-solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const AlertError = () => {
  return (
    <div className='errorAlert'>
        <FontAwesomeIcon className='ms-2' icon={faEnvelope} />
        <p className='text-muted mb-0'>E-Mail</p>
        <small className='text-danger'>The email field is required.</small>
        <FontAwesomeIcon className='ms-2 text-danger' icon={faTimes} />
    </div>
    
  )
}

export default AlertError