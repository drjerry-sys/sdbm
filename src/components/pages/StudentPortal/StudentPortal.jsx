import React, { useState } from 'react';
import Navbar from '../../Navbar/Navbar';
import { Link } from 'react-router-dom';
import './StudentPortal.scss';

const StudentPortal = () => {

    const [optionSelected, setOptionSelected] = useState('updt');

    const handleSelect = (value) => {
        setOptionSelected(value)
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
                        <Link to="/student-portal/payment" onClick={() => handleSelect('pay')} className="groupBtn">Payments</Link>
                        <Link to="/student-portal/subjects" onClick={() => handleSelect('sub')} className="groupBtn">Subjects/Books</Link>
                        <Link to="/student-portal/attendance" onClick={() => handleSelect('attend')} className="groupBtn">Attendance</Link>
                        <Link to="/student-portal/chat" onClick={() => handleSelect('chat')} className="groupBtn">Chat Room</Link>
                    </div>
                    <div className="portalSubOptions">
                        {
                            optionSelected === 'res' ? (
                                <>
                                    <Link className="subLink">All Results</Link >
                                    <Link className="subLink">Recent Term</Link >
                                    <Link className="subLink">Recent Session</Link >
                                </>
                            ) : optionSelected === 'cbt' ? (
                                <>
                                    <Link className="subLink">All Results</Link>
                                    <Link className="subLink">Recent Term</Link>
                                    <Link className="subLink">Recent Session</Link>
                                </>
                            ) : optionSelected === 'pay' ? (
                                <>
                                    <Link className="subLink">All Results</Link>
                                    <Link className="subLink">Recent Term</Link>
                                    <Link className="subLink">Recent Session</Link>
                                </>
                            ) : optionSelected === 'sub' ? (
                                <>
                                    <Link className="subLink">All Results</Link>
                                    <Link className="subLink">Recent Term</Link>
                                    <Link className="subLink">Recent Session</Link>
                                </>
                            ) : optionSelected === 'attend' ? (
                                <>
                                    <Link className="subLink">All Results</Link>
                                    <Link className="subLink">Recent Term</Link>
                                    <Link className="subLink">Recent Session</Link>
                                </>
                            ) : optionSelected === 'chat' ? (
                                <>
                                    <Link className="subLink">All Results</Link>
                                    <Link className="subLink">Recent Term</Link>
                                    <Link className="subLink">Recent Session</Link>
                                </>
                            ) : optionSelected === 'updt' ? (
                                <>
                                    <Link className="subLink">Notice</Link>
                                    <Link className="subLink">Recent Updates</Link>
                                    <Link className="subLink">Recent Session</Link>
                                </>
                            ) : ''
                        }
                    </div>
                    <span className="currentTitle">Third Term 2018/2019</span>
                    <table>
                        <tr>
                            <th>S/N</th>
                            <th>Subjects</th>
                            <th>Test</th>
                            <th>Exam</th>
                            <th>Grade</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Sanni</td>
                            <td>Adetayo</td>
                            <td>Exam</td>
                            <td>A+</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Sanni</td>
                            <td>Adetayo</td>
                            <td>Exam</td>
                            <td>A+</td>
                        </tr>
                    </table>
                </div>
            </div>
        </>
     );
}
 
export default StudentPortal;