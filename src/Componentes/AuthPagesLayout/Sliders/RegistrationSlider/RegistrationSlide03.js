import React from 'react'
import registrationslide03 from '../../../../Assets/RegistrationPageImages/registrationSlide003.png'

const RegistrationSlide03 = () => {
    return (
        <div className='registrationSlide02 position-relative'>
            <img className='slideImg h-100' src={registrationslide03} alt="registrationSlide03" />
            <div className="verticallyCenter02">
                <h3>
                    Complete the registration in two clicks
                </h3>
                <p>
                    Fill out the form, it will take no more than 1 minute
                </p>
            </div>
        </div>
    )
}

export default RegistrationSlide03