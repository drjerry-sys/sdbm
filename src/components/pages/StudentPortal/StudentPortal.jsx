import React, { useState } from 'react';
import Navbar from '../../Navbar/Navbar';
import { Link, useParams } from 'react-router-dom';
import './StudentPortal.scss';
import Footer from '../../Footer/Footer';
import { Options, TableForResults, Updates, Payments, Attendance, Chat, Subjects, CBT} from '.';

const StudentPortal = () => {

    const [optionSelected, setOptionSelected] = useState('updt');

    const {option} = useParams();

    const handleSelect = (value) => {
        setOptionSelected(value);
    }

    return ( 
        <>
            <Navbar portalType="student" />
            <div className="studentPortal">
                {/* <div className="portalTitle">
                    <p>Student Portal</p>
                </div> */}
                <div className="portalOptions">
                    <div className="buttonsGroup">
                        <Link to="/student-portal/updates" onClick={() => handleSelect('updt')} className="groupBtn">Updates</Link>
                        <Link to="/student-portal/results" onClick={() => handleSelect('res')} className="groupBtn">Results</Link>
                        <Link to="/student-portal/cbt" onClick={() => handleSelect('cbt')} className="groupBtn">Exam/Test</Link>
                        <Link to="/student-portal/payments" onClick={() => handleSelect('pay')} className="groupBtn">Payments</Link>
                        <Link to="/student-portal/subjects" onClick={() => handleSelect('sub')} className="groupBtn">Subjects/Books</Link>
                        <Link to="/student-portal/attendance" onClick={() => handleSelect('attend')} className="groupBtn">Attendance</Link>
                        <Link to="/student-portal/chat" onClick={() => handleSelect('chat')} className="groupBtn">Chat Room</Link>
                    </div>
                    <Options optionSelected={optionSelected} />
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