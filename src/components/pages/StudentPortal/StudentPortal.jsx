import React from 'react';
import Navbar from '../../Navbar/Navbar';

const StudentPortal = () => {
    return ( 
        <div className="studentPortal">
            <Navbar portalType="student" />
            <div className="portalTitle">
                <p>Student Portal</p>
            </div>
            <div className="portalOptions">
                <ul>
                    <li>Results</li>
                    <li>Exam/Test</li>
                    <li>Payments</li>
                    <li>Subjects/Books</li>
                    <li>Attendance</li>
                    <li>Chat Room</li>
                    <li>Updates</li>
                </ul>
            </div>
        </div>
     );
}
 
export default StudentPortal;