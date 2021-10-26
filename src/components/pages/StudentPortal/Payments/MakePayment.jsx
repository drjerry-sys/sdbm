import React, { useRef, useState, useEffect } from 'react';
import './MakePayment.scss';

const MakePayment = () => {
    const [fee, setFee] = useState('');

    return ( 
        <>
            <div style={{backgroundColor: 'white', width: '50%', height: '2px', margin: '10px auto'}}></div>
            <div className="makePayment">
                <select  id="">
                    <option value="">Select Payment</option>
                    <option value="school">School Fee</option>
                    <option value="uniform">Uniform Fee</option>
                    <option value="others">Others</option>
                </select>
                <input type="text" className="others" placeholder="specify others" />
                <input type="number" placeholder="Amount to Pay" />
                <input className="submit" type="submit" value="Pay Now" />
            </div>
        </>
     );
}
 
export default MakePayment;