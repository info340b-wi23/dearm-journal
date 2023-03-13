import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { Alert } from 'react-bootstrap';

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
    const [alertMessage, setAlertMessage] = useState(null);
    const [loading, setLoading] = useState(false);

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
        setLoading(true);
        try {
            const storage = getStorage();
            const imageRef = storageRef(storage, "dreamImg/"+Date.now()+".png");
            await uploadBytes(imageRef, imageFile);
            const publicUrl = await getDownloadURL(imageRef);
            setLoading(false);
            setImgUrl(publicUrl);
        }
        catch (error) {
            setAlertMessage(error.message);
        }
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
        props.howToAddDream(title, content, img, symbol, recognition);
    }
    
    const handleClear = (event) => {
        setTitle('');
        setContent('');
        setFeeling('');
        setDreamtype('');
    }
    
    return(
        <div>
            {alertMessage &&
                <Alert variant="danger" dismissible onClose={() => setAlertMessage(null)}>
                    {alertMessage}
                </Alert>
            }

            <div className="dream-entry-container">
                <form className="enter-dream"> 
                    <label className="journal-write-title" htmlFor="Title">Title:</label> 
                    <input type="text" name="title" className="title" onChange={handleTitile} value={title}/>
                    <label className="journal-write-content-header" htmlFor="Content">Content:</label> 
                    <input type="text" name="content" className="journal-write-content" onChange={handleContent} value={content}/>
                    <label className="journal-write-upload-label" htmlFor="Image Upload">Image Upload:</label> 
                    <img className="journal-write-upload-img" src={imagePreviewLocation} alt="dream entry"/>
                    {loading && <p>loading...</p>}
                    <input className="upload" type="file" name="image" onChange={handleImg}/>
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
        </div>
    )
}
