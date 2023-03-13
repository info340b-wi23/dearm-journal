import React, { useState, useEffect } from 'react';
import { VscHome, VscCommentDiscussion, VscBook, VscAccount} from "react-icons/vsc";
import { getDatabase, ref, set as firebaseSet, push as firebasePush, onValue } from 'firebase/database';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Routes, Route, NavLink, useFetcher, Outlet, Navigate} from 'react-router-dom';
import 'whatwg-fetch';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Homepage } from './Homepage.js';
import { JournalWrite } from './JournalWrite.js';
import { DreamAnalyze } from './DreamAnalyze.js';
import { DreamCardList } from './JournalView.js';
import { DreamCommunity } from './DreamCommunity.js';
import { Profile } from './Profile.js'; 
import  SingleJournal  from './SingleJournal.js';
import { DreamNavBar } from './DreamNavbar.js';
import { DreamFooter } from './DreamFooter.js';
import { SignInPage } from './SignInPage.js';


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
          console.log(firebaseUser);
          setCurrentUser(firebaseUser);
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

        if(currentUser == null){
            return;
        }
        const allDreamRef = ref(db, "userData/"+currentUser.userId);

        onValue(allDreamRef, function(snapshot) {
            const allDreamObj = snapshot.val();
            if (allDreamObj != null) {
                const objKeys = Object.keys(allDreamObj);
                const objArray = objKeys.map((keyString) => {
                allDreamObj[keyString].key = keyString;
                    return allDreamObj[keyString];
                })
            setDreamArray(objArray); 
            }
            
        });
            

    }, [currentUser])

  

        
    const addDream = (title, content, img, feeling, dreamType) => {
        const newDream = {
          "title": title,
          "content": content,
          "img": img,
          "feeling": feeling,
          "dreamType": dreamType,
        } 
        const db = getDatabase();
        const allDreamRef = ref(db, "userData/"+currentUser.userId);
        firebasePush(allDreamRef, newDream);
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
        
        <div className="page-content">
            <div className="page-body">
                <DreamNavBar currentUser={currentUser}/>
                <Routes>
                    <Route index element={<Homepage />}/>
                    <Route path="/signin" element={<SignInPage/>}/>
                    <Route element={<ProtectedPage currentUser={currentUser} />} >
                        <Route path ="/journal">
                            
                            <Route path=":dreamTitle" element={<SingleJournal dreamList={dreamArray}/>}/>
                            <Route path="write" element={<JournalWrite howToAddDream={addDream}/>}/>
                            <Route path="analyze" element={<DreamAnalyze dreamAry={dreamArray}/>}/>
                            <Route index element={<DreamCardList dreamArray={dreamArray} howToAddDream={addDream}/>}/>
                        </Route>
                        <Route path ="/dreamCommunity" element={<DreamCommunity currentUser={currentUser} dreamPost={dreamPost} howToAddPost={addPost} howToUpdateLike={updatePostLike}/>}/>
                        <Route path ="/profile" element={<Profile currentUser={currentUser}/>} />
                    </Route>
                </Routes>
            </div>

            <div>
                <DreamFooter/>
            </div>
        </div>
        
        
    )

}
function ProtectedPage(props) {
    if(props.currentUser == null) { 
      return <Navigate to="/signin"/>
    } else if(props.currentUser.userId === null){ 
        return <p>Loading...</p>
    }
    else { 
      return <Outlet/>
    }
  }
  