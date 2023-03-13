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
                <h1 className='dream-analyze-subhead'>Here is your current dream stats:</h1>
                <h2 className='dream-analyze-feelings'>Feelings</h2>
                <p className='feeling'>Happy: {percentPro(happy, count)}%</p>
                <p className='feeling'>Natural: {percentPro(natural, count)}%</p>
                <p className='feeling'>Sad: {percentPro(sad, count)}%</p>
                <p className='feeling'>Angry: {percentPro(angry, count)}%</p>
                <p className='feeling'>Scared: {percentPro(scared, count)}%</p>

                <h2 className='dream-analyze-type'>Dream Type</h2>
                <p className='type-dream'>Normal Dream: {percentPro(normalDream, count)}%</p>
                <p className='type-dream'>Daydream: {percentPro(dayDream, count)}%</p>
                <p className='type-dream'>Nightmare: {percentPro(nightmare, count)}%</p>
                <p className='type-dream'>Lucid: {percentPro(lucid, count)}%</p>
            </div>
            <div className="report-sharing">
                <img className="report-image" src="../img/writing-amico.png" alt="A woman reading"/>
                <button className='back-button'><Link to="/journal">Back to Journal</Link></button>
            </div>
        </div>
    )
}

function percentPro(num, count) {
    return Math.round(num/count*100);
}
