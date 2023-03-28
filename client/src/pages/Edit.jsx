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
        setInputs(prev => ({...prev, [e.target.name]: e.target.value}))
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
                        <input type='text' name="name" required onChange={handleChange}></input>
                    </label>
                    <label className='edit-label'>
                        Username
                        <input type='text' name="username" required onChange={handleChange}></input>
                    </label>
                    <label className='edit-label'>
                        Email
                        <input type='email' name='email' required onChange={handleChange}></input>
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