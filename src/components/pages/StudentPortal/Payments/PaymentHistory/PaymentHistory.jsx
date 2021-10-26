import React from 'react';
import './PaymentHistory.scss';
import moment from 'moment';

const PaymentHistory = () => {
    const time = new Date()
    const allUpdates = [
        {id: 1, subject: 'Outstandings', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In sapiente eligendi earum! Vel ut, officiis nisi expedita dolorum illo praesentium asperiores rem odio quibusdam magni temporibus cum delectus, qui ullam.', datePosted: moment(time).startOf('ss').fromNow(), postedBy: 'Principal',},
        {id: 2, subject: 'Outstandings', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In sapiente eligendi earum! Vel ut, officiis nisi expedita dolorum illo praesentium asperiores rem odio quibusdam magni temporibus cum delectus, qui ullam.', datePosted: moment(time).startOf('ss').fromNow(), postedBy: 'Principal',},
        {id: 3, subject: 'Outstandings', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In sapiente eligendi earum! Vel ut, officiis nisi expedita dolorum illo praesentium asperiores rem odio quibusdam magni temporibus cum delectus, qui ullam.', datePosted: moment(time).startOf('ss').fromNow(), postedBy: 'Principal',},
    ];

    return ( 
        <div className="updates">
            {
                allUpdates.map((update)=>(
                    <div className="card" key={update.id}>
                        <span className="subject">{update.subject}</span>
                        <hr />
                        <span>{update.content}</span>
                        <hr />
                        <div className="about">
                            <span>Posted By: {update.postedBy}</span>
                            <span>Date Posted: {update.datePosted}</span>
                        </div>
                        <hr />
                    </div>
                ))
            }
        </div>
     );
}
 
export default PaymentHistory;