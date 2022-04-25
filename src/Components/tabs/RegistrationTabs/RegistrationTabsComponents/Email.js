import { faArrowRight, faTimes } from '@fortawesome/fontawesome-free-solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Form, FormControl, InputGroup } from 'react-bootstrap'
import mailIcon from '../../../../Assets/RegistrationPageImages/icon/bx-envelope.png'

const Email = () => {
    return (
        <>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon2">
                    <img className='w-100 ps-4' src={mailIcon} alt='mailIcon' />
                </InputGroup.Text>
                <FormControl
                    placeholder="E-Mail"
                    type="email"
                />
                <InputGroup.Text id="basic-addon2">
                    <FontAwesomeIcon className='text-danger' icon={faTimes}/>
                </InputGroup.Text>
            </InputGroup>
        </>
    )
}

export default Email