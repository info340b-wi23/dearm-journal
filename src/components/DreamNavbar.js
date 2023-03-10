import React from 'react';
import { Nav, Container, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // unsure if needed yet

export function DreamHeader() {
    return(
        <Navbar className="navigation-bar" expand="lg">
            <Container>
                <Navbar.Brand href="/">
                     <h1 className='brand'> {/* ask about code quality style */}
                        Dear.M
                        <img
                            className="dream-logo"
                            alt="Dream logo"
                            src="img/logo.png"
                        />
                    </h1>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse>
                        <Nav className="ms-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/journal">Journal</Nav.Link>
                            <Nav.Link href="/dreamCommunity">Community</Nav.Link>
                            <NavDropdown title="Account">
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