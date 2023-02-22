import React, { useState } from 'react';
import { VscHome, VscCommentDiscussion, VscBook, VscAccount} from "react-icons/vsc";
import { JournalWrite } from './JournalWrite.js';
import { DreamAnalyze } from './DreamAnalyze.js';
import { JournalView } from './JournalView.js';




export default function App(props) {

    return(
        <div>
            <DearMHeader/>
            <JournalView/>
            <JournalWrite/>
            <DreamAnalyze/>

        </div>
    )

}


function DearMHeader(props){

    return(
        <div className="container">
            <header>
                <div className="website">
                    <h1>Dear.M </h1>
                    <h1>Journal </h1>
                </div>
                <img className="logo" src="/img/logo.png" aria-hidden="true"/>
            </header>

            <div className="container-right">
                <nav>
                    <a href="index.html"><VscHome className="material-icons" aria-label="home"/></a>
                    <a href=""><VscCommentDiscussion className="material-icons" aria-label="community"/></a>
                    <a href="journalView.html"><VscBook className="material-icons" aria-label="Journal"/></a>
                    <a href="profile.html"><VscAccount className="material-icons" aria-label="account"/></a>
                </nav>
            </div>
        </div>
    )
}
