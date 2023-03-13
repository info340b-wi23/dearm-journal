import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';

export function JournalWrite(props) {


    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [symbol, setSymbol] = useState('');
    const [recognition, setRecognition] = useState('');
    const [feeling, setFeeling] = useState('');
    const [dreamType, setDreamtype] = useState('');
    const [imageFile, setImageFile] = useState(undefined);
    const [imagePreviewLocation, setImagePreviewLocation] = useState('../img/placeholder-img.webp');
    const [img, setImgUrl] = useState('../img/placeholder-img.webp');
   


    const handleImg = (event) => {
        event.preventDefault();
        if(event.target.files.length > 0 && event.target.files[0]) {
          const imageFile = event.target.files[0]
          setImageFile(imageFile);
          setImagePreviewLocation(URL.createObjectURL(imageFile));
        }
    }

    const handleImageUpload = async (event) => {

        event.preventDefault();

        const storage = getStorage();
        const imageRef = storageRef(storage, "dreamImg/"+Date.now()+".png");
    
        await uploadBytes(imageRef, imageFile)
        const publicUrl = await getDownloadURL(imageRef);
        console.log(publicUrl);
        setImgUrl(publicUrl);

    }

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
        console.log(img);
        props.howToAddDream(title, content, img, symbol, recognition);
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
                    <label className="journal-write-title" htmlFor="Title">Title:</label> 
                    <input type="text" name="title" className="title" onChange={handleTitile} value={title}/>
                    <label className="journal-write-content-header" htmlFor="Content">Content:</label>    
                    <input type="text" name="content" className="journal-write-content" onChange={handleContent} value={content}/>
                    <label className="journal-write-upload-label" htmlFor="Image Upload">Image Upload:</label> 
                    <img className="journal-write-upload-img" src={imagePreviewLocation} alt="dream image"/>
                    <input className="upload" type="file" name="image" id="imageUploadInput" onChange={handleImg}/>
                    <button className="journal-write-save-button" onClick={handleImageUpload}>Save</button>
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
