import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom'
import Menu from '../components/Menu'

import Edit from '../images/Edit-Icon.png';
import Delete from '../images/Delete-Icon-3.jpeg';
import axios from 'axios';
import moment from 'moment';
import { AuthContext } from '../context/authContext';

const Single = () => {

    const [post, setPost] = useState({});

    const location = useLocation()

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

    return (
        <div className='single'>
            <div className="content">
                <img src={post?.img} alt="" />
                <div className="user">
                    <img src={post.userImg} alt="profile" />
                    <div className="info">
                        <span>{post.username}</span>
                        <p>Posted {moment(post.date).fromNow()}</p>
                    </div>
                    {currentUser.username === post.username && (
                        <div className="edit">
                            <Link to={`/write?edit=2`}>
                                <img src={Edit} alt="edit button" />
                            </Link>
                            <img src={Delete} alt="delete button" />
                        </div>
                    )}
                </div>
                <h1>{post.title}</h1>
                <p>{post.desc}</p>
            </div>
            <Menu />
        </div>
    )
}

export default Single