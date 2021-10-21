import React from 'react';
import './Footer.scss';

const Footer = () => {
    return ( 
        <div className="footer">
            <div className="wrapper">
                <div className="first">
                    <span><b>Home</b> | school blog</span>
                </div>
                <div className="middle">
                    <span>National Anthem</span>
                    <span>School Anthem</span>
                </div>
                <div className="last">
                    <span>Our Passion</span>
                    <span>Our Mission</span>
                    <span>What we believe</span>
                </div>
            </div>
            <div className="copy">
                <span>copywright @ Essence</span>
            </div>
        </div>
     );
}
 
export default Footer;