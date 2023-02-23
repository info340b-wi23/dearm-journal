import React from 'react';

export function Homepage(props) {
    return (
       <div>
            <main>
                <section className="home-container">
                    <img 
                        className="home-image" 
                        src="img/poetry-amico.png" 
                        alt="A woman writing on paper"
                    />
                    <div className="container-bio">
                        <p>
                            <strong className="word-definition">Dream</strong> <em>/drēm/</em> 
                        </p>
                        <p className="definition">
                            "a series of thoughts, images, and sensations occurring in a person's mind during sleep."
                        </p>
                        <p className="description">
                            A place to journal your dreams, share them with a community, and analyze the emotions felt from them.
                        </p>
                        <button className="start">What occurred in your dream?</button>
                    </div>
                </section>
            </main>
            <footer>
                <p className="copyright">&copy; Dream Journal 2023</p>
                <div className="attribute">
                    <a href="https://storyset.com/creativity">Creativity illustrations by Storyset</a>
                </div>
            </footer>
        </div>
    );
}