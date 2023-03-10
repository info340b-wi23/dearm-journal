import React from 'react';
import { Container, Row } from 'react-bootstrap';

export function DreamFooter() {
    return (
        <footer 
            style={{ 
                backgroundColor: "#292927", 
                color: "#fff",
                marginTop: "auto",
            }}
        >
            <Container className="text-center"> {/* ask about how to make footer stay at bottom */}
                <Row>
                    <p style={{ color: "#FEFEFE"}}>&copy; 2023 Dear.M. All rights reserved.</p>
                    <a 
                        href="https://storyset.com/people" 
                        style={{color: "#FEFEFE"}}
                    >
                        People illustrations by Storyset
                    </a>
                </Row>
            </Container>
        </footer>
    );
}