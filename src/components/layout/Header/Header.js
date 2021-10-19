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
                    <Link className=" fs-1 text-logo " to="/home">WSH</Link>
                    {/* <Navbar.Brand as={Link} to="/home" className="fs-1 text-logo">BSH</Navbar.Brand> */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto ">
                            <Link className=" navbar-link " to="/home">Home</Link>
                            <Link className=" navbar-link " to="/book-appointment">Book Appointment</Link>
                            <Link className=" navbar-link " to="/my-account">My Account </Link>
                            {/* <Nav.Link  as={Link} to="/my-account" className=""> My Account </Nav.Link> */}
                            
                           
                            {/* dropdropdown start  */}
                             {/* <NavDropdown title="Dropdown3" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown> */}
                            {/* dropdropdown end  */}
                            
                           
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
                                        <div> <img className="rounded-circle mx-2 profileImage "  src={user.photoURL} alt=""/>   </div>
                                        
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