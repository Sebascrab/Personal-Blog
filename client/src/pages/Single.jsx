import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Menu from '../components/Menu'


import axios from 'axios';
import moment from 'moment';
import { AuthContext } from '../context/authContext';

const Single = () => {

    const [post, setPost] = useState({});

    const location = useLocation();
    const navigate = useNavigate();

    const postId = location.pathname.split("/")[2]

    const { currentUser } = useContext(AuthContext)


    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`/posts/${postId}`)
                setPost(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, [postId]);

    const handleDelete = async () => {
        try {
            await axios.delete(`/posts/${postId}`)
            navigate('/')
        } catch (err) {
            console.log(err);
        }
    }

    
   

    const getText = (html) => {
        const doc = new DOMParser().parseFromString(html, "text/html")
        return doc.body.textContent
    }

    return (
        <div className='single'>
            <div className="content">
                <img src={`../upload/${post?.img}`} alt="" />
                <div className="user">
                    {post.userImg &&
                        <img
                            src={post.userImg}
                            alt="profile" />
                    }
                    <div className="info">
                        <span>{post.name}</span><br></br>
                        <span className='user-name'>@{post.username}</span>
                        <p className='posted'>Posted {moment(post.date).fromNow()}</p>
                    </div>
                    {currentUser.username === post.username && (
                        <div className="edit">
                            <Link to={`/write?edit=2`} state={post} >
                                <button className='edit-btn'>
                                    Edit
                                </button>
                            </Link>
                            <button className="delete-btn" onClick={handleDelete}>
                                Delete
                            </button>
                        </div>
                    )}
                </div>
                <div className='post-body'>
                    <h1>{getText(post.title)}</h1>
                    <p>{getText(post.desc)}</p>
                </div>
            </div>
            <Menu cat={post.cat} />
        </div>
    )
}

export default Single