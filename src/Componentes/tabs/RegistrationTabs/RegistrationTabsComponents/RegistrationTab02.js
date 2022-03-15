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
            <Form>
                <UserName />
                <Password />
                <div className="d-flex justify-content-between mb-3">
                    <div className="form-check">
                        <Form.Label className="form-check-label text-light ms-2 mb-0" for="flexCheckDefault" htmlFor="inputPassword5">Remember me</Form.Label>
                        <Form.Control
                            className="form-check-input rememberMe"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                        />
                    </div>
                    <small>
                        <Link className='text-muted' to="/forgot-password">
                            Forgot password?
                        </Link>
                    </small>
                </div>
                <Button className='primary w-100 text-center mb-3' type="submit">
                    Login <FontAwesomeIcon className='ms-2' icon={faArrowRight} />
                </Button>
            </Form>
        </div>
    )
}

export default RegistrationTab02