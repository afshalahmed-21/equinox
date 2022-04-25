import { faArrowRight } from '@fortawesome/fontawesome-free-solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from 'react-bootstrap'
import React from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import Password from './Password'
import UserName from './UserName'
import { Link } from 'react-router-dom'

const RegistrationTab02 = () => {

    return (
        <div>
            <Form className='form'>
                <UserName />
                <Password />
                <div className="d-flex justify-content-end mb-3 px-3">
                    <small>
                        <Link className='text-muted text-end' to="/forgot-password">
                            Forgot password?
                        </Link>
                    </small>
                </div>
                <Button className='primary w-100 text-center mb-3' type="submit">
                    Login <FontAwesomeIcon className='ms-4 fa-sm' icon={faArrowRight} />
                </Button>
            </Form>
        </div>
    )
}

export default RegistrationTab02