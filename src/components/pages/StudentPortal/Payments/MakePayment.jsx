import React, { useRef, useState, useEffect } from 'react';
import './MakePayment.scss';

const MakePayment = () => {
    const [fee, setFee] = useState('');
    const others = useRef();

    const handleSelect = (e) => {
        setFee(e.target.value);
    };

    return ( 
        <div className="makePayment">
            <select  id="" onChange={(e)=>handleSelect(e)}>
                <option value="">Select Payment</option>
                <option value="school">School Fee</option>
                <option value="uniform">Uniform Fee</option>
                <option value="others">Others</option>
            </select>
            <input type="text" style={{display: 'none'}} ref={others} />
            <input type="number" placeholder="Amount to Pay" /> 
        </div>
     );
}
 
export default MakePayment;