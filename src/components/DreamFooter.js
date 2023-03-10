import React from 'react';
import { Container, Row } from 'react-bootstrap';

export function DreamFooter() {
    return (
        <footer>
            <Container> {/* ask about how to make footer stay at bottom */}
                <Row className="copyright-text">
                    <p>&copy; 2023 Dear.M. All rights reserved.</p>
                    <a href="https://storyset.com/people">People illustrations by Storyset</a>
                </Row>
            </Container>
        </footer>
    );
}