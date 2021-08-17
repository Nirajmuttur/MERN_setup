import React from 'react'

import { hot } from 'react-hot-loader'
import {Navbar, Nav } from 'react-bootstrap'

const HelloWorld = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="dark">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                <Nav>
                <Nav.Link href="#deets">Sign-Up</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                    Login
                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
export default hot(module)(HelloWorld)