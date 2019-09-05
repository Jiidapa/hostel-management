import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import '../style/style.scss';
import logo from '../images/logo.png';

export default class NavBar extends Component {
    render() {
        return (
            <div id="NavBar">
                <Navbar bg="light" expand="lg" style={styles.bottomNavbar} className="py-1">
                    <Navbar.Brand href="#home" className="text-navbar-brand">
                        <img src={logo} alt="logo" style={{ width: '2.5rem' }} className="pr-2" />
                        Hostel Management
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
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