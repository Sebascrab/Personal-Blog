import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import profilePic from '../images/Sebas-dog.jpeg';

const Edit = () => {

    const [inputs, setInputs] = useState({
        name: "",
        username: "",
        email: "",  
    });

    const [err, setError] = useState(null);
    const navigate = useNavigate()
    const handleChange = e => {
        setInputs(prev => ({prev, [e.target.name]: e.target.value}))
    }

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            await axios.put("/users/updateUser", inputs)
            navigate('/user');
        } catch (err) {
            setError(err.response.data)
        }
    }

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
                        Email
                        <input type='email' required></input>
                    </label>
                    <Link to="/user">
                    <button  onClick={handleSubmit} className='save-btn'>Save Changes</button>
                    </Link>
                </form>
                </div>
            </div>
        </div>
    )
}

export default Edit