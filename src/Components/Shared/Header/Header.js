import React from 'react';
import { Container, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../../Hooks/useAuth';
import './Header.css';

const Header = () => {
    const activeMenu = {
        fontWeight: "bold",
        color: "#4fc9e0"
    }
    const { user, logOut, setUser, setIsLoading } = useAuth();
    const { displayName, photoURL } = user;
    const history = useHistory();
    const location = useLocation();
    const redirect = location?.state?.from || "/";
    const handleLogout = () => {
        logOut()
            .then((result) => {
                setUser({})
                Swal.fire(
                    "Good job!",
                    "Log Out SuccessFull!",
                    "success"
                )
                history.push(redirect);
            })
            .catch((error) => {
                Swal.fire(
                    "Something went wrong!",
                    `${error.message}`,
                    "error"
                )
            })
            .finally(() => setIsLoading(false))
    }
    return (
        <>
            <Navbar bg="light" expand="lg" sticky="top">
                <Container>
                    <Navbar.Brand>
                        <Nav.Link as={NavLink} to="/">
                        <img
                            src="https://i.ibb.co/hHf7Hgd/travel-hero-logo.png"
                            width="120"
                            height="50"
                            className="d-inline-block align-top"
                            alt="learn-area-logo"
                        />
                        </Nav.Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto align-items-center">
                            <Nav.Link as={NavLink} to="/home" activeStyle={
                                activeMenu
                            } className="fs-6 fw-bold px-3">Home</Nav.Link>
                            <Nav.Link as={NavLink} to="/about" activeStyle={
                                activeMenu
                            } className="fs-6 fw-bold px-3">About</Nav.Link>
                            <Nav.Link as={NavLink} to="/destination" activeStyle={
                                activeMenu
                            } className="fs-6 fw-bold px-3">Destination</Nav.Link>
                            <Nav.Link as={NavLink} to="/packages" activeStyle={
                                activeMenu
                            } className="fs-6 fw-bold px-3">Packages</Nav.Link>
                            
                            <Nav.Link as={NavLink} to="/contact" activeStyle={
                                activeMenu
                            } className="fs-6 fw-bold px-3">Contact</Nav.Link>
                            
                            {!user.displayName ? (
                                <>
                                    <Nav.Link as={NavLink} to="/login" activeStyle={
                                        activeMenu
                                    } className="fs-6 fw-bold px-3">
                                        <Button variant="info" className="text-btn fs-6 fw-bold">
                                            Login
                                        </Button>
                                    </Nav.Link>
                                </>
                            ) : (
                                <>
                                <Nav.Link as={NavLink} to="/myorders" activeStyle={
                                activeMenu
                            } className="fs-6 fw-bold px-3">My Orders</Nav.Link>
                            <Nav.Link as={NavLink} to="/manageorders" activeStyle={
                                activeMenu
                            } className="fs-6 fw-bold px-3">Manage Orders</Nav.Link>
                            <Nav.Link as={NavLink} to="/addpackages" activeStyle={
                                activeMenu
                            } className="fs-6 fw-bold px-3">Add Packages</Nav.Link>
                                <NavDropdown
                                    title={
                                        <img
                                            style={{
                                                width: "45px",
                                                borderRadius: "50%",
                                            }}
                                            src={photoURL}
                                            alt=""
                                        />
                                    }
                                >
                                    <div className="text-center">
                                        <h6>{displayName}</h6>
                                        <button onClick={handleLogout} className="btn btn-info">
                                            Log Out
                                        </button>
                                    </div>
                                </NavDropdown>
                                </>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;