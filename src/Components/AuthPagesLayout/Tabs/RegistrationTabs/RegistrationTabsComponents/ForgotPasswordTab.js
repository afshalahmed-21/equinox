import { faArrowRight } from '@fortawesome/fontawesome-free-solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Email from './Email'

const ForgotPasswordTab = () => {

    return (
        <div className='formTabs'>
            <div className='text-center text-light'>
                <h2>Forgot password?</h2>
                <small className='text-muted mt-4 mb-5 d-block'>
                    Enter the email address you used when you joined and we’ll send you instructions to reset your password.
                </small>
                <Form>
                    <Email />
                    <Button className='primary w-100 text-center mb-3 p-2' type="submit">
                        Send reset instruction <FontAwesomeIcon className='ms-2' icon={faArrowRight} />
                    </Button>
                    <Link to="/" className='secondary w-100 text-center mb-3 p-2 d-flex justify-content-center' type="submit">
                        Back to Sign in
                    </Link>
                </Form>
            </div>
        </div>
    )
}

export default ForgotPasswordTab