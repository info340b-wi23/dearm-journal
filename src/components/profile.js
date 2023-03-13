import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { updateProfile } from 'firebase/auth';
import { Alert } from 'react-bootstrap';

export function Profile(props) {
    const displayName = props.currentUser.userName;
    const [imageFile, setImageFile] = useState(undefined);
    let initialURL = props.currentUser.userImg;
    const [imagePreviewLocation, setImagePreviewLocation] = useState(initialURL);
    const [alertMessage, setAlertMessage] = useState(null);
    const [loading, setLoading] = useState(false);


    const handleImg = (event) => {
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
            const imageRef = storageRef(storage, "userImages/"+displayName);
            await uploadBytes(imageRef, imageFile)
            const publicUrl = await getDownloadURL(imageRef);
            setLoading(false);
            updateProfile(props.currentUser, {photoURL: publicUrl});
        }
        catch (error) {
            setAlertMessage(error.message);
        }
    }

    return (
        <main>
            {alertMessage &&
                <Alert variant="danger" dismissible onClose={() => setAlertMessage(null)}>
                    {alertMessage}
                </Alert>
            }
            <div className="p-info">
                <div className='info-handle'>
                    <img className="profile-picture" src={imagePreviewLocation} alt="profile image"/>
                    {loading && <p>loading...</p>}
                    <h2 className="username"> {displayName}</h2>
                    <div>
                        <input className="upload" type="file" name="image" id="imageUploadInput" onChange={handleImg}/>
                        <button className="profile-save" onClick={handleImageUpload}>Save</button>
                    </div>
                   
                </div>

                <section className="filter-search">
                    <div>
                        <button className="profile-page-tab"><Link to="/journal">Dream Journal</Link></button>
                        <button className="profile-page-tab"><Link to="/journal/analyze">Dream Reports</Link></button>  
                    </div>
                </section>
            </div> 
    </main>
    )
    
}