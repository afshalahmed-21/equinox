import React from 'react'
import registrationSlide02 from '../../../../Assets/RegistrationPageImages/registrationSlide002.png'

const RegistrationSlide02 = () => {
    return (
        <div className='registrationSlide02 position-relative'>
            <img className='slideImg h-100' src={registrationSlide02} alt="registrationSlide02" />
            <div className="verticallyCenter02">
                <h3>
                    Your data is under our protection
                </h3>
                <p>
                    Take care of your security, so all data is securely encrypted and under reliable protection
                </p>
            </div>
        </div>
    )
}

export default RegistrationSlide02