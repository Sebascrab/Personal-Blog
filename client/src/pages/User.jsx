
import axios from 'axios';
import React, {useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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



    const getText = (html) => {
        const doc = new DOMParser().parseFromString(html, "text/html")
        return doc.body.textContent
    }

    return (
        <div className='user-page'>
            <div className='user-posts'>
                {posts.map((post) => (
                    <div className='post' key={post.id}>
                        <div className='img'>
                            <img src={`../upload/${post.img}`} alt=""/>
                        </div>
                        <div className='content'>
                            <Link className='link' to={`/post/${post.id}`}>
                                <h1>{getText(post.title)}</h1>
                            </Link>
                            <p>{getText(post.desc)}</p>
                            <Link className='link' to={`/post/${post.id}`}>
                                <button>ReadMore</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            <div className='user-info'>

            </div>

        </div>
    )
}

export default User