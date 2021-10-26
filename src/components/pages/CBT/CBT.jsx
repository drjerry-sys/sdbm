import React from 'react';
import Navbar from '../../Navbar/Navbar';
import './CBT.scss';
import { useParams } from 'react-router-dom';
import profilePic from '../../../assets/images/profile-pic.jpg';

const CBT = () => {

    const {exam} = useParams();

    return ( 
        <div className="cbt">
            <Navbar />
            <div className="cbtBody">
                <div className="timerBody">
                    <span>Passport</span>
                    <div className="profilePic">
                        <img src={profilePic} alt="profile pic" />
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <p>Timer</p>
                        <span className="timer">30m 00s</span>
                    </div>
                    <div className="profilePic examInfoWrpper">
                        <span className="examInfo">Exam Info</span>
                        <ul>
                            <li>Reg No: CHM/2018/019</li>
                            <li>Subject: Mathematics</li>
                            <li>Ques in Total: 100</li>
                        </ul>
                    </div>
                </div>
                <div className="examBody">
                    <span className="subject">Mathematics Examination</span>
                    <span className="instructions">Instructions: Ensure to attempt all question</span>
                    <div className="questions">
                        
                    </div>                    
                </div>
            </div>
        </div>
     );
}
 
export default CBT;