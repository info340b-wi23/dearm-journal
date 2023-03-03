import React, { useState } from 'react';
import { FaHeart, FaComment, FaShareSquare, FaUserCircle} from "react-icons/fa";

export function DreamCommunity(props) {
    const[name, setName] = useState('user');
    const [content, setContent] = useState('');
    const [imgAlt, setImgAlt] = useState('a farmer');
    const [img, setImg] = useState('img/post_img_def.jpg'); // will be covered later
    
    
    
    const handleContent = (event) => {
        setContent(event.target.value);
    }

    const dreamPosts = props.dreamPost.map((post) => {
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
    
    const handleSubmit = (event) => {
        setContent('');
        props.howToAddPost(name, content, img, imgAlt);
    }
    
    const [post, setPosts] = useState(dreamPosts);


    const handleTrending = (event) => {

        // let temp = {};
        // for (let i=0; i<post.length; i++) {
        //     for (let j = i+1; j<post.length; j++) {     
        //         if(post[i].like < post[j].like) {
        //             temp = post[i];
        //             console.log(temp);
        //             post[i] = post[j];    
        //             post[j] = temp;   
        //         }
        //      }     
        // }
        // setPosts(post);
        console.log(post);
        
    }

    const handleNew = (event) => {

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
                        {post}
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