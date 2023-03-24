import React from 'react';
import profilePic from '../images/Sebas-dog.jpeg';

const Edit = () => {
    return (
        <div className='edit'>
            <div className='edit-container'>
                <img className='edit-img' src={profilePic} />
                <div className="profile-info">
                <form className='profile-form'>
                    <label className='edit-label'>
                        Name
                        <input type='text' required></input>
                    </label>
                    <label className='edit-label'>
                        Username
                        <input type='text' required></input>
                    </label>
                    <label className='edit-label'>
                        Password
                        <input type='text' required></input>
                    </label>
                    <label className='edit-label'>
                        Email
                        <input type='email' required></input>
                    </label>
                    <button className='save-btn'>Save Changes</button>
                </form>
                </div>
            </div>
        </div>
    )
}

export default Edit