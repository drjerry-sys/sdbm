import React, { useState } from 'react';
import Navbar from '../../Navbar/Navbar';
import { Link, useParams } from 'react-router-dom';
import './StudentPortal.scss';
import Footer from '../../Footer/Footer';
import { Options, TableForResults, Updates, Payments, Attendance, Chat, Subjects, CBT} from '.';

const StudentPortal = () => {
    
    const {option} = useParams();

    return ( 
        <>
            <Navbar portalType="student" />
            <div className="studentPortal">
                <div className="portalOptions">
                    <div className="buttonsGroup">
                        <Link to="/student-portal/updates" className="groupBtn">Updates</Link>
                        <Link to="/student-portal/results" className="groupBtn">Results</Link>
                        <Link to="/student-portal/cbt" className="groupBtn">Exam/Test</Link>
                        <Link to="/student-portal/payments" className="groupBtn">Payments</Link>
                        <Link to="/student-portal/subjects" className="groupBtn">Subjects/Books</Link>
                        <Link to="/student-portal/attendance" className="groupBtn">Attendance</Link>
                        <Link to="/student-portal/chat" className="groupBtn">Chat Room</Link>
                    </div>
                    <Options option={option} exam="test" />
                    <span className="currentTitle">Third Term 2018/2019</span>
                    { 
                        option === 'results' ? <TableForResults /> : 
                        option === "updates" ? <Updates /> :
                        option === "payments" ? <Payments /> :
                        option === "attendance" ? <Attendance /> :
                        option === "chat" ? <Chat /> :
                        option === "subjects" ? <Subjects /> :
                        option === "cbt" ? <CBT /> : ''
                     }
                </div>
            </div>
            <Footer />
        </>
     );
}
 
export default StudentPortal;