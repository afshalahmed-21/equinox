import React from 'react'
import { Col, Dropdown, DropdownButton } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import profilePhoto from '../../../Assets/Dashboard/profilePhoto.png'
import homeIcon from '../../../Assets/Dashboard/Icons/home.png'
import analyticsIcon from '../../../Assets/Dashboard/Icons/analytics.png'
import uploadIcon from '../../../Assets/Dashboard/Icons/upload.png'
import settings from '../../../Assets/Dashboard/Icons/settings.png'
import people from '../../../Assets/Dashboard/Icons/people.png'
import Mic from '../../../Assets/Dashboard/Icons/bx-microphone.png'
import Logout from '../../../Assets/Dashboard/Icons/logout.png'
import './sideBar.css'

const SideMenu = () => {
    return (
        <div className='sideBar p-5 text-center'>
            <div className="logoHeading mb-4 text-light">
                <h3>EQUINOX</h3>
            </div>
            <Col lg={3} className='col-3 m-auto text-center mb-2'>
                <img className='w-100' src={profilePhoto} alt='profilePhoto' />
            </Col>

            <DropdownButton
                id="dropdown-button-dark-example2"
                menuVariant="dark"
                title="U_Design13"
                className='profileCustamization'
            >
                <Dropdown.Item href="#/action-1" active>
                    Action
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
            </DropdownButton>

            <button type="button" class="btn btn-success">Exploring</button>

            <div className="ThisMonthsUploads mt-3">
                <div className="d-flex justify-content-between">
                    <h6 className='text-muted'>This Months uploads</h6>
                    <span className='text-warning'>10/100</span>
                </div>

                <button type="button" class="btn btn-warning w-100 mt-3">Upload Screenshot</button>
                <div className="menuList mt-3 text-start">
                    <ul>
                        <h6 className='text-muted mb-3'>Dashboard</h6>
                        <li>
                            <Link to='/'><img src={homeIcon} alt="homeIcon" />  Home</Link>
                        </li>
                    </ul>
                    <ul>
                        <h6 className='text-muted mb-3'>Categories</h6>
                        <li>
                            <Link to='/'><img src={analyticsIcon} alt="homeIcon" />  Analytics</Link>
                        </li>
                        <li>
                            <Link to='/'><img src={uploadIcon} alt="homeIcon" />  Uploads</Link>
                        </li>
                        <li>
                            <Link to='/'><img src={settings} alt="homeIcon" />  Settings</Link>
                        </li>
                        <li>
                            <Link to='/'><img src={people} alt="homeIcon" />  Team</Link>
                        </li>
                    </ul>
                    <ul>
                        <h6 className='text-muted mb-3'>Community</h6>
                        <li>
                            <Link to='/'><img src={Mic} alt="homeIcon" />  Contact Us</Link>
                        </li>
                    </ul>
                    <ul>
                        <h6 className='text-muted mb-3'>Game</h6>
                        <li>
                            <DropdownButton
                                id="dropdown-button-dark-example2"
                                menuVariant=""
                                title="Valorant"
                                className='game-settings-dropdown'
                            >
                                <Dropdown.Item href="#/action-1" active>
                                    Valorant
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Dota 2</Dropdown.Item>
                            </DropdownButton>
                        </li>
                    </ul>
                    <ul>
                        <li className=''>
                            <Link to='/'><img src={Logout} alt="homeIcon" />                                Log Out</Link>

                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default SideMenu