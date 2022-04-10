import { faArrowRight } from '@fortawesome/fontawesome-free-solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap'
import Password from './Password';
import UserName from './UserName';
import mailIcon from '../.././../../../Assets/RegistrationPageImages/icon/bx-envelope.png'
import ConfirmPassword from './ConfirmPassword';


const RegistrationTab01 = () => {


    return (
        <div>
            <Form className='form'>
                <UserName />
                <Password />
                <ConfirmPassword />
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon2" className='leftIcon'>
                        <img className='w-100' src={mailIcon} alt='mailIcon' />
                    </InputGroup.Text>
                    <FormControl
                        placeholder="E-Mail"
                        type="email"
                    />
                </InputGroup>

                <small className='mb-5 mt-5 d-block text-muted'>By creating an account, you agree to Charts
                    <a className='text-light' href="javascript:void(0)"> Terms of Use</a> &
                    <a className='text-light' href="javascript:void(0)"> Privacy Policy</a>
                </small>

                <Button className='primary w-100 text-center mb-3' type="submit">
                    Register <FontAwesomeIcon className='ms-2' icon={faArrowRight} />
                </Button>

            </Form>
        </div>
    )
}

export default RegistrationTab01