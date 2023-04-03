
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useLocation,  } from 'react-router-dom';
import profilePic from '../images/Sebas-dog.jpeg'

const User = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('/posts')
                setPosts(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        fetchData();
    }, [])

    const location = useLocation();
    const userId = location.pathname;

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`/users/${userId}`)
                setUsers(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        fetchData();
    }, [])







    const getText = (html) => {
        const doc = new DOMParser().parseFromString(html, "text/html")
        return doc.body.textContent
    }



    return (
        <div className='user-page'>
            <div className='user-posts'>
                {posts.map((post) => (
                    <div className='user-post' key={post.id}>
                        <div className='post-img'>
                            <img src={`../upload/${post.img}`} alt="" />
                        </div>
                        <div className='post-content'>
                            <Link className='link' to={`/post/${post.id}`}>
                                <h1>{getText(post.title)}</h1>
                            </Link>
                            <p>{getText(post.desc)}</p>
                            <Link className='link' to={`/post/${post.id}`}>
                                <button value="userEdit">ReadMore</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            <div className='user-info'>
                <div className='profile-container'>
                    <span>User Info</span>
                        {users.map((user) => (
                    <div className="profile-info">
                            
                        <h3>{user.name}</h3>
                        <h5>Username: {user.username}</h5>
                        <h5>{user.email}</h5>
                        <Link to='/edit'>
                            <button>Edit</button>
                        </Link>
                    </div>
                        ))}
                </div>
            </div>

        </div>
    )

}

export default User