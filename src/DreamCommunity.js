import React from 'react';

export function DreamCommunity() {
    return (
        <main>
            <div className="view-create">                
                <div className="create-post">
                    <h2>Create Post</h2>
                    <form>
                        <label for="Content">Content:</label> 
                        <input type="text" name="content" className="content-create">
                        <label for="Image Upload">Image Upload:</label> 
                        <input type="image" name="image" className="image-create">
                    </form>

                    <button clclassNameass="post-btn">Post</button>
                </div>


                <div className="posts">
                    <section className="filter-search">
                        <div>
                            <button className="tab">Trending</button>
                            <button className="tab">New</button>
                        </div>
                        <button className="tab search">Search</button>
                    </section>

                    <div className="post">
                        <span className="material-icons" aria-label="Info">account_circle</span>
                        <p className="user-name">Emma</p>
                        <p className="post-text">
                            I have had this recurring dream of being underwater and this has appeared in many different forms on many nights.
                        </p>
        
                        <div className="post-icon">
                            <span className="material-icons" aria-label="comment">favorite</span>
                            <span className="material-icons" aria-label="share">ios_share</span>
                            <span className="material-icons" aria-label="save">bookmark</span>
                        </div>
                    
                    </div>
        
                    <div className="post">
                        <span className="material-icons" aria-label="Info">account_circle</span>
                        <p className="user-name">Jessica</p>
                        <p className="post-text">  
                            Last night I dreamt that the world was coming to an end. I looked this up on various sites and generally it is interpreted as the dreamer being under a great amount of stress. I'm putting this question to you because a) I don't feel under a great amount of stress and b) it wasn't a stressful dream.  
                        </p>
        
                        <div className="post-icon">
                            <span className="material-icons" aria-label="comment">favorite</span>
                            <span className="material-icons" aria-label="share">ios_share</span>
                            <span className="material-icons" aria-label="save">bookmark</span>
                        </div>
                    
                    </div>
        
                    <div className="post">
                        <span className="material-icons" aria-label="Info">account_circle</span>
                        <p className="user-name">Brian</p>
        
                        <div className="post-content">
                            <img src="img/strawberry_cupcake.png" alt="strawberry cupcake"/>
                            <p className="post-text">
                                In my dream, my cousins and I were eating strawberry filled cream cupcakes that were about as big as our heads and we ran out. For some reason we were in some kind of mountainous region and we ran out so we had to get more. 
                            </p>
                        </div>
                        
                        <div className="post-icon">
                            <span className="material-icons" aria-label="comment">favorite</span>
                            <span className="material-icons" aria-label="share">ios_share</span>
                            <span className="material-icons" aria-label="save">bookmark</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}