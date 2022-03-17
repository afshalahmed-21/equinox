import React from 'react'
import { Form, FormControl, InputGroup } from 'react-bootstrap'
import userIcon from '../../../../Assets/RegistrationPageImages/icon/bx-user.png'

const UserName = () => {
    return (
        <div>
            <InputGroup className="mb-3">
                <InputGroup.Text>
                    <img className='w-100 ps-4' src={userIcon} alt='userIcon' />
                </InputGroup.Text>
                <FormControl
                    placeholder="Login"
                    type="text"
                />
            </InputGroup>
        </div>
    )
}

export default UserName