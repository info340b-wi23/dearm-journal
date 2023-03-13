import React, {useState} from 'react';
import { Nav, Container, Navbar, NavDropdown } from 'react-bootstrap';
import { getAuth, signOut } from 'firebase/auth';
import { Alert } from 'react-bootstrap';

export function DreamNavBar(props) {
    const [alertMessage, setAlertMessage] = useState(null);

    const handleSignOut = (event) => {
        signOut(getAuth())
        .catch(function(error) {
            setAlertMessage(error.message);
        })  
    }
    
    return(
        <div>
            <Navbar className="navigation-bar" expand="lg">
                <Container>
                    <Navbar.Brand href="/">
                        <h1 className='brand'>
                            Dear.M
                            <img
                                className="dream-logo"
                                alt="Dream logo"
                                src="/../img/logo.png"
                            />
                        </h1>
                    </Navbar.Brand>

                    {props.currentUser == null &&
                        <Nav.Link href="/signin">Sign In</Nav.Link>
                    }

                    <Navbar.Toggle/>
                    {props.currentUser != null &&
                        <Navbar.Collapse>
                            <Nav className="ms-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/journal">Journal</Nav.Link>
                                <Nav.Link href="/dreamCommunity">Community</Nav.Link>
                                <NavDropdown title="Account">
                                <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={handleSignOut} href="/">
                                    Sign out
                                </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    }
                </Container>
            </Navbar>

        {alertMessage &&
            <Alert variant="danger" dismissible onClose={() => setAlertMessage(null)}>
                {alertMessage}
            </Alert>
        }
    </div>
    )
}