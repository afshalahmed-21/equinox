import { faEye } from '@fortawesome/fontawesome-free-regular'
import { faEyeSlash } from '@fortawesome/fontawesome-free-solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Form, FormControl, InputGroup } from 'react-bootstrap'
import lockIcon from '../../../../Assets/RegistrationPageImages/icon/bx-lock.png'

const Password = () => {

    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };

    return (
        <>
            <InputGroup className="mb-3">
                <InputGroup.Text>
                    <img className='w-100 ps-4' src={lockIcon} alt='lockIcon' />
                </InputGroup.Text>
                <FormControl
                    placeholder="Password"
                    type={passwordShown ? "text" : "password"}
                />
                <InputGroup.Text id="basic-addon2" onClick={togglePassword}>
                    <FontAwesomeIcon className='pe-4' icon={!passwordShown ? faEye : faEyeSlash} />
                </InputGroup.Text>
            </InputGroup>
        </>
    )
}

export default Password