import React from 'react';
import './StaffPortal.scss';    
import { Link } from 'react-router-dom';

const Options = ({ option, exam }) => {

    const paper = exam === "exam" ? 'Exam' : "Test";

    return ( 
        <div className="portalSubOptions">
            {
                option === 'results' ? (
                    <>
                        <Link className="subLink">All Results</Link >
                        <Link className="subLink">Recent Term</Link >
                        <Link className="subLink">Recent Session</Link >
                    </>
                ) : option === 'cbt' ? (
                    <>
                        <Link className="subLink">{paper} Time Table</Link>
                        <Link className="subLink">Take {paper}</Link>
                        <Link className="subLink">Recent Session</Link>
                    </>
                ) : option === 'payments' ? (
                    <>
                        <Link className="subLink">Make Payments</Link>
                        <Link className="subLink">Payment History</Link>
                    </>
                ) : option === 'subjects' ? (
                    <>
                        <Link className="subLink">List of Books</Link>
                        <Link className="subLink">List of Subjects</Link>
                    </>
                ) : option === 'attendance' ? (
                    <>
                        <Link className="subLink">Mark Attenndance</Link>
                        <Link className="subLink">Term History</Link>
                        <Link className="subLink">All History</Link>
                    </>
                ) : option === 'chat' ? (
                    <>
                        <Link className="subLink">Chat Room</Link>
                        <Link className="subLink">Discussion Groups</Link>
                        <Link className="subLink">Recent Session</Link>
                    </>
                ) : option === 'updates' ? (
                    <>
                        <Link className="subLink">Notice</Link>
                        <Link className="subLink">Recent Updates</Link>
                        <Link className="subLink">Recent Session</Link>
                    </>
                ) : ''
            }
        </div>
     );
}
 
export default Options;