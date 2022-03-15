import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import RegistrationTab01 from './RegistrationTabsComponents/RegistrationTab01';
import RegistrationTab02 from './RegistrationTabsComponents/RegistrationTab02';

const TabsForm = () => {

    return (
        <div className='formTabs'>
            <Tabs defaultActiveKey="SignUp" id="uncontrolled-tab-example" className="mb-3 ">
                <Tab eventKey="SignUp" title="Sign Up">
                    <RegistrationTab02 />
                </Tab>
                <Tab eventKey="CreateNewAccout" title="Create New Accout">
                    <RegistrationTab01 />
                </Tab>
            </Tabs>

            <small className='d-block text-center mt-4'>
                <Link className='text-muted' to="">Do you have any questions? Contact us.</Link>
            </small>
        </div>
    )
}

export default TabsForm