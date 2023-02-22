import React, { useState } from 'react';
import { FaMeh, FaSmile, FaSadTear } from "react-icons/fa";
import { WiMoonFull, WiMoonWaningCrescent1, WiMoonWaningCrescent4 } from "react-icons/wi";

export function JournalWrite(props) {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [img, setImg] = useState('img/dream_pic7.jpg'); // Joel mentioned we will covered later
    const [symbol, setSymbol] = useState('');
    const [recognition, setRecognition] = useState('');

    const handleTitile = (event) => {
        setTitle(event.target.value);
    }

    const handleContent = (event) => {
        setContent(event.target.value);
    }

    const handleSymbol = (event) => {
        setSymbol(event.target.value);
    }

    const handleRecognition = (event) => {
        setRecognition(event.target.value);
    }


    const handleSubmit = (event) => {
        setTitle('');
        setContent('');
        props.howToAddDream(title,content, img, symbol, recognition);
    }

   
    return(
        <div className="dream-entry-container">
                <form className="enter-dream">
                    <label htmlFor="Title">Title:</label> 
                    <input type="text" name="title" className="title" onChange={handleTitile} value={title}/>
                    <label htmlFor="Content">Content:</label> 
                    <input type="text" name="content" className="content" onChange={handleContent} value={content}/>
                    <label htmlFor="Image Upload">Image Upload:</label> 
                    {/* <input type="image" name="image" className="image" /> Joel mentioned we will covered later */}
                </form>

                <div className="enter-dream-feelings">
                    
                    <div className="dream-feeling">
                        <h2>Symbols</h2>
                        <div className="symbols">
                            <FaSmile className="material-icons symbol" aria-label="happy" onClick={handleSymbol} value='happy'/>
                            <FaMeh className="material-icons symbol" aria-label="meh" onClick={handleSymbol} value='meh'/>
                            <FaSadTear className="material-icons symbol" aria-label="sad" onClick={handleSymbol} value='sad'/>
                        </div>
                    </div>


                    <div className="dream-feeling">
                        <h2>% of Recognition</h2>
                        <div className="symbols">
                            <WiMoonFull className="material-icons symbol" aria-label="high" onClick={handleRecognition} value='high'/>
                            <WiMoonWaningCrescent1 className="material-icons symbol" aria-label="medium" onClick={handleRecognition} value='medium'/>
                            <WiMoonWaningCrescent4 className="material-icons symbol" aria-label="low" onClick={handleRecognition} value='low'/>
                        </div>
                    </div>

                    <button className="dream-enter-btn">Cancel</button>
                    <button className="dream-enter-btn" onClick={handleSubmit}>Submit</button>

                </div>


            </div>
    )
}
