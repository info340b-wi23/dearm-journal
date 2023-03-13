import React, { useState } from 'react';
import { FaHeart} from "react-icons/fa";
import _ from 'lodash'; 
import { Card} from 'react-bootstrap';
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { Alert } from 'react-bootstrap';

export function DreamCommunity(props) {

    const [content, setContent] = useState('');
    const currentUser = props.currentUser;
    const [imageFile, setImageFile] = useState(undefined);
    const [imagePreviewLocation, setImagePreviewLocation] = useState('../img/placeholder-img.webp');
    const [trending, setTrending] = useState(false);
    const [sortNew, setSortNew] = useState(false);
    const [alertMessage, setAlertMessage] = useState(null);
    const [loading, setLoading] = useState(false);
    let dreamPost = "img/placeholder-img.webp";

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
        setLoading(true);
        try {
            const storage = getStorage();
            const imageRef = storageRef(storage, "dreamImg/"+Date.now()+".png");
            await uploadBytes(imageRef, imageFile)
            const publicUrl = await getDownloadURL(imageRef);
            setLoading(false);
            dreamPost = publicUrl;
        }
        catch (error) {
            setAlertMessage(error.message);
        }
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


    let buttonsColorN = "nonClick";
    let buttonsColorT = "nonClick";

    if (trending == true) {
        sortedPosts =  _.reverse(_.sortBy(props.dreamPost, [function(o) { return o.like; }]));
        buttonsColorT = "click";
        buttonsColorN = "nonClick";
    } 

    if (sortNew == true) {
        sortedPosts = props.dreamPost.sort((m1, m2) => m2.timestamp - m1.timestamp);
        buttonsColorN = "click";
        buttonsColorT = "nonClick";
    }


    const dreamPosts = sortedPosts.map((post) => {
        const postObj = <PostItem
            userName = {post.userName}
            userImg = {post.userImg}
            content={post.content}
            img={post.img}
            like={post.like}
            key={post.content}
            howToUpdateLike={props.howToUpdateLike}
            loadL={props.loadL}/>

        return postObj;
    });


    
    return (
        <main>
            {alertMessage &&
                <Alert variant="danger" dismissible onClose={() => setAlertMessage(null)}>
                    {alertMessage}
                </Alert>
            }
            <div className="overall-community-layout">                
                <div>
                    <form className="create-post">
                        <h4 className='community-create-post'>Create Post</h4>
                        <label htmlFor="Content">Content:</label>
                        <input type="text" name="content" className="content-create" onChange={handleContent} value={content} />
                        <label className="upload-label" htmlFor="Image Upload">Image Upload</label> 
                        <input className="upload" type="file" name="image" id="imageUploadInput" onChange={handleImg}/>
                        <img className="upload-img"src={imagePreviewLocation} alt="dream image"/>
                        {loading && <p>loading...</p>}
                        <button className="upload-save" onClick={handleImageUpload}>Save</button>
                        <button className="post-btn" onClick={handleSubmit}>Post</button>
                        {props.loadP && <p>loading...</p>}
                    </form>
                </div>

                <div className="posts">
                    <section className="filter-search">
                        <div>
                            <button className={"tab " + buttonsColorT} onClick={handleTrending}>Trending</button>
                            <button className={"tab-new " + buttonsColorN} onClick={handleNew}>New</button>
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

    const handleLike = (event) => {
        props.howToUpdateLike(content);
    }

    return (
   
        <Card className='dream-post-style'>
            <img className="profile-img-community" src={userImg} alt={userName + " avatar"} />
        
            <Card.Text className="username">{userName}</Card.Text>
            <Card.Img
                className="community-img-post"
                variant="post" 
                src={img} 
                alt="dream image" 
            />
            <Card.Body>
                <Card.Text className="community-content">{content}</Card.Text>
                <div className="like-btn">
                    <FaHeart className="material-icons" aria-label="like" onClick={handleLike} name="like"/>
                    <p className='community-like'>{like}</p>
                    {props.loadL && <p>loading...</p>}
                </div>
            </Card.Body>
        </Card>
    )
}