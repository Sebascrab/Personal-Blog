import React from 'react';
import { Link } from 'react-router-dom'
import Menu from '../components/Menu'

import Edit from '../images/Edit-Icon.png';
import Delete from '../images/Delete-Icon-3.jpeg';

const Single = () => {
    return (
        <div className='single'>
            <div className="content">
                <img src="https://c.pxhere.com/photos/83/8e/camera_photography_lens_equipment_photographer_technology_digital_photographic-1074009.jpg!d" alt="post image" />
                <div className="user">
                    <img src="https://c.pxhere.com/photos/a1/8c/airplane_aircraft_avi_o_buero_aeroclube_aeroclubedepernambuco_puaft_aerobuero-422249.jpg!d" alt="profile picture" />
                    <div className="info">
                        <span>John</span>
                        <p>Posted 2 days ago</p>
                    </div>
                    <div className="edit">
                        <Link to={`/write?edit=2`}>
                        <img src={Edit} alt="edit button" />
                        </Link>
                        <img src={Delete} alt="delete button" />
                    </div>
                </div>
                <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
                    <br />
                    <br />
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                    </p>
                </p>
            </div>
            <Menu />
        </div>
    )
}

export default Single