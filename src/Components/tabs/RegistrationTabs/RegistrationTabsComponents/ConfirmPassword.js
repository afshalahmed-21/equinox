import React, { useState } from 'react'
import { FormControl, InputGroup } from 'react-bootstrap'
import { faEye } from '@fortawesome/fontawesome-free-regular';
import { faEyeSlash } from '@fortawesome/fontawesome-free-solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import lockIcon from '../../../../Assets/RegistrationPageImages/icon/bx-lock.png'

const ConfirmPassword = () => {

    const [ConfirmPasswordShown, setConfirmPasswordShown] = useState(false);
    const toggleConfirmPassword = () => {
        setConfirmPasswordShown(!ConfirmPasswordShown);
    };

    return (
        <InputGroup className="mb-3">
            <InputGroup.Text>
                <img className='w-100 ps-4' src={lockIcon} alt='lockIcon' />
            </InputGroup.Text>
            <FormControl
                placeholder="Confirm Password"
                type={ConfirmPasswordShown ? "text" : "password"}
            />
            <InputGroup.Text id="basic-addon2" onClick={toggleConfirmPassword}>
                <FontAwesomeIcon className='pe-4' icon={!ConfirmPasswordShown ? faEye : faEyeSlash} />
            </InputGroup.Text>
        </InputGroup>
    )
}

export default ConfirmPassword