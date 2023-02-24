import React, { useState } from 'react';
import { FaHeart, FaComment, FaShareSquare, FaUserCircle} from "react-icons/fa";

export function DreamCommunity(props) {
    const [content, setContent] = useState('');
    // const [img, setImg] = useState('img/dream_pic7.jpg'); // will be covered later
    // const [isLiked, setIsLiked] = useState(false);
    const [symbol, setSymbol] = useState('');

    const handleContent = (event) => {
        setContent(event.target.value);
    }

    // considered bootstrap for the post icons
    // const handleLiked = function(event) {
    //     setIsLiked(!isLiked);
    // }

    // let favoriteButtonColor = "white";
    // if (isLiked) {
    //     favoriteButtonColor = "red";
    // }

    const handleSymbol = (event) => {
        setSymbol(event.target.name);
        console.log(event);
        console.log("clicked");
        
    }
    
    return (
        <main>
            <div className="view-create">                
                <div>
                    <h2>Create Post</h2>
                    <form className="create-post">
                        <label htmlFor="Content">Content:</label> 
                        <input type="text" name="content" className="content-create" onChange={handleContent} value={content} />
                        <label htmlFor="Image Upload">Image Upload:</label> 
                        <input type="image" name="image" className="image-create" alt="image submitted" />
                    </form>

                    <button className="post-btn">Post</button>
                </div>

                <div className="posts">
                    <section className="filter-search">
                        <div>
                            <button className="tab">Trending</button>
                            <button className="tab">New</button>
                        </div>
                        <button className="tab search">Search</button>
                    </section>

                    <div className='dreamPosts'>
                        <div className="post">
                            <FaUserCircle className="material-icons" aria-label="info" name="account-icon" />
                            <p className="user-name">Emma</p>
                            <p className="post-text">
                                I have had this recurring dream of being underwater and this has appeared in many different forms on many nights.
                            </p>
            
                            <div className="post-icon">
                                <FaComment className="material-icons" aria-label="comment" onClick={handleSymbol} name="comment"/>
                                <FaShareSquare className="material-icons" aria-label="share" onClick={handleSymbol} name="share"/>
                                <FaHeart className="material-icons" aria-label="save" onClick={handleSymbol} name="save"/>
                            </div>
                        
                        </div>
            
                        <div className="post">
                            <FaUserCircle className="material-icons" aria-label="info" name="account-icon" />
                            <p className="user-name">Jessica</p>
                            <p className="post-text">  
                                Last night I dreamt that the world was coming to an end. I looked this up on various sites and generally it is interpreted as the dreamer being under a great amount of stress. I'm putting this question to you because a. I don't feel under a great amount of stress and b. it wasn't a stressful dream.  
                            </p>
            
                            <div className="post-icon">
                                <FaComment className="material-icons" aria-label="comment" onClick={handleSymbol} name="comment"/>
                                <FaShareSquare className="material-icons" aria-label="share" onClick={handleSymbol} name="share"/>
                                <FaHeart className="material-icons" aria-label="save" onClick={handleSymbol} name="save"/>
                            </div>
                        
                        </div>
            
                        <div className="post">
                            <FaUserCircle className="material-icons" aria-label="info" name="account-icon" />
                            <p className="user-name">Brian</p>
            
                            <div className="post-content">
                                <img src="img/strawberry_cupcake.png" alt="strawberry cupcake"/>
                                <p className="post-text">
                                    In my dream, my cousins and I were eating strawberry filled cream cupcakes that were about as big as our heads and we ran out. For some reason we were in some kind of mountainous region and we ran out so we had to get more. 
                                </p> 
                                {/* font */}
                                {/* flex box */}
                            </div>
                            
                            <div className="post-icon">
                                <FaComment className="material-icons" aria-label="comment" onClick={handleSymbol} name="comment"/>
                                <FaShareSquare className="material-icons" aria-label="share" onClick={handleSymbol} name="share"/>
                                <FaHeart className="material-icons" aria-label="save" onClick={handleSymbol} name="save"/>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </main>
    )
}