import { faEye } from '@fortawesome/fontawesome-free-regular';
import { faArrowRight, faEnvelope, faEyeSlash, faLock } from '@fortawesome/fontawesome-free-solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap'
import Password from './Password';
import UserName from './UserName';

const RegistrationTab01 = () => {
    const [ConfirmPasswordShown, setConfirmPasswordShown] = useState(false);
    const toggleConfirmPassword = () => {
        setConfirmPasswordShown(!ConfirmPasswordShown);
    };

    return (
        <div>
            <Form>
                
                <UserName />
                <Password />
                

                <InputGroup className="mb-3">
                    <InputGroup.Text>
                        <FontAwesomeIcon icon={faLock} />
                    </InputGroup.Text>
                    <FormControl
                        placeholder="Confirm Password"
                        type={ConfirmPasswordShown ? "text" : "password"}
                    />
                    <InputGroup.Text id="basic-addon2" onClick={toggleConfirmPassword}>
                        <FontAwesomeIcon icon={!ConfirmPasswordShown ? faEye : faEyeSlash} />
                    </InputGroup.Text>
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon2">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </InputGroup.Text>
                    <FormControl
                        placeholder="E-Mail"
                        type="email"
                    />
                </InputGroup>

                <small className='mb-3 d-block text-muted'>By creating an account, you agree to Charts
                    <a className='text-light' href="javascript:void(0)"> Terms of Use & Privacy Policy </a>
                </small>

                <Button className='primary w-100 text-center mb-3' type="submit">
                    Register <FontAwesomeIcon className='ms-2' icon={faArrowRight} />
                </Button>

            </Form>
        </div>
    )
}

export default RegistrationTab01