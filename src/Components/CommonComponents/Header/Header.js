import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import loginIcon from '../../../Assets/HeaderImgs/bxs-user-pin.svg'
import './HeaderCss.css'

const Header = () => {

    return (
        <>
            <Navbar collapseOnSelect fixed="top" expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">EQUINOX</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/" active>Home</Nav.Link>
                            <Nav.Link as={Link} to="/">About</Nav.Link>
                            <Nav.Link as={Link} to="/">Pricing</Nav.Link>
                        </Nav>
                        <Nav className='navbar-nav w-50 m-auto justify-content-end mobileNav'>
                            <div className="mobileNavButtons">
                                <Nav.Link as={Link} to="/registration">
                                    <img className='loginIcon' src={loginIcon} alt="loginIcon" />
                                    Login
                                </Nav.Link>
                                <Nav.Link className='registerBtn' as={Link} to="/registration">
                                    Register
                                </Nav.Link>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header