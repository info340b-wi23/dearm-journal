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
import { DreamNavBar } from './DreamNavbar.js';
import { DreamFooter } from './DreamFooter.js';
import 'whatwg-fetch';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SignInPage } from './SignInPage.js';
import { getDatabase, ref, set as firebaseSet, push as firebasePush, onValue } from 'firebase/database';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export default function App(props) {
    const [currentUser, setCurrentUser] = useState({"userId": null, "userName": null, "userImg": null});
    const [dreamArray, setDreamArray] = useState([]);
    const [dreamPost, setDreamPost] = useState([]);

    useEffect(() => {
    
        onAuthStateChanged(getAuth(), function(firebaseUser) {
          if(firebaseUser) { 
            firebaseUser.userId = firebaseUser.uid;
            firebaseUser.userName = firebaseUser.displayName;
            firebaseUser.userImg = firebaseUser.photoURL || "img/avatar.png";
          } else {

          }
          setCurrentUser(firebaseUser);
          console.log(firebaseUser);
        })
    
        const db = getDatabase();
        const allPostRef = ref(db, "posts");
    
        onValue(allPostRef, function(snapshot) {
          const allPostObj = snapshot.val();
          const objKeys = Object.keys(allPostObj);
          const objArray = objKeys.map((keyString) => {
            allPostObj[keyString].key = keyString;
            return allPostObj[keyString];
            
          })
          setDreamPost(objArray); 
        });
    
      }, []) 


      console.log(currentUser);

    useEffect(() => {
        fetch('/data/dream_entry.json')
        .then(function (response) {
            return response.json();
        }).then(function (data) {
            setDreamArray(data);
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


    const addPost = (userObj, content, img) => {
        const newPost = {
        "userId": userObj.userId,
        "userName": userObj.userName,
        "userImg": userObj.userImg,
        "content": content,
        "img": img,
        "like": 0,
        "timestamp": Date.now(),
        }
        
        const newDreamPost = [...dreamPost, newPost];
        setDreamPost(newDreamPost); 

        const db = getDatabase();
        const allPostRef = ref(db, "posts");
        firebasePush(allPostRef, newPost);
    }

    
    const updatePostLike = (key) => {
        for (let i=0; i < dreamPost.length; i++) {
            if (dreamPost[i].content == key) {
                dreamPost[i].like++;
            }
        }
        
        setDreamPost(dreamPost);
        const db = getDatabase();
        const allPostRef = ref(db, "posts");
        firebaseSet(allPostRef, dreamPost);
    }

    return(
        <div>
            <DreamNavBar currentUser={currentUser}/>
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
                    <Route path ="/dreamCommunity" element={<DreamCommunity currentUser={currentUser} dreamPost={dreamPost} howToAddPost={addPost} howToUpdateLike={updatePostLike}/>}/>
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
  