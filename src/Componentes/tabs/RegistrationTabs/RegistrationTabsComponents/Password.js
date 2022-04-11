import { faEye } from '@fortawesome/fontawesome-free-regular'
import { faEyeSlash } from '@fortawesome/fontawesome-free-solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Form, FormControl, InputGroup, FormLabel } from 'react-bootstrap'
import lockIcon from '../../../../Assets/RegistrationPageImages/icon/bx-lock.png'

const Password = ({ onChange, isLabeledInput }) => {

    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };

    return (
        <>
            {isLabeledInput ? <FormLabel className='text-muted'>
                <small>Password</small>
            </FormLabel> : ""}
            <InputGroup className="mb-3">
                <InputGroup.Text>
                    <img className='w-100 ps-4' src={lockIcon} alt='lockIcon' />
                </InputGroup.Text>
                <FormControl
                    placeholder="Password"
                    type={passwordShown ? "text" : "password"}
                    onChange={onChange}
                />
                <InputGroup.Text id="basic-addon2" onClick={togglePassword}>
                    <FontAwesomeIcon className='pe-4' icon={!passwordShown ? faEye : faEyeSlash} />
                </InputGroup.Text>
            </InputGroup>
        </>
    )
}

export default Password