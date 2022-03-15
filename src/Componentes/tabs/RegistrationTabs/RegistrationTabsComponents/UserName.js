import { faUserAlt } from '@fortawesome/fontawesome-free-solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { FormControl, InputGroup } from 'react-bootstrap'

const UserName = () => {
    return (
        <div>
            <InputGroup className="mb-3">
                <InputGroup.Text>
                    <FontAwesomeIcon icon={faUserAlt} />
                </InputGroup.Text>
                <FormControl
                    placeholder="Login"
                />
            </InputGroup>
        </div>
    )
}

export default UserName