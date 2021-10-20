import React from 'react';
import './Navbar.scss';
import profilePic from '../../assets/images/profile-pic.jpg';
import { Link } from 'react-router-dom';

const Navbar = ({ portalType }) => {
    return ( 
        <div className="navbar">
            <div className="top">
                <span className="topLogo">Essence</span>
                <div className="profile">
                    <div className="profile_pic">
                        <img src={profilePic} alt="profile pic" />
                    </div>
                    <div className="moreContents">
                        <span className="optChoice">Home</span>
                        <div className="profileContent">
                            <span>Home</span>
                            <span>Settings</span>
                            <span>Log Out</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="nav-bottom">
                <div className="studentInfo">
                    <span>status: online</span>
                    <span>class: JSS 1A</span>
                    <span>current term: 2nd</span>
                    <span>current session: 2018/2019</span>
                </div>
                <span className="nameSpan">Adedeji Jeremiah Obaloluwa</span>
                <div className="reg_no">
                    <div className="nav-id"><span>ID</span></div>
                    <div className="nav-id-no"><span>CHM/2018/007</span></div>
                </div>
                <div className="profilePic">
                    <img src={profilePic} alt="profile pic" />
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;