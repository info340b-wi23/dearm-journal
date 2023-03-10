import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export function Homepage() {
    return (
        <main>
            <section className="home-container-root">
                <img 
                    className="homepage-image" 
                    src="img/poetry-amico.png" 
                    alt="A woman writing on paper"
                />
                <div className="container-description">
                    <h2 className="homepage-words">
                        <strong className="home-word-definition">Dream </strong> 
                        <em className="home-word-pronunciation" style={{ color: "#7f7f7f" }}>(/drēm/)</em> 
                    </h2>
                    <p className="home-definition">
                        "a series of thoughts, images, and sensations occurring in a person's mind during sleep."
                    </p>
                    <br></br>
                    <br></br>
                    <br></br>
                    <p className="home-description">
                        A place to journal your dreams, share them with a community, and analyze the emotions felt from them.
                    </p>
                    <br></br>
                    <Link to="/journal">
                        <Button
                            className="start-button"
                            style={{ 
                                backgroundColor: "#d7b2e4",
                                color: "#292927",
                                borderRadius: "25px",
                                boxShadow: "2px 3.5px 2px #C2C2C2",
                                borderColor: "#E4D8E9",
                                justifyContent: "center",
                                alignItems: "center"
                            }}
                        >
                            Become a Dreamer
                        </Button>
                    </Link>
                </div>
            </section>
        </main>
    );
}