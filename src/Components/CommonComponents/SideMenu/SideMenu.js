import React, { useState } from 'react'
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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Logo from '../../../Assets/logo.png'
import { useRef } from 'react/cjs/react.development'
import EditProfile from '../../../Modals/EditProfile'
const SideMenu = () => {
    const { innerWidth: width } = window
    const [show, setShow] = useState(false)
    const sideBarRef = useRef()
    const toggleMenu = () => {
        sideBarRef.current.classList.toggle('d-none')
    }
    const handleClose = () => {
        setShow(false)
    }
    const handleOpen = () => {
        setShow(true)
    }
    return (
        <>
            <div className={`p-2 bg-dark border-bottom border-dark shadow mb-1 w-100 toggler ${width < 992 ? "" : 'd-none'}`}>
                <div className="d-flex justify-content-between align-items-center w-100">
                    <img src={Logo} alt="" />
                    <FontAwesomeIcon icon="fa-solid fa-bars" color="#fff" onClick={toggleMenu} />
                </div>
            </div>
            <div className={`sideBar p-5 text-center ${width < 992 ? "d-none" : ''}`} ref={sideBarRef}>
                <div className="logoHeading mb-4 text-light">
                    <h3>EQUINOX</h3>
                </div>
                <Col lg={3} className='col-3 m-auto text-center mb-2' >
                    <img className='w-100 cursor-pointer' src={profilePhoto} alt='profilePhoto' onClick={handleOpen} />
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
            <EditProfile show={show} handleClose={handleClose} />
        </>
    )
}

export default SideMenu