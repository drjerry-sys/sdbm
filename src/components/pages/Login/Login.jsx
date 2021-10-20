import React from 'react';
import logo from '../../../assets/images/myLogo.png';
import { Link } from 'react-router-dom';

const Login = () => {

    return ( 
        <div className="login">
            <div className="top">
                <img src={logo} alt="sdbm" />
            </div>
            <div className="container">
                <span>Login</span>
                <div className="detailsWrapper">
                    <span>student</span>
                    <form>
                        <label htmlFor="regNo">Reg No:</label>
                        <input type="text" id="regNo" />
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" />
                        <input type="submit" value="submit" />
                        <span>forgot password? click to <Link to="/reset-password">reset password</Link></span>
                    </form>
                    <div className="choice">
                        <span>Login as:</span>
                        <button className="student">Student</button>
                        <button className="staff">Staff</button>
                    </div>
                </div>
            </div>
            <div className="bottom">
                {/* footer */}
            </div>
        </div>
     );
}
 
export default Login;