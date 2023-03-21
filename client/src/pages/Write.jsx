import React, { useState } from 'react';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import moment from 'moment';


const Write = () => {

    const state = useLocation().state

    const [value, setValue] = useState(state?.title || "");
    const [title, setTitle] = useState(state?.desc || "");
    const [file, setFile] = useState(null);
    const [cat, setCat] = useState(state?.cat || "");

    const navigate = useNavigate();

    const upload = async () => {

        try {
            const formData = new FormData();
            formData.append('file', file)
            const res = await axios.post('/upload', formData)
            return res.data
        } catch (err) {
            console.log(err)
        }
    }

    const handleClick = async e => {
        e.preventDefault()
        const imgUrl = await upload();

        try {
            state ? await axios.put(`/posts/${state.id}`, {
                title, desc: value, cat, img: file ? imgUrl : ""
            }) : await axios.post(`/posts/`, {
                title,
                 desc: value, 
                 cat,
                  img: file ? 
                  imgUrl : "", 
                  date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")
            });
            navigate('/')
        } catch (err) {
            console.log(err)
        }
    }

    const getText = (html) => {
        const doc = new DOMParser().parseFromString(html, "text/html")
        return doc.body.textContent
    }

    return (
        <div className='add'>
            <div className='content'>
                <input type="text" value={getText(title)} placeholder='Title' onChange={e => setTitle(e.target.value)} />
                <div className="editorContainer">
                    <ReactQuill className="editor" theme="snow" placeholder='Blog Body' value={value} onChange={setValue} />
                </div>
            </div>
            <div className='menu'>
                <div className="item">
                    <h1>Publish</h1>
                    {/* <span>
                        <b>Status: </b> Draft
                    </span>
                    <span>
                        <b>Visibility: </b> Public
                    </span> */}
                    
                    {/* <label className='file' htmlFor="file">Upload Image</label> */}
                    <input type="file" id="file" name="" className='choose-file' onChange={e => setFile(e.target.files[0])} />
                    <div></div>
                    <div className='buttons'>
                        {/* <button>Save as a draft</button> */}
                        <button onClick={handleClick}>Publish Blog</button>
                    </div>
                </div>
                <div className="item">
                    <h1>Category</h1>
                    <div className="cat">
                        <input type="radio" checked={cat === "lifestyle"} name="cat" value="lifestyle" id="lifestyle" onChange={e => setCat(e.target.value)} />
                        <label htmlFor="art">Lifestyle</label>
                    </div>
                    <div className="cat">
                        <input type="radio" checked={cat === "fitness"} name="cat" value="fitness" id="fitness" onChange={e => setCat(e.target.value)} />
                        <label htmlFor="art">Fitness</label>
                    </div>
                    <div className="cat">
                        <input type="radio" checked={cat === "coding"} name="cat" value="coding" id="coding" onChange={e => setCat(e.target.value)} />
                        <label htmlFor="art">Coding</label>
                    </div>
                    <div className="cat">
                        <input type="radio" checked={cat === "news"} name="cat" value="news" id="news" onChange={e => setCat(e.target.value)} />
                        <label htmlFor="art">News</label>
                    </div>
                    <div className="cat">
                        <input type="radio" checked={cat === "travel"} name="cat" value="travel" id="travel" onChange={e => setCat(e.target.value)} />
                        <label htmlFor="art">Travel</label>
                    </div>
                    <div className="cat">
                        <input type="radio" checked={cat === "interests"} name="cat"  value="interests" id="interests" onChange={e => setCat(e.target.value)} />
                        <label htmlFor="art">Interests</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Write