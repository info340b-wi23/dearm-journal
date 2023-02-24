import React, { useState } from 'react';
import { FaHeart, FaComment, FaShareSquare, FaUserCircle} from "react-icons/fa";

export function DreamCommunity(props) {
    const [content, setContent] = useState('');
    // const [img, setImg] = useState('img/dream_pic7.jpg'); // will be covered later
    // const [isLiked, setIsLiked] = useState(false);
   
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

    const dreamPosts = props.dreamPost.map((post) => {
        const postObj = <PostItem
        name ={post.name}
        content={post.content}
        img={post.img}
        imgAlt={post.imgAlt}
        like={post.like}
        key={post.name}/>

        return postObj;
    });

    
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
                        {dreamPosts}
                    </div>


                </div>
            </div>
        </main>
    )
}

function PostItem(props) {

    const name = props.name;
    const content = props.content;
    const img = props.img;
    const imgAlt = props.imgAlt;
    const like = props.like;
    const [symbol, setSymbol] = useState('');
    
    const handleSymbol = (event) => {
        setSymbol(event.target.name);
        console.log(event);
        console.log("clicked");
        
    }

    return (
        <div className="post">
            <FaUserCircle className="material-icons" aria-label="info" name="account-icon" />
            <p className="user-name">{name}</p>

            <div className="post-content">
                <img src={img} alt={imgAlt}/>
                <p className="post-text">{content}</p> 
            </div>

            <div className="post-icon">
                <FaComment className="material-icons" aria-label="comment" onClick={handleSymbol} name="comment"/>
                <FaShareSquare className="material-icons" aria-label="share" onClick={handleSymbol} name="share"/>
                <FaHeart className="material-icons" aria-label="save" onClick={handleSymbol} name="save"/>
            </div>
        </div>
    )
}