import React, { useState, useRef, useEffect } from 'react';
import Navbar from '../../Navbar/Navbar';
import { Link, useParams } from 'react-router-dom';
import './StudentPortal.scss';
import Footer from '../../Footer/Footer';
import { Options, TableForResults, Summary, RecentTerm, Updates, Payments, Attendance, Chat, Subjects, CBT} from '.';

const StudentPortal = () => {
    
    const { option, suboption } = useParams();
    
    const [isScrolled, setIsScrolled] = useState(false);
    
    window.onscroll = () => {
        setIsScrolled(window.pageYOffset);
        console.log(isScrolled)// not working
        return () => (window.onscroll = null);
    };

    return ( 
        <>
            <Navbar portalType="student" />
            <div className={isScrolled ? "studentPortal changedMargin" : "studentPortal"}>
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
                        option === 'results' ? (
                            <>
                                {
                                    suboption === "summary" ? <Summary />:
                                    suboption === "all_results" ? <TableForResults />:
                                    <RecentTerm />
                                }
                            </>
                        ) : 
                        option === "updates" ? <Updates /> :
                        option === "payments" ? <Payments /> :
                        option === "attendance" ? <Attendance /> :
                        option === "chat" ? <Chat /> :
                        option === "subjects" ? <Subjects /> :
                        option === "cbt" ? <CBT /> : <Updates />
                     }
                </div>
            </div>
            <Footer />
        </>
     );
}
 
export default StudentPortal;