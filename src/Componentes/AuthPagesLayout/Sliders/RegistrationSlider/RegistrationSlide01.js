import React from 'react'
import slideImg01 from '../../../../Assets/RegistrationPageImages/registrationSlide001.png'


const RegistrationSlide01 = () => {
    return (
        <div className='registrationSlide01 position-relative'>
            <img className='slideImg h-100' src={slideImg01} alt="slideImg01" />
            <div className="verticallyCenter">
                <h3>
                    All in one. Get access for free!
                </h3>
                <p>
                    We is a unique analytical agency collecting all information about esports, streaming and providing actual fact data.
                </p>
            </div>
        </div>
    )
}

export default RegistrationSlide01