import React, { useState } from 'react';
import { FaHeart, FaComment, FaShareSquare, FaUserCircle} from "react-icons/fa";
import _ from 'lodash'; //import external library!

export function DreamCommunity(props) {
    const[name, setName] = useState('user');
    const [content, setContent] = useState('');
    const [imgAlt, setImgAlt] = useState('a farmer');
    const [img, setImg] = useState('img/post_img_def.jpg'); // will be covered later
    const [dreamPosts, setDreamPosts] = useState(makeComp(props.dreamPost, props.howToUpdateLike));

    const handleContent = (event) => {
        setContent(event.target.value);
    }

   
    const handleSubmit = (event) => {
        setContent('');
        props.howToAddPost(name, content, img, imgAlt);
    }
    


    const handleTrending = (event) => {
        let sortedPosts =  _.reverse(_.sortBy(props.dreamPost, [function(o) { return o.like; }]));
        setDreamPosts(makeComp(sortedPosts, props.howToUpdateLike));

        
    }

    const handleNew = (event) => {
        let sortedPosts = props.dreamPost.sort((m1, m2) => m2.timestamp - m1.timestamp);
        setDreamPosts(makeComp(sortedPosts, props.howToUpdateLike));
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

                    <button className="post-btn" onClick={handleSubmit}>Post</button>
                </div>

                <div className="posts">
                    <section className="filter-search">
                        <div>
                            <button className="tab" onClick={handleTrending}>Trending</button>
                            <button className="tab" onClick={handleNew}>New</button>
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

function makeComp(array, method) {
    return (
        array.map((post) => {
            const postObj = <PostItem
            name ={post.name}
            content={post.content}
            img={post.img}
            imgAlt={post.imgAlt}
            like={post.like}
            key={post.content}
            howToUpdateLike={method}/>
    
            return postObj;
        })
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
        props.howToUpdateLike(content)
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
                <FaComment className="material-icons" aria-label="comment" name="comment"/>
                <FaShareSquare className="material-icons" aria-label="share"  name="share"/>
                <FaHeart className="material-icons" aria-label="like" onClick={handleLike} name="like"/>
                <p className='like'>{like}</p>
            </div>
        </div>
    )
}