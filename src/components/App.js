import React, { useState, useEffect } from 'react';
import { VscHome, VscCommentDiscussion, VscBook, VscAccount} from "react-icons/vsc";
import { Homepage } from './Homepage.js';
import { JournalWrite } from './JournalWrite.js';
import { DreamAnalyze } from './DreamAnalyze.js';
import { DreamCardList } from './JournalView.js';
import { DreamCommunity } from './DreamCommunity.js';
import { Profile } from './Profile.js'; 
import { Routes, Route, NavLink, useFetcher} from 'react-router-dom';
import  SingleJournal  from './SingleJournal.js';
import { DreamHeader } from './DreamNavbar.js';
import { DreamFooter } from './DreamFooter.js';
import 'whatwg-fetch';
import { getDatabase, ref, set as firebaseSet } from 'firebase/database'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App(props) {
    const [dreamArray, setDreamArray] = useState([]);
    const [dreamPost, setDreamPost] = useState([]);


    useEffect(() => {
        fetch('/data/dream_entry.json')
        .then(function (response) {
            return response.json();
        }).then(function (data) {
            setDreamArray(data);
        })
      }, [])



    useEffect(() => {
        fetch('/data/dream-post.json')
        .then(function (response) {
            return response.json();
        }).then(function (data) {
            setDreamPost(data);
        })
      }, [])
    
    const addDream = (title, content, img, feeling, dreamType) => {
        const newDream = {
          "title": title,
          "content": content,
          "img": img,
          "feeling": feeling,
          "dreamType": dreamType,
        }
        const newDreamAry = [...dreamArray, newDream];
        setDreamArray(newDreamAry); 
    }


    const addPost = (name, content, img, imgAlt) => {
        const newPost = {
        "name": name,
        "content": content,
        "img": img,
        "imgAlt": imgAlt,
        "like": 0,
        "timestamp": Date.now(),
        }
        const newDreamPost = [...dreamPost, newPost];
        setDreamPost(newDreamPost); 
    }
    
    const updatePostLike = (key) => {
        for (let i=0; i < dreamPost.length; i++) {
            if (dreamPost[i].content == key) {
                dreamPost[i].like++;
            }
        }
        
        setDreamPost(dreamPost);
        console.log(dreamPost);
    }

    return(
        <div>
            <DreamHeader/>
            <Routes>
                <Route path ="/" element={<Homepage />}></Route>
                <Route path ="/journal">
                    <Route path=":dreamTitle" element={<SingleJournal dreamList={dreamArray}/>}/>
                    <Route path="write" element={<JournalWrite howToAddDream={addDream}/>}/>
                    <Route path="analyze" element={<DreamAnalyze dreamAry={dreamArray}/>}/>
                    <Route index element={<DreamCardList dreamArray={dreamArray} howToAddDream={addDream}/>}/>
                </Route>
                <Route path ="/dreamCommunity" element={<DreamCommunity dreamPost={dreamPost} howToAddPost={addPost} howToUpdateLike={updatePostLike}/>}></Route>
                <Route path ="/profile" element={<Profile />}></Route>
            </Routes>
            <DreamFooter/>
        </div>
    )

}
