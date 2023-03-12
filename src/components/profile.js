import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { updateProfile } from 'firebase/auth';

export function Profile(props) {
    const displayName = props.currentUser.userName;
    const [imageFile, setImageFile] = useState(undefined);
    let initialURL = props.currentUser.userImg;
    const [imagePreviewLocation, setImagePreviewLocation] = useState(initialURL);

    const [bio, setBio] = useState('');
    const [status, setStatus] = useState('');
    const [showStatus, setShowStatus] = useState(true);
    const [showEdit, setShowEdit] = useState(false);


    const handleImg = (event) => {
        if(event.target.files.length > 0 && event.target.files[0]) {
          const imageFile = event.target.files[0]
          setImageFile(imageFile);
          setImagePreviewLocation(URL.createObjectURL(imageFile));
        }
    }

    const handleImageUpload = async (event) => {
    
        const storage = getStorage();
        const imageRef = storageRef(storage, "userImages/"+displayName);
    
        await uploadBytes(imageRef, imageFile)
        const publicUrl = await getDownloadURL(imageRef)
    
        updateProfile(props.currentUser, {photoURL: publicUrl});
    }
 
    const handleBio = (event) => {
        setBio(event.target.value);
    }
    
    const handleAdd = (event) => {
        setBio('');
        setStatus(bio);
        setShowStatus(false);
        setShowEdit(true);

    }

    const handleChange = (evemt) => {
        setShowStatus(true);
        setShowEdit(false);
    }

    const handleClear = (event) => {
        setBio('');
    }

    return (
        <main>
            <div className="p-info">

                <div className="mb-5 image-upload-form">
                    <img className="profile-img" src={imagePreviewLocation} alt="profile image"/>
                    
                    <input className="upload" type="file" name="image" id="imageUploadInput" onChange={handleImg}/>
                    <button className="" onClick={handleImageUpload}>Save</button>
                </div>


                <h2>Username: {displayName}</h2>


                <section className="filter-search">
                    <div>
                        <button className="profile-page-tab"><Link to="/journal">Dream Journal</Link></button>
                        <button className="profile-page-tab"><Link to="/journal/analyze">Dream Reports</Link></button>  
                    </div>
                </section>

                <h2 className="profile-bio">Bio {status}  
                { showEdit ? <button className="change-btn" onClick={handleChange}>Edit</button> : null }
                </h2>
                
                { showStatus ? 
                <div className="dream-profile-container">
                    <section id="createlist" className="style">
                        <label htmlFor="Status">Please put your bio below</label> 
                        <br></br>
                        <input type="status" name="status" className="status" onChange={handleBio} value={bio}/>
                        <br></br>
                        <button className='profile-button' onClick={handleAdd}>Add</button>
                        <button className='profile-button'onClick={handleClear}>Clear</button>
                    </section>
                </div>   
                : null }     
            </div> 
    </main>
    )
    
}