import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css';

const Header = () => {

    const { user, lotOut } = useAuth()

    return (
        <div>
            <Navbar  expand="lg">
                <Container>
                    <Link className=" fs-1 text-logo " to="/home" title="World Specialized Hospital">WSH</Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto ">
                            <Link className=" navbar-link " to="/home">Home</Link>
                            <Link className=" navbar-link " to="/book-appointment">Book Appointment</Link>
                            <Link className=" navbar-link " to="/my-account">My Account </Link>
                        </Nav>
                        <Nav className="align-items-center">
                            {
                                !user.email ?
                                    <>
                                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                                        
                                        <Nav.Link as={Link} to="/register">Register</Nav.Link>
                                    </>
                                    :
                                    <>
                                        <Nav.Link className="text-black"> Hi , {user?.displayName}</Nav.Link>
                                        <div>  <Link to="/my-account"> <img className="rounded-circle mx-2 profileImage "  src={user.photoURL} alt=""/> </Link>  </div>
                                        
                                        <i onClick={lotOut} className="fas fa-sign-out-alt" style={{ cursor: "pointer" }} title="logout"></i>
                                    </>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;