import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import '../style/style.scss';
import logo from '../images/logo.png';

export default class NavBar extends Component {
    render() {
        return (
            <div id="NavBar">
                <Navbar bg="light" sticky="top" variant="light" expand="lg" style={styles.bottomNavbar} className="py-1 row">
                        <div className="col-6">
                            <Navbar.Brand to="/">
                                <Link to="/" className="text-navbar-brand">
                                    <img src={logo} alt="logo" style={{ width: '2.5rem' }} className="pr-2" />
                                    Hostel Management
                                </Link>
                            </Navbar.Brand>
                        </div>
                        <div className="col-6">
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav" className="float-right">
                                <Nav className="mr-auto">
                                    <NavLink to="/" className="nav-link">Home</NavLink>
                                    <NavLink to="/register" className="nav-link">Register</NavLink>
                                </Nav>
                            </Navbar.Collapse>
                        </div>
                </Navbar>
            </div>
        )
    }
}

const styles = {
    bottomNavbar: {
        borderBottom: '0.2rem solid #4486A3'
    }
}