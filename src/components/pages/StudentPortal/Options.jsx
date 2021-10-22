import React from 'react';
import './StudentPortal.scss';
import { Link } from 'react-router-dom';

const Options = ({ optionSelected, exam }) => {

    const paper = exam === "exam" ? 'Exam' : "Test";

    return ( 
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
                        <Link className="subLink">{paper} Time Table</Link>
                        <Link className="subLink">Take {paper}</Link>
                        <Link className="subLink">Recent Session</Link>
                    </>
                ) : optionSelected === 'pay' ? (
                    <>
                        <Link className="subLink">Make Payments</Link>
                        <Link className="subLink">Payment History</Link>
                    </>
                ) : optionSelected === 'sub' ? (
                    <>
                        <Link className="subLink">List of Books</Link>
                        <Link className="subLink">List of Subjects</Link>
                    </>
                ) : optionSelected === 'attend' ? (
                    <>
                        <Link className="subLink">Mark Attenndance</Link>
                        <Link className="subLink">Term History</Link>
                        <Link className="subLink">All History</Link>
                    </>
                ) : optionSelected === 'chat' ? (
                    <>
                        <Link className="subLink">Chat Room</Link>
                        <Link className="subLink">Discussion Groups</Link>
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
     );
}
 
export default Options;