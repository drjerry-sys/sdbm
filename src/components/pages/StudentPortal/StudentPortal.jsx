import React from 'react';
import Navbar from '../../Navbar/Navbar';
import { Link } from 'react-router-dom';

const StudentPortal = () => {
    return ( 
        <div className="studentPortal">
            <Navbar portalType="student" />
            <div className="portalTitle">
                <p>Student Portal</p>
            </div>
            <div className="portalOptions">
                <div className="buttonsGroup">
                    <Link className="groupBtn">Results</Link>
                    <Link className="groupBtn">Exam/Test</Link>
                    <Link className="groupBtn">Payments</Link>
                    <Link className="groupBtn">Subjects/Books</Link>
                    <Link className="groupBtn">Attendance</Link>
                    <Link className="groupBtn">Chat Room</Link>
                    <Link className="groupBtn">Updates</Link>
                </div>
            </div>
        </div>
     );
}
 
export default StudentPortal;