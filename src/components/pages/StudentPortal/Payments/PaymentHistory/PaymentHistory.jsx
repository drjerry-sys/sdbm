import React from 'react';
import './PaymentHistory.scss';
import moment from 'moment';

const PaymentHistory = () => {
    const time = new Date()
    const allFees = [
        {id: 1, fee: 'School Fee', amount: 5000, datePaid: moment(time).startOf('ss').fromNow()},
        {id: 2, fee: 'Uniform', amount: 5000, datePaid: moment(time).startOf('ss').fromNow()},
        {id: 3, fee: 'Feeding', amount: 5000, datePaid: moment(time).startOf('ss').fromNow()},
    ];

    return ( 
        <div className="updates">
            {
                allFees.map((fee)=>(
                    <div className="card" key={fee.id}>
                        <span className="subject">{fee.fee}</span>
                        <hr />
                        <span>{fee.amount}</span>
                        <hr />
                        <div className="about">
                            <span>Date Paid: {fee.datePaid}</span>
                        </div>
                        <hr />
                    </div>
                ))
            }
        </div>
     );
}
 
export default PaymentHistory;