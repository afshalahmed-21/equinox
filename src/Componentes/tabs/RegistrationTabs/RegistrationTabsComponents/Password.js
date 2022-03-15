import { faEye } from '@fortawesome/fontawesome-free-regular'
import { faEyeSlash, faLock } from '@fortawesome/fontawesome-free-solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { FormControl, InputGroup } from 'react-bootstrap'

const Password = () => {

    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };

    return (
        <>
            <InputGroup className="mb-3">
                <InputGroup.Text>
                    <FontAwesomeIcon icon={faLock} />
                </InputGroup.Text>
                <FormControl
                    placeholder="Password"
                    type={passwordShown ? "text" : "password"}
                />
                <InputGroup.Text id="basic-addon2" onClick={togglePassword}>
                    <FontAwesomeIcon icon={!passwordShown ? faEye : faEyeSlash} />
                </InputGroup.Text>
            </InputGroup>
        </>
    )
}

export default Password