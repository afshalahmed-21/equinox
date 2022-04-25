import { faArrowRight } from '@fortawesome/fontawesome-free-solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import UserName from './UserName'
import Password from './Password'
import ConfirmPassword from './ConfirmPassword'

const ResetPasswordTab = () => {
    return (
        <div className='formTabs'>
            <div className='text-center text-light'>
                <h2>Reset Password</h2>
                <small className='text-muted mt-4 mb-5 d-block'>
                    This form is used to change your password
                </small>
                <Form>
                    <UserName />
                    <Password />
                    <ConfirmPassword />
                    <Button className='primary w-100 text-center mb-3 p-2' type="submit">
                        Reset Password <FontAwesomeIcon className='ms-2' icon={faArrowRight} />
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default ResetPasswordTab