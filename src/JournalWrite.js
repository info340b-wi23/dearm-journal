import React from 'react';
import { FaMeh, FaSmile, FaSadTear } from "react-icons/fa";
import { WiMoonFull, WiMoonWaningCrescent1, WiMoonWaningCrescent4 } from "react-icons/wi";

export function JournalWrite(props) {
    return(
        <div className="dream-entry-container">
                <form className="enter-dream">
                    <label htmlFor="Title">Title:</label> 
                    <input type="text" name="title" className="title"/>
                    <label htmlFor="Content">Content:</label> 
                    <input type="text" name="content" className="content"/>
                    <label htmlFor="Image Upload">Image Upload:</label> 
                    <input type="image" name="image" className="image"/>
                </form>

                <div className="enter-dream-feelings">
                    
                    <div className="dream-feeling">
                        <h2>Symbols</h2>
                        <div className="symbols">
                            <FaSmile className="material-icons symbol" aria-label="happy"/>
                            <FaMeh className="material-icons symbol" aria-label="meh"/>
                            <FaSadTear className="material-icons symbol" aria-label="sad"/>
                        </div>
                    </div>


                    <div className="dream-feeling">
                        <h2>% of Recognition</h2>
                        <div className="symbols">
                            <WiMoonFull className="material-icons symbol" aria-label="high"/>
                            <WiMoonWaningCrescent1 className="material-icons symbol" aria-label="medium"/>
                            <WiMoonWaningCrescent4 className="material-icons symbol" aria-label="low"/>
                        </div>
                    </div>

                    <button className="dream-enter-btn">Cancel</button>
                    <button className="dream-enter-btn">Submit</button>

                </div>

            </div>
    )
}
