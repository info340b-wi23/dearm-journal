import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { updateProfile } from 'firebase/auth';

export function Profile(props) {
    const displayName = props.currentUser.userName;
    const [imageFile, setImageFile] = useState(undefined);
    let initialURL = props.currentUser.userImg;
    const [imagePreviewLocation, setImagePreviewLocation] = useState(initialURL);



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

    return (
        <main>
            <div className="p-info">
            
                <div className='info-handle'>
                    <img className="profile-picture" src={imagePreviewLocation} alt="profile image"/>
                    
                    <h2 className="username"> {displayName}</h2>
                    <div>
                        <input className="upload" type="file" name="image" id="imageUploadInput" onChange={handleImg}/>
                        <button onClick={handleImageUpload}>Save</button>
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