import React from 'react';
import { Link} from 'react-router-dom';
import Logo from "../images/Logo-Small.png";

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="container">
                <div className="logo">
                    <img src={Logo} alt="logo" />
                </div>
                <div className="links">
                    <Link className='link' to="/?cat=art">
                        <h6>ART</h6>
                    </Link>
                    <Link className='link' to="/?cat=food">
                        <h6>FOOD</h6>
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
                    <span>John</span>
                    <span>Logout</span>
                    <span className='write'>
                        <Link className='link' to="/write">Write</Link>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Navbar