import React from 'react';
import { Nav, Container, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // unsure if needed yet

export function DreamHeader() {
    return(
        <Navbar className="navigation-bar" style={{ backgroundColor: "#E3F2FD" }} expand="lg">
            <Container>
                <Navbar.Brand href="/">
                     <h1> {/* ask about code quality style */}
                        Dear.M
                        <img
                        className="dream-logo"
                        alt="Dream logo"
                        src="img/logo.png"
                        width="50"
                        height="50"
                        />
                    </h1>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/journal">Journal</Nav.Link>
                            <Nav.Link href="/dreamCommunity">Community</Nav.Link>
                            <NavDropdown title="Account" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/">
                                Sign out
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}