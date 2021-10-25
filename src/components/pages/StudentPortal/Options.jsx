import React from 'react';
import './StudentPortal.scss';
import { Link, useParams } from 'react-router-dom';
import { CurrentUpdates, RecentUpdates, UpdateHistory } from './SubOption';

const Options = ({ option, exam }) => {

    const paper = exam === "exam" ? 'Exam' : "Test";
    const suboption = useParams();

    return ( 
        <div className="portalSubOptions">
            {
                option === 'results' ? (
                    <>
                        <Link to="/student-portal/results/recent" className="subLink">Recent Term</Link >
                        <Link to="/student-portal/results/all_results" className="subLink">All Results</Link >
                        <Link to="/student-portal/results/summary" className="subLink">Summary</Link >
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
                        <Link to="/student-portal/updates/current-notice" className="subLink">Notice</Link>
                        <Link to="/student-portal/updates/recent-notice" className="subLink">Recent Updates</Link>
                        <Link to="/student-portal/updates/updates-history" className="subLink">Updates History</Link>
                    </>
                ) : ''
            }
        </div>
     );
}
 
export default Options;