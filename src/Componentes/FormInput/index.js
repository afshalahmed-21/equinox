import React from 'react'
import { FormControl, FormLabel, InputGroup } from 'react-bootstrap'

const FormInput = ({ label, icon, placeholder, type }) => {
  return (
    <div>
      <FormLabel className='text-muted'>
        <small>{label}</small>
      </FormLabel>
      <InputGroup className="my-3">
        <InputGroup.Text id="basic-addon2" className='leftIcon'>
          <img className='w-100' src={icon} alt='icon' />

        </InputGroup.Text>
        <FormControl
          placeholder={placeholder}
          type={`${type} ?? text`}
        />
      </InputGroup>
    </div>
  )
}

export default FormInput