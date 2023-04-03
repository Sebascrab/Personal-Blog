import {db} from '../db.js'
import jwt from 'jsonwebtoken';


// get single user
export const getUser = (req, res) => {
    const token = req.cookies.access_token
    if (!token) return res.status(401).json("Not Authenticated")

    jwt.verify(token, 'jwtkey', (err, userInfo) => {
        if (err) return res.status(403).json('Token is not valid');


    const q = "SELECT u.id, `username`, `email`, `name` FROM users u ";

    db.query(q, [req.params.id], (err, data) => {
        if (err) return res.status(500).json(err)

        return res.status(200).json(data)
    })
 });
}


// update single user
export const updateUser = (req, res) => {

    const token = req.cookies.access_token
    if (!token) return res.status(401).json("Not Authenticated")

    jwt.verify(token, 'jwtkey', (err, userInfo) => {
        if (err) return res.status(403).json('Token is not valid');

    const userId = req.params.id;
    const q = "UPDATE users SET `username`=?, `email`=?, `name`=? ";

    const values = [
        req.body.username, 
        req.body.email, 
        req.body.name,
    ];

    db.query(q, [...values, userId], (err, data) => {
        if (err) return res.status(500).json('Error found!')

        return res.json('User has been updated!')
    })
 });
}

