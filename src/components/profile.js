import React, { useState } from 'react';
import { FaMeh, FaSmile, FaSadTear} from "react-icons/fa";

export function Profile(props) {
    return (
        <main>
            <div className="p-info">
                <img className="profile-picture" src="img/avatar.png"/>
                <form className="enter-profile">
                    <label htmlFor="Name">Name:</label> 
                    <input type="text" name="name" className="name"/>
                    <label htmlFor="Username">Username:</label> 
                    <input type="text" name="username" className="username"/>
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
                        <input type="status" name="status" className="status"/>
                        <button className='profile-but'>Add</button>
                        <button className='profile-but'>Clear</button>
                    </section>

                    <div className='cur-feeling'>
                        <h2>How are you currently feeling?</h2>
                        <div className="dream-feeling">
                            <div className="symbols">
                                <FaSmile className="material-icons symbol" aria-label="happy"/>
                                    <FaMeh className="material-icons symbol" aria-label="meh"/>
                                    <FaSadTear className="material-icons symbol" aria-label="sad"/>
                            </div>
                        </div>
                    </div>
                </div>   
            </div> 
    </main>
    )
    
}