import React from 'react';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import './StaffPortal.scss';
import { Link, useParams } from 'react-router-dom';
import { Options, Updates, AllStudents, Attendance, StaffChat, Subjects, SetExam } from '.';

const StaffPortal = () => {

    const {option} = useParams();

    return ( 
        <div className="staffPortal">
            <Navbar portalType="staff" />
            <div className="mainPage">
                <div className="portalOptions">
                    <div className="buttonsGroup">
                        <Link to="/staff-portal/updates" className="groupBtn">Updates</Link>
                        <Link to="/staff-portal/set-exam" className="groupBtn">Set Exam/Test</Link>
                        <Link to="/staff-portal/all_students" className="groupBtn">All Students</Link>
                        <Link to="/staff-portal/subjects" className="groupBtn">Subjects/Books</Link>
                        <Link to="/staff-portal/attendance" className="groupBtn">Attendance</Link>
                        <Link to="/staff-portal/chat" className="groupBtn">Chat Room</Link>
                    </div>
                    <Options option={option} exam="test" />
                    <span className="currentTitle">Third Term 2018/2019</span>
                    { 
                        option === "updates" ? <Updates /> :
                        option === "payments" ? <AllStudents /> :
                        option === "attendance" ? <Attendance /> :
                        option === "chat" ? <StaffChat /> :
                        option === "subjects" ? <Subjects /> :
                        option === "set-exam" ? <SetExam /> : ''
                     }
                </div>
            </div>
            <Footer />
        </div>
     );
}
 
export default StaffPortal;