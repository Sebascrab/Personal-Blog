import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Menu = ({cat}) => {


    const [posts, setPosts] = useState([]);

    
    
    
    useEffect(() => {
        const fetchData = async () => {
            try{
                const res = await axios.get(`/posts/?cat=${cat}`)
                setPosts(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, [cat]);

    // const posts = [
    //     {
    //         id: 1, 
    //         title: "Cool Programing Stuff", 
    //         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    //         img:"https://c.pxhere.com/photos/4b/a8/work_typing_computer_notebook_programming_business_technology_internet-883504.jpg!d" 
    //     },
    //     {
    //         id: 2, 
    //         title: "Learning How to Code? ", 
    //         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    //         img: "https://c.pxhere.com/photos/74/63/business_cellphone_codes_coding_computer_data_desk_display-1366348.jpg!d" 
    //     },
    //     {
    //         id: 3, 
    //         title: "Tips and Tricks for C#", 
    //         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    //         img: "https://c.pxhere.com/photos/a9/1c/beverage_browsing_business_coffee_computer_connection_cup_desk-1522939.jpg!d"
    //     },
    //     {
    //         id: 4, 
    //         title: "Third-Party-API's", 
    //         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    //         img: "https://c.pxhere.com/photos/83/8e/camera_photography_lens_equipment_photographer_technology_digital_photographic-1074009.jpg!d" 
    //     },
        
    // ];


    return(
        <div className='menu'>
            <h1>Other Posts You  May Like</h1>
            {posts.map((post) => (
                <div className='post' key={post.id}>
                    <img src={`../upload/${post.img}`} alt="" />
                    <h2>{post.title}</h2>
                    <button>Read More</button>
                </div>
            ))}
        </div>
    )
}

export default Menu