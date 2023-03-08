import React from 'react';
import { Link } from 'react-router-dom';

export function DreamAnalyze(props) {
    const dreams = props.dreamAry;
    const count = dreams.length;
    let happy = 0;
    let natural  = 0;
    let sad = 0;
    let angry = 0;
    let scared = 0;
    let normalDream = 0;
    let dayDream = 0;
    let nightmare = 0;
    let lucid = 0;

    for (let i=0; i<count; i++) {
        if (dreams[i].feeling == "happy") {
            happy++; 
        } else if (dreams[i].feeling == "natural") {
            natural++;
        } else if (dreams[i].feeling == "sad") {
            sad++; 
        } else if (dreams[i].feeling == "angry") {
            angry++;
        } else if (dreams[i].feeling == "scared"){
            scared++;
        }

        if (dreams[i].dreamType == "normalDream") {
            normalDream++;
        } else if (dreams[i].dreamType == "dayDream") {
            dayDream++;
        } else if (dreams[i].dreamType == "nightmare") {
            nightmare++;
        } else if (dreams[i].dreamType == "lucid") {
            lucid++;
        }
    }

    return(
        <div className="report-container">
            <div className="report-content">
                <h1>Here is your current dream stats:</h1>
                <h2>Feelings</h2>
                    <p>Happy: {percentPro(happy, count)}%</p>
                    <p>Natural: {percentPro(natural, count)}%</p>
                    <p>Sad: {percentPro(sad, count)}%</p>
                    <p>Angry: {percentPro(angry, count)}%</p>
                    <p>Scared: {percentPro(scared, count)}%</p>

                <h2>Dream Type</h2>
                    <p>Normal Dream: {percentPro(normalDream, count)}%</p>
                    <p>Daydream: {percentPro(dayDream, count)}%</p>
                    <p>Nightmare: {percentPro(nightmare, count)}%</p>
                    <p>Lucid: {percentPro(lucid, count)}%</p>
            </div>
            <div className="report-sharing">
                <img className="report-image" src="../img/writing-amico.png" alt="A woman reading"/>
                <button><Link to="/journal">Back to Journal</Link></button>
        
            </div>
            
        </div>
    )
}

function percentPro(num, count) {
    return Math.round(num/count*100);
}
