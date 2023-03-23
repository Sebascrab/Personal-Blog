import React from 'react';
import profilePic from '../images/Sebas-dog.jpeg';

const Edit = () => {
    return (
        <div className='edit'>
            <div className='edit-container'>
                <img className='edit-img' src={profilePic} />
                <div className="profile-info">
                <form>
                    <label>
                        Name:
                        <input type='text' required></input>
                    </label>
                    <label>
                        Username:
                        <input type='text' required></input>
                    </label>
                    <label>
                        Password:
                        <input type='text' required></input>
                    </label>
                    <label>
                        email:
                        <input type='email' required></input>
                    </label>
                    <button>Save Changes</button>
                </form>
                </div>
            </div>
        </div>
    )
}

export default Edit