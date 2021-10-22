import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './RegForm.scss';

const RegForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e)
    }

    return ( 
        <div className="regform">
            <Navbar />
            <div className="mainForm">
                <div className="formTitle"><span>Student Registration Form</span></div>
                <form className="formBody" onSubmit={(e)=>handleSubmit(e)}>
                    <span>please fill this form with the correct details. some information might not be editable</span>
                    <div className="identitySection">
                        <span>Name and Identity</span>
                        <input type="text" placeholder="Surname" />
                        <input type="text" placeholder="First Name" />
                        <input type="text" placeholder="Last Name" />
                        <input type="date" className="dob" />
                        <select name="" id="">
                            <option value="nigeria">Nigeria</option>
                            <option value="ghana">Ghana</option>
                            <option value="egypt">Egypt</option>
                        </select>
                        <select name="" id="">
                            <option value="nigeria">Oyo</option>
                            <option value="ghana">Osun</option>
                            <option value="egypt">Ekiti</option>
                        </select>
                        <input type="text" className="city" placeholder="city" />
                        <input type="text" className="lga" placeholder="L.G.A" />
                        <input type="text" className="address" placeholder="Street and Home Address" />
                        <input type="email" className="email" />
                        <input type="tel" placeholder="phone no" />
                        <div className="gender">
                            <input type="radio" name="gender" /> Male
                            <input type="radio" name="gender" /> Female
                        </div>
                    </div>
                    <div className="parent">
                        <span>Parent/Guidian</span>
                        <input type="text" placeholder="Mother Maiden Name" />
                        <input type="text" placeholder="Father Name" />
                        <input type="text" placeholder="Mother Name" />
                    </div>
                    <div className="next-of-kin">
                        <span>Next of Kin</span>
                        <input type="text" placeholder="Surname" />
                        <input type="text" placeholder="First Name" />
                        <input type="email" placeholder="Email" />
                        <input type="tel" placeholder="phone no" />
                        <input type="text" className="dob" placeholder="Relationship" />
                    </div>
                    <div className="educational-background">
                        <span>Educational Background</span>
                        <select name="" id="">
                            <option value="">class applying for</option>
                            <option value="">JSS 1</option>
                            <option value="">JSS 2</option>
                            <option value="">JSS 3</option>
                            <option value="">SSS 1</option>
                            <option value="">SSS 2</option>
                            <option value="">SSS 3</option>
                        </select>
                        <input type="text" placeholder="First Name" />
                        <input type="email" placeholder="Email" />
                        <input type="tel" placeholder="phone no" />
                        <input type="text" className="dob" placeholder="Relationship" />
                    </div>
                    <div className="fileUpload">
                        <span>File Upload</span>
                        <div className="jss1">
                            <span>For JSS 1</span>
                            <label htmlFor="commonEntrance">Common Entrance</label>
                            <input type="file" name="commonEntrance" />
                            <label htmlFor="lastResult">Third Term Result</label>
                            <input type="file" name="lastResult" />
                        </div>
                        <div className="sss1">
                            <span>For SSS 1</span>
                            <label htmlFor="j3result">JSS 3 Results</label>
                            <input type="file" name="j3result" />
                            <label htmlFor="lastResult">Third Term Result</label>
                            <input type="file" name="lastResult" />
                        </div>
                        <div className="others">
                            <span>Others</span>
                            <label htmlFor="lastResult">Third Term Result</label>
                            <input type="file" name="lastResult" />
                            <label htmlFor="principalSign">Principal Signature</label>
                            <input type="file" name="principalSign" />
                        </div>
                    </div>
                    <input type="submit" value="submit" />
                </form>
            </div>
            <Footer />
        </div>
     );
}
 
export default RegForm;