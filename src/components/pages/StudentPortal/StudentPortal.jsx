import React from 'react';
import Navbar from '../../Navbar/Navbar';

const StudentPortal = () => {
    return ( 
        <div className="studentPortal">
            <Navbar portalType="student" />
            <div className="portalTitle">
                <h3>Student Portal</h3>
            </div>
        </div>
     );
}
 
export default StudentPortal;