import React from 'react';
import './RegForm.scss';

const SubForm = () => {
    return ( 
        <div className="subForm">
            <form className="formBody">
                <span classame="fill">please fill this form with the correct details. some information might not be editable</span>
                <div className="identitySection">
                    <span className="titles">Name and Identity</span>
                    <div className="lastFirstName">
                        <input type="text" placeholder="First Name" />
                        <input type="text" placeholder="Last Name" />
                    </div>
                    <div className="middleDob">
                        <input className="middle" type="text" placeholder="Middle Name" />
                        <input type="date" className="date" />
                    </div>
                    <div className="countryState">
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
                    </div>
                    <div className="cityLga">
                        <input type="text" className="city" placeholder="city" />
                        <input type="text" className="lga" placeholder="L.G.A" />
                    </div>
                    <input type="text" className="address" placeholder="Street and Home Address" />
                    <div className="emailPhone">
                        <input type="email" className="email" placeholder="Email Address" />
                        <input type="tel" placeholder="phone no" />
                    </div>
                    <div className="gender">
                        <span><input type="radio" name="gender" /> Male</span>
                        <span><input type="radio" name="gender" /> Female</span>
                    </div>
                </div>
                <div className="parent">
                    <span className="titles">Parent/Guidian</span>
                    <input type="text" placeholder="Father Name" />
                    <input type="text" placeholder="Mother Maiden Name" />
                    <input type="text" placeholder="Mother Name" />
                </div>
                <div className="next-of-kin">
                    <span className="titles">Next of Kin</span>
                    <div className="names">
                        <input type="text" placeholder="First Name" />
                        <input type="text" placeholder="Last Name" />
                    </div>
                    <div className="emailPhone">
                        <input type="email" placeholder="Email" />
                        <input type="tel" placeholder="phone no" />
                        <input type="text" className="dob" placeholder="Relationship" />
                    </div>
                </div>
                <div className="educational-background">
                    <span className="titles">Educational Background</span>
                    <div className="formal">
                        <input type="text" placeholder="Formal School Name" />
                        <input type="email" placeholder="Email" placeholder="Formal Class" />
                    </div>
                    <div className="signClassAppyingFor">
                        <input type="file" placeholder="Formal principal Letter" />
                        <select name="" id="" className="">
                            <option value="">class applying for</option>
                            <option value="">JSS 1</option>
                            <option value="">JSS 2</option>
                            <option value="">JSS 3</option>
                            <option value="">SSS 1</option>
                            <option value="">SSS 2</option>
                            <option value="">SSS 3</option>
                        </select>
                    </div>
                </div>
                <div className="fileUpload">
                    <span className="titles">File Upload</span>
                    <div className="jss1">
                        <span>For JSS 1</span>
                        <div className="commonEntrance">
                            <label htmlFor="commonEntrance">Common Entrance:</label>
                            <input type="file" name="commonEntrance" />
                        </div>
                        <div className="thirdTermResult">
                            <label htmlFor="lastResult">Third Term Result:</label>
                            <input type="file" name="lastResult" />
                        </div>
                    </div>
                    <div className="sss1">
                        <span>For SSS 1</span>
                        <div className="j3result">
                            <label htmlFor="j3result">JSS 3 Results:</label>
                            <input type="file" name="j3result" />
                        </div>
                        <div className="lastResult">
                            <label htmlFor="lastResult">Third Term Result:</label>
                            <input type="file" name="lastResult" />
                        </div>
                    </div>
                    <div className="others">
                        <span>Others</span>
                        <div className="othersLastResult">
                            <label htmlFor="lastResult">Third Term Result:</label>
                            <input type="file" name="lastResult" />
                        </div>
                        <div className="principalSign">
                            <label htmlFor="principalSign">Principal Signature:</label>
                            <input type="file" name="principalSign" />
                        </div>
                    </div>
                </div>
                <input type="submit" value="submit" className="submit" />
            </form>
        </div>
     );
}
 
export default SubForm;