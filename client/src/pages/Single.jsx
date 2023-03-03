import React from 'react';

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
                        <img src={Edit} alt="edit button" />
                        <img src={Delete} alt="delete button" />
                    </div>
                </div>
            </div>
            <div className="menu">m</div>
        </div>
    )
}

export default Single