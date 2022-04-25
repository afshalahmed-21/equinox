import React from 'react'
import { FormControl, InputGroup } from 'react-bootstrap'
import userIcon from '../../../../../Assets/RegistrationPageImages/icon/bx-user.png'

const UserName = () => {
    return (
        <div>
            <InputGroup className="mb-3">
                <InputGroup.Text className='leftIcon'>
                    <img className='w-100' src={userIcon} alt='userIcon' />
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