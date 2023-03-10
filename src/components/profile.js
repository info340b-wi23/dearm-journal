import React, { useState } from 'react';
import { FaMeh, FaSmile, FaSadTear} from "react-icons/fa";
import { Link } from 'react-router-dom';

export function Profile(props) {

    const [bio, setBio] = useState('');
    const [status, setStatus] = useState('');
    const [showStatus, setShowStatus] = useState(true);
    const [showEdit, setShowEdit] = useState(false)
 
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
                <img className="profile-picture" src="img/avatar.png"/>
                <form className="enter-profile">
                    <label htmlFor="Name">Name:</label> 
                    <input type="text" name="name" className="name"/>
                    <label htmlFor="Username">Username:</label> 
                    <input type="text" name="username" className="username"/>
                </form>
                <section className="filter-search">
                    <div>
                        <button className="tab"><Link to="/journal">Dream Journal</Link></button>
                        <button className="tab"><Link to="/journal/analyze">Dream Reports</Link></button>          
                    </div>
                </section>

                <h2>Bio: {status}  
                { showEdit ? <button className="change-btn" onClick={handleChange}>Edit</button> : null }</h2>
                
                { showStatus ? 
                <div className="dream-profile-container">
                    <section id="createlist" className="style">
                        <label htmlFor="Status">Please put your bio Below</label> 
                        <input type="status" name="status" className="status" onChange={handleBio} value={bio}/>
                        <button className='profile-but' onClick={handleAdd}>Add</button>
                        <button className='profile-but'onClick={handleClear}>Clear</button>
                    </section>
                </div>   
                : null }     
            </div> 
    </main>
    )
    
}