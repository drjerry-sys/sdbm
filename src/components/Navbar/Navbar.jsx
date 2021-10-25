import React, { useState } from 'react';
import './Navbar.scss';
import profilePic from '../../assets/images/profile-pic.jpg';
import { Link } from 'react-router-dom';

const Navbar = ({ portalType }) => {

    const personnel = portalType === 'student' ? 'Student Portal' : portalType === 'staff' ? 'Staff Portal' : portalType === 'admin' && 'Admin Portal';
    const studentStaffClass = portalType === 'student' ? 'class' : portalType === 'staff' && 'Teacher for';

    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset > 78 ? true : false);
        return () => (window.onscroll = null);
    };

    return ( 
        <div className="navbar">
            <div className="top">
                <Link to="/" className="topLogo"><span>Essence</span></Link>
                <span style={{color: 'white', display: 'flex', alignItems: 'center'}}>
                    {personnel} 
                </span>
                <div className="profile">
                    <div className="moreContents">
                        <span className="optChoice">Home</span>
                        <div className="profileContent">
                            <span>Home</span>
                            <span>Settings</span>
                            <span>Log Out</span>
                        </div>
                    </div>
                    <div className="profile_pic">
                        <img src={profilePic} alt="profile pic" />
                    </div>
                </div>
            </div>
            {
                portalType && !isScrolled && (
                    <div className="nav-bottom">
                        <div className="studentInfo">
                            <span>status: online</span>
                            <span>{studentStaffClass}: JSS 1A</span>
                            <span>current term: 2nd</span>
                            <span>current session: 2018/2019</span>
                        </div>
                        <span className="nameSpan">Adedeji Jeremiah Obaloluwa</span>
                        <div className="reg_no">
                            <div className="nav-id"><span>ID</span></div>
                            <div className="nav-id-no"><span>STD/2018/007</span></div>
                        </div>
                        <div className="profilePic">
                            <img src={profilePic} alt="profile pic" />
                        </div>
                    </div>
                )
            }
        </div>
     );
}
 
export default Navbar;