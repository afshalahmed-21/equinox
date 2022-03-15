import { faArrowRight } from '@fortawesome/fontawesome-free-solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AlertError from '../../../alerts/AlertError'

const ForgotPasswordTab = () => {
    return (
        <div className='formTabs'>
            <div className='text-center text-light'>
                <h2>Forgot password?</h2>
                <small className='text-muted mt-4 d-block'>
                    Enter the email address you used when you joined and we’ll send you instructions to reset your password.
                </small>
                <AlertError />
                <Button className='primary w-100 text-center mb-3 p-2' type="submit">
                    Send reset instruction <FontAwesomeIcon className='ms-2' icon={faArrowRight} />
                </Button>
                <Link to="/" className='secondary w-100 text-center mb-3 p-2' type="submit">
                    Back to Sign in
                </Link>
            </div>
        </div>
    )
}

export default ForgotPasswordTab