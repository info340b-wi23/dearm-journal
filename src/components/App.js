import React, { useState, useEffect } from 'react';
import { VscHome, VscCommentDiscussion, VscBook, VscAccount} from "react-icons/vsc";
import { Homepage } from './Homepage.js';
import { JournalWrite } from './JournalWrite.js';
import { DreamAnalyze } from './DreamAnalyze.js';
import { JournalView } from './JournalView.js';
import { DreamCommunity } from './DreamCommunity.js';
import { Profile } from './Profile.js'; 
import { Routes, Route, NavLink, useFetcher, Outlet, Navigate} from 'react-router-dom';
import  SingleJournal  from './SingleJournal.js';
import { DreamHeader } from './DreamNavbar.js';
import { DreamFooter } from './DreamFooter.js';
import 'whatwg-fetch';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SignInPage } from './SignInPage.js';
import { getDatabase, ref, set as firebaseSet, push as firebasePush, onValue } from 'firebase/database';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export default function App(props) {
    const [currentUser, setCurrentUser] = useState({"userId": null, "userName": null, "userImg": ""});
    const [dreamArray, setDreamArray] = useState([]);
    const [dreamPost, setDreamPost] = useState([]);


    useEffect(() => {
    
        onAuthStateChanged(getAuth(), function(firebaseUser) {
          if(firebaseUser) { //not null, so signed in
            //local changes
            firebaseUser.userId = firebaseUser.uid;
            firebaseUser.userName = firebaseUser.displayName;
            firebaseUser.userImg = firebaseUser.photoURL || "/img/null.png";
                 
          } 
          setCurrentUser(firebaseUser);
        })
    
        // //hook up a listener to Firebase
        // const db = getDatabase();
        // const allMessagesRef = ref(db, "allMessages");
    
        // //fetch message data from firebase
        // onValue(allMessagesRef, function(snapshot) {
        //   const allMessagesObj = snapshot.val();
        //   const objKeys = Object.keys(allMessagesObj);
        //   const objArray = objKeys.map((keyString) => {
        //     allMessagesObj[keyString].key = keyString;
        //     return allMessagesObj[keyString];
            
        //   })
        //   setMessageObjArray(objArray); //update state & rerender
        // });
    
      }, []) //array is list of variables that will cause this to rerun if changed


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


    const addPost = (userObj, content, img, imgAlt) => {
        const newPost = {
        "userId": userObj.userId,
        "userName": userObj.userName,
        "userImg": userObj.userImg,
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
            <DreamHeader currentUser={currentUser}/>
            <Routes>
                <Route index element={<Homepage />}/>

                <Route path="/signin" element={<SignInPage/>}/>
                

                <Route element={<ProtectedPage currentUser={currentUser} />} >
                    <Route path ="/journal">
                        <Route path=":dreamTitle" element={<SingleJournal dreamList={dreamArray}/>}/>
                        <Route path="write" element={<JournalWrite howToAddDream={addDream}/>}/>
                        <Route path="analyze" element={<DreamAnalyze dreamAry={dreamArray}/>}/>
                        <Route index element={<JournalView dreamAry={dreamArray} howToAddDream={addDream}/>}/>
                    </Route>
                    <Route path ="/dreamCommunity" element={<DreamCommunity dreamPost={dreamPost} howToAddPost={addPost} howToUpdateLike={updatePostLike}/>}/>
                    <Route path ="/profile" element={<Profile currentUser={currentUser}/>} />
                </Route>

                
            </Routes>
            <DreamFooter/>
        </div>
    )

}

function ProtectedPage(props) {
    //...determine if user is logged in
    if(props.currentUser == null) { //not undefined at all (no user)
      return <Navigate to="/signin"/>
    } else if(props.currentUser.userId === null){ //starting null user
        return <p>Loading...</p>
    }
    else { //otherwise, show the child route content
      return <Outlet/>
    }
  }
  