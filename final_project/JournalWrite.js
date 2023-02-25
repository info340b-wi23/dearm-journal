import React, { useState } from 'react';
import { FaMeh, FaSmile, FaSadTear } from "react-icons/fa";
import { WiMoonFull, WiMoonWaningCrescent1, WiMoonWaningCrescent4 } from "react-icons/wi";

export function JournalWrite(props) {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [img, setImg] = useState('img/dream_pic7.jpg');  // joel mentioned we will cover this later
    const [symbol, setSymbol] = useState('');
    const [recognition, setRecognition] = useState('');


    const handleTitile = (event) => {
        setTitle(event.target.value);
    }

    const handleContent = (event) => {
        setContent(event.target.value);
    }

    const handleFeeling = (event) => {
        setSymbol(event.target.name);
    }

    const handleType = (event) => {
        setRecognition(event.target.name);
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
                    <input type="image" name="image" className="image" /> 
                </form>

                <div className="enter-dream-feelings">


                    <h2>Feelings</h2> 
                        <button className="dream-but" onClick={handleFeeling} name='happy'>Happy</button>
                        <button className="dream-but" onClick={handleFeeling} name='natural'>Natural</button>
                        <button className="dream-but" onClick={handleFeeling} name='sad' >Sad</button>
                        <button className="dream-but" onClick={handleFeeling} name='angry' >Angry</button>
                        <button className="dream-but" onClick={handleFeeling} name='scared'>Scared</button>

                    <h2>Dream Type</h2>
                        <button className="dream-but" onClick={handleType} name='normalDream'>Normal Dream</button>
                        <button className="dream-but" onClick={handleType} name='dayDream'>Daydream</button>
                        <button className="dream-but" onClick={handleType} name='nightmare'>Nightmare</button>
                        <button className="dream-but" onClick={handleType} name='lucid'>Lucid</button>


                    <div className="buttons">
                        <button className="dream-enter-btn">Cancel</button>
                        <button className="dream-enter-btn" onClick={handleSubmit}>Submit</button>
                    </div>
                    

                </div>


            </div>
    )
}
