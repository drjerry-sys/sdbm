import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import SubForm from './SubForm';
import './RegForm.scss';

const RegForm = () => {

    return ( 
        <div className="regform">
            <Navbar />
            <div className="mainForm">
                <div className="formTitle"><span>Student Registration Form</span></div>
                <SubForm />
            </div>
            <Footer />
        </div>
     );
}
 
export default RegForm;