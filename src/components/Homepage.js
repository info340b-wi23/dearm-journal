import React from 'react';
import { Link } from 'react-router-dom';

export function Homepage(props) {
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
                        <em className="home-word-pronunciation">(/drēm/)</em> 
                    </h2>
                    <p className="home-definition">
                        "a series of thoughts, images, and sensations occurring in a person's mind during sleep."
                    </p>
                    <p className="home-description">
                        A place to journal your dreams, share them with a community, and analyze the emotions felt from them.
                    </p>
                    <Link to="/signIn">
                        <button className="start-button">Become a Dreamer</button>
                    </Link>
                </div>
            </section>
        </main>
    );
}