import React from 'react';
import './StudentPortal.scss';
import { Link } from 'react-router-dom';

const Options = ({ optionSelected }) => {

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
                        <Link className="subLink">Mark Attenndance</Link>
                        <Link className="subLink">Term History</Link>
                        <Link className="subLink">All History</Link>
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
     );
}
 
export default Options;