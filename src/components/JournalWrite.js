import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export function JournalWrite(props) {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [img, setImg] = useState('img/dream_pic7.jpg');  // joel mentioned we will cover this later
    const [symbol, setSymbol] = useState('');
    const [recognition, setRecognition] = useState('');
    const [feeling, setFeeling] = useState('');
    const [dreamType, setDreamtype] = useState('');

    const handleTitile = (event) => {
        setTitle(event.target.value);
    }

    const handleContent = (event) => {
        setContent(event.target.value);
    }

    const handleFeeling = (event) => {
        setSymbol(event.target.name);
        setFeeling(event.target.name);
    }

    const handleType = (event) => {
        setRecognition(event.target.name);
        setDreamtype(event.target.name);
    }

    const handleSubmit = (event) => {
        setTitle('');
        setContent('');
        setFeeling('');
        setDreamtype('');
        props.howToAddDream(title,content, img, symbol, recognition);
    }
    
    const handleClear = (event) => {
        setTitle('');
        setContent('');
        setFeeling('');
        setDreamtype('');
    }
    /* ask if <br></br> is acceptable to use */
    return(
        <div className="dream-entry-container">
                <form className="enter-dream"> 
                    <label htmlFor="Title">Title:</label> 
                    <input type="text" name="title" className="title" onChange={handleTitile} value={title}/>
                    <br></br> 
                    <br></br>
                    <label htmlFor="Content">Content:</label> 
                    <br></br>
                    <input type="text" name="content" className="content" onChange={handleContent} value={content}/>
                    <label htmlFor="Image Upload">Image Upload:</label> 
                    <input type="image" name="image" className="image" /> 
                </form>

                <div className="enter-dream-feelings">
                    <h2 className="dream-write-feelings">Feelings: {feeling}</h2> 
                        <button className="dream-button" onClick={handleFeeling} name='happy'>Happy</button>
                        <button className="dream-button" onClick={handleFeeling} name='natural'>Natural</button>
                        <button className="dream-button" onClick={handleFeeling} name='sad' >Sad</button>
                        <button className="dream-button" onClick={handleFeeling} name='angry' >Angry</button>
                        <button className="dream-button" onClick={handleFeeling} name='scared'>Scared</button>

                    <h2 className="dream-write-type">Dream Type: {dreamType}</h2>
                        <button className="dream-button" onClick={handleType} name='normalDream'>Normal Dream</button>
                        <button className="dream-button" onClick={handleType} name='dayDream'>Daydream</button>
                        <button className="dream-button" onClick={handleType} name='nightmare'>Nightmare</button>
                        <button className="dream-button" onClick={handleType} name='lucid'>Lucid</button>

                    <div className="buttons">
                        <button className="dream-enter-btn clear" onClick={handleClear}>Clear</button>
                        <button className="dream-enter-btn" ><Link to="/journal">Back</Link></button>
                        <button className="dream-enter-btn" onClick={handleSubmit}><Link to="/journal">Submit</Link></button>
                        
                    </div>
                </div>
            </div>
    )
}
