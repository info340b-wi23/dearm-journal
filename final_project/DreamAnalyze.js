import React from 'react';
import { FaMeh, FaSmile, FaSadTear} from "react-icons/fa";
import { WiMoonFull, WiMoonWaningCrescent1, WiMoonWaningCrescent4 } from "react-icons/wi";
import { SlHeart, SlShareAlt } from "react-icons/sl";
import "./css/style.css";
import "./css/proposal.css";
export function DreamAnalyze(props) {
    return(
        <div className="report-container">
            <div className="report-content">
                <h1>Here is your current dream stats:</h1>
                <h2>Feelings</h2>
                    <p>Happy: 30%</p>
                    <p>Natural: 20%</p>
                    <p>Sad: 10%</p>
                    <p>Angry: 20%</p>
                    <p>Scared: 30%</p>

                <h2>Dream Type</h2>
                    <p>Normal Dream: 40%</p>
                    <p>Daydream: 10%</p>
                    <p>Nightmare: 40%</p>
                    <p>Lucid: 10%</p>
            </div>



            
            
            <div className="report-sharing">
                <img className="report-image" src="img/writing-amico.png" alt="A woman reading"/>
                <div className="report-icons">
                    <SlHeart className="material-icons symbol" aria-label="favorite"/>
                    <SlShareAlt className="material-icons symbol" aria-label="share"/>
                </div>
            </div>
        
        </div>
    )
}
