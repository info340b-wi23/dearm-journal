import React, { useState } from 'react';
import { FaHeart, FaUserCircle} from "react-icons/fa";
import _ from 'lodash'; 

import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';

export function DreamCommunity(props) {

    const [content, setContent] = useState('');

    console.log(props.currentUser.userImg);
    const currentUser = props.currentUser;

    const [imageFile, setImageFile] = useState(undefined);
    const [imagePreviewLocation, setImagePreviewLocation] = useState('../img/post_img_def.jpg');
    const [trending, setTrending] = useState(false);
    const [sortNew, setSortNew] = useState(false);

    let dreamPost = "../img/post_img_def.jpg";

    const handleImg = (event) => {
        event.preventDefault();
        if(event.target.files.length > 0 && event.target.files[0]) {
          const imageFile = event.target.files[0]
          setImageFile(imageFile);
          setImagePreviewLocation(URL.createObjectURL(imageFile));
        }
    }

    const handleImageUpload = async (event) => {

        event.preventDefault();

        const storage = getStorage();
        const imageRef = storageRef(storage, "dreamImg/"+Date.now()+".png");
    
        await uploadBytes(imageRef, imageFile)
        const publicUrl = await getDownloadURL(imageRef);
        dreamPost = publicUrl;
        

    }

    

    const handleContent = (event) => {
        setContent(event.target.value);
    }
   
    const handleSubmit = (event) => {
        setContent('');
        props.howToAddPost(currentUser, content, dreamPost);
    }

    const handleTrending = (event) => {
        setTrending(true);
        setSortNew(false);
    }

    const handleNew = (event) => {
        setSortNew(true);
        setTrending(false);
    }

    let sortedPosts = props.dreamPost;

    let buttonsColorN = "white";
    let buttonsColorT = "white";

    if (trending == true) {
        sortedPosts =  _.reverse(_.sortBy(props.dreamPost, [function(o) { return o.like; }]));
        buttonsColorT = "#fff2cc";
        buttonsColorN = "white";
    } 

    if (sortNew == true) {
        sortedPosts = props.dreamPost.sort((m1, m2) => m2.timestamp - m1.timestamp);
        buttonsColorN = "#fff2cc";
        buttonsColorT = "white";
    }


    const dreamPosts = sortedPosts.map((post) => {
        const postObj = <PostItem
            userName = {post.userName}
            userImg = {post.userImg}
            content={post.content}
            img={post.img}
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
                        <input className="upload" type="file" name="image" id="imageUploadInput" onChange={handleImg}/>
                        <button onClick={handleImageUpload}>Save</button>

                    <img src={imagePreviewLocation} alt="dream image"/>
                    </form>

                    <button className="post-btn" onClick={handleSubmit}>Post</button>
                </div>

                <div className="posts">
                    <section className="filter-search">
                        <div>
                            <button className="tab" onClick={handleTrending} style={{backgroundColor: buttonsColorT}}>Trending</button>
                            <button className="tab new" onClick={handleNew} style={{backgroundColor: buttonsColorN}}>New</button>
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
    const userName = props.userName;
    const userImg = props.userImg;
    const content = props.content;
    const img = props.img;
    const like = props.like;

    console.log(userImg);
    const handleLike = (event) => {
        props.howToUpdateLike(content);
    }

    return (
        <div className="post">
            <img className="material-icons" src={userImg} alt={userName + " avatar"} />
            <p className="user-name">{userName}</p>

            <div className="post-content">
                <img src={img} />
                <p className="post-text">{content}</p> 
            </div>

            <div className="post-icon">
                <FaHeart className="material-icons" aria-label="like" onClick={handleLike} name="like"/>
                <p className='like'>{like}</p>
            </div>
        </div>
    )
}