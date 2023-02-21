import React from 'react';
import { FaMeh, FaSmile, FaSadTear} from "react-icons/fa";
import { WiMoonFull, WiMoonWaningCrescent1, WiMoonWaningCrescent4 } from "react-icons/wi";
import { SlHeart, SlShareAlt } from "react-icons/sl";

export function DreamAnalyze(props) {
    return(
        <div class="report-container">
            <div class="report-content">
                <h2>Over the past month...</h2>
                <h2>"You felt these emotions over the past month"</h2>
                <div class="dream-feeling">
                    <div class="symbols">
                    <FaSmile className="material-icons symbol" aria-label="happy"/>
                            <FaMeh className="material-icons symbol" aria-label="meh"/>
                            <FaSadTear className="material-icons symbol" aria-label="sad"/>
                    </div>
                </div>

                <h2>"You were most able to remember % of your dreams"</h2>
                <div class="dream-feeling">
                    <div class="symbols">
                    <WiMoonFull className="material-icons symbol" aria-label="high"/>
                            <WiMoonWaningCrescent1 className="material-icons symbol" aria-label="medium"/>
                            <WiMoonWaningCrescent4 className="material-icons symbol" aria-label="low"/>
                    </div>
                </div>
            </div>
            
            <div class="report-sharing">
                <img class="report-image" src="img/writing-amico.png" alt="A woman reading"/>
                <div class="report-icons">
                    <SlHeart class="material-icons symbol" aria-label="favorite"/>
                    <SlShareAlt class="material-icons symbol" aria-label="share"/>
                </div>
            </div>
        
        </div>
    )
}
