import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
import Logo from "../images/Logo-Small.png";

const Navbar = () => {

    const { currentUser, logout } = useContext(AuthContext);


    


    return (
        <div className='navbar'>
            <div className="container">
                <div className="logo">
                    <Link to="/">
                        <img src={Logo}></img>
                    </Link>
                </div>
                <div className="links">
                    <Link className='link' to="/?cat=lifestyle">
                        <h6>Lifestyle</h6>
                    </Link>
                    <Link className='link' to="/?cat=fitness">
                        <h6>Fitness</h6>
                    </Link>
                    <Link className='link' to="/?cat=coding">
                        <h6>Coding</h6>
                    </Link>
                    <Link className='link' to="/?cat=news">
                        <h6>News</h6>
                    </Link>
                    <Link className='link' to="/?cat=travel">
                        <h6>Travel</h6>
                    </Link>
                    <Link className='link' to="/?cat=interests">
                        <h6>Interests</h6>
                    </Link>
                </div>
                <div className='user'>
                    <Link to='/user' className='user-name'>
                        {currentUser?.username}
                    </Link>
                    {currentUser ? (
                        <span onClick={logout}>Logout</span>
                    ) : (<Link className='link' to='/login'>
                        Login
                    </Link>
                    )}
                    <span className='write'>
                        <Link className='link' to="/write">Write</Link>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Navbar