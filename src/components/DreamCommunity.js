import React, { useState } from 'react';
import { FaHeart, FaUserCircle} from "react-icons/fa";
import _ from 'lodash'; //import external library!

export function DreamCommunity(props) {
    const[name, setName] = useState('user');
    const [content, setContent] = useState('');
    const [imgAlt, setImgAlt] = useState('a farmer');
    const [img, setImg] = useState('img/post_img_def.jpg'); // will be covered later

    const [trending, setTrending] = useState(false);

    const handleContent = (event) => {
        setContent(event.target.value);
    }
   
    const handleSubmit = (event) => {
        setContent('');
        props.howToAddPost(name, content, img, imgAlt);
    }

    const handleTrending = (event) => {
        setTrending(true);
        if (trending == true) {
            setTrending(false);
        }
    }

    let sortedPosts = props.dreamPost;

    let buttonsColorN = "#fff2cc";
    let buttonsColorT = null;

    if (trending == true) {
        sortedPosts =  _.reverse(_.sortBy(props.dreamPost, [function(o) { return o.like; }]));
        buttonsColorT = "#fff2cc";
        buttonsColorN = "white";
    } else {
        sortedPosts = props.dreamPost.sort((m1, m2) => m2.timestamp - m1.timestamp);
        buttonsColorT = "white";
        
    }

    console.log(sortedPosts);
    const dreamPosts = sortedPosts.map((post) => {
        const postObj = <PostItem
            name ={post.name}
            content={post.content}
            img={post.img}
            imgAlt={post.imgAlt}
            like={post.like}
            key={post.content}
            howToUpdateLike={props.howToUpdateLike}/>

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

                    <button className="post-btn" onClick={handleSubmit}>Post</button>
                </div>

                <div className="posts">
                    <section className="filter-search">
                        <div>
                            <button className="tab" onClick={handleTrending} style={{backgroundColor: buttonsColorT}}>Trending</button>
                            <button className="tab new" style={{backgroundColor: buttonsColorN}}>New</button>
                        </div>
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
    const [like, setLike] = useState(props.like);


    const handleLike = (event) => {
        setLike(like + 1);
        props.howToUpdateLike(content);
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
                <FaHeart className="material-icons" aria-label="like" onClick={handleLike} name="like"/>
                <p className='like'>{like}</p>
            </div>
        </div>
    )
}