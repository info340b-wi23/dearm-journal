import React from "react";
import "./css/index.css";
import "./css/proposal.css";
import "./css/style.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral';
import Avatar from "./img/avatar.png"
import "./css/index.css";
import "./css/proposal.css";
import "./css/style.css";
export function Profile() {
    return(
        <div>
            <div className="p-info">
                <img className="profile-picture" src={Avatar} />
                <form className="enter-profile" >
                    <label for="Name">Name:</label> 
                    <input type="text" name="name" className="name" />
                    <label for="Username">Username:</label> 
                    <input type="text" name="username" className="username" />
                 
                </form>
                <section className="filter-search">
                    <div>
                        <button className="tab">Overview</button>
                        <button className="tab"><a href="dreamcommunity.html">Saved</a></button>
                        <button className="tab search"><a href="journalView.html">Dream Reports</a></button> 
                    </div>
                </section>

                <div className="dream-profile-container">
                   
                    <section id="createlist" className="style">
                        <h2>Please put your status Below</h2>
                        <input id="input-text" type="text" />
                        <button id="add-button">Add</button>
                        <button id="remove">Clear</button>
                        <h2>Here is your status below</h2>
                       
                        </section>

                    <div className="enter-dream-feelings">
                        <p>How are you currently feeling?</p>
                        <div className="dream-feeling">
                            <h2>Symbols</h2>
                            <div className="symbols">
                            <SentimentDissatisfiedIcon className="material-icons"/>
                                <SentimentSatisfiedIcon className="material-icons"/>
                                <SentimentNeutralIcon className="material-icons"/>
                            </div>
                        </div>
                        </div>
                        </div>
                        </div>
                        <footer>
            <p>&copy; Dream Journal 2023</p>
            <div className="attribute">
                <a href="https://storyset.com/creativity">Creativity illustrations by Storyset</a>
            </div>
        </footer>
                        
        </div>

    )
}