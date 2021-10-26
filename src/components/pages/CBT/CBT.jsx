import React from 'react';
import Navbar from '../../Navbar/Navbar';
import './CBT.scss';
import { useParams } from 'react-router-dom';

const CBT = () => {

    const {exam} = useParams();

    return ( 
        <div className="cbt">
            <Navbar />
            <div className="cbtBody">
                <div className="timerBody">Timer</div>
                <div className="examBody">body</div>
            </div>
        </div>
     );
}
 
export default CBT;