import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import '../style/style.scss';
import logo from '../images/logo.png';
import Login from './Login';

export default class NavBar extends Component {
    state = {
        isLogin: false
    }
    componentDidMount() {
        let profile = localStorage.getItem('profile');
        if (profile) {
            this.setState({
                isLogin: true
            })
        }
    }
    render() {
        return (
            <div id="NavBar">
                <Navbar bg="light" sticky="top" variant="light" expand="lg" style={styles.bottomNavbar} className="py-1">
                    <Navbar.Brand to="/">
                        <Link to="/" className="text-navbar-brand">
                            <img src={logo} alt="logo" style={{ width: '2.5rem' }} className="pr-2" />
                            Hostel Management
                                </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="float-right">
                        <Nav className="mr-auto">
                            <NavLink to="/" className="nav-link">Home</NavLink>
                            {
                                !this.state.isLogin && (
                                    <NavLink to="/register" className="nav-link">Register</NavLink>
                                )
                            }
                        </Nav>
                        <Login />
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