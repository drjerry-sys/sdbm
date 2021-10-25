import React, { useState } from 'react';
import './Login.scss';
import logo from '../../../assets/images/myLogo.png';
import { Link } from 'react-router-dom';

const Login = () => {

    const [password, setPassword] = useState('');
    const [regNo, setRegNo] = useState('');
    const [title, setTitle] = useState(true);

    const regNoPlaceHolder = title ? "Registration No" : 'Staff Id';

    const handleSubmit = () => {
        alert(password+regNo+title)
    };

    return ( 
        <div className="login">
            <div className="top">
                <div className="img">
                    <img src={logo} alt="sdbm" />
                </div>
            </div>
            <div className="container">
                <h2>Login</h2>
                <div className="detailsWrapper">
                    <span className="title">{title ? 'student' : 'staff'}</span>
                    <form>
                        <input type="text" className="regDetails" placeholder={regNoPlaceHolder} value={regNo} onChange={(e)=>setRegNo(e.target.value)} />
                        <input type="password" className="regDetails" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                        <div className="choice">
                            <span>Login as:</span>
                            <input type="radio" checked={title} name="student" onChange={()=>setTitle(true)} /><span>student</span>
                            <input type="radio" checked={!title} name={false} onChange={()=>setTitle(false)} /><span>staff</span>
                        </div>
                        <button className="submit" onClick={handleSubmit}>submit</button>
                        <span className="forgot">forgot password? click to <Link to="/reset-password">reset password</Link></span>
                    </form>
                </div>
            </div>
            <div className="bottom">
                {/* footer */}
            </div>
        </div>
     );
}
 
export default Login;