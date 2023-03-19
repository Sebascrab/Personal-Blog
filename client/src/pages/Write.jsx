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
                    <ReactQuill className="editor" theme="snow" value={value} onChange={setValue} />
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
                        <input type="radio" checked={cat === "art"} name="cat" value="art" id="art" onChange={e => setCat(e.target.value)} />
                        <label htmlFor="art">ART</label>
                    </div>
                    <div className="cat">
                        <input type="radio" checked={cat === "food"} name="cat" value="food" id="food" onChange={e => setCat(e.target.value)} />
                        <label htmlFor="art">Food</label>
                    </div>
                    <div className="cat">
                        <input type="radio" checked={cat === "science"} name="cat" value="science" id="science" onChange={e => setCat(e.target.value)} />
                        <label htmlFor="art">Science</label>
                    </div>
                    <div className="cat">
                        <input type="radio" checked={cat === "technology"} name="cat" value="technology" id="design" onChange={e => setCat(e.target.value)} />
                        <label htmlFor="art">Technology</label>
                    </div>
                    <div className="cat">
                        <input type="radio" checked={cat === "design"} name="cat" value="design" id="design" onChange={e => setCat(e.target.value)} />
                        <label htmlFor="art">Design</label>
                    </div>
                    <div className="cat">
                        <input type="radio" name="cat" checked={cat === "cinema"} value="cinema" id="cinema" onChange={e => setCat(e.target.value)} />
                        <label htmlFor="art">Cinema</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Write