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
                    <img src={Logo} alt="logo" />
                </div>
                <div className="links">
                    <Link className='link' to="/?cat=art">
                        <h6>Art</h6>
                    </Link>
                    <Link className='link' to="/?cat=food">
                        <h6>Food</h6>
                    </Link>
                    <Link className='link' to="/?cat=Science">
                        <h6>Science</h6>
                    </Link>
                    <Link className='link' to="/?cat=Technology">
                        <h6>Technology</h6>
                    </Link>
                    <Link className='link' to="/?cat=Design">
                        <h6>Design</h6>
                    </Link>
                    <Link className='link' to="/?cat=cinema">
                        <h6>Cinema</h6>
                    </Link>
                    <span>{currentUser?.username}</span>
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