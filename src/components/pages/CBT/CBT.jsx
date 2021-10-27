import React from 'react';
import Navbar from '../../Navbar/Navbar';
import './CBT.scss';
import { useParams } from 'react-router-dom';
import profilePic from '../../../assets/images/profile-pic.jpg';

const CBT = () => {

    const {exam, haveExam} = useParams();
    const questionNum = 1;
    const subject = 'Mathematics';
    const questions = [
        {id: 1, question: 'The following are examples of programming language except', A: 'JavaScript', B: 'Python', C: 'Ruby on Rails', D: 'French', correctOption: 'French'},
        {id: 2, question: 'The following are examples of programming language except', A: 'JavaScript', B: 'Python', C: 'Ruby on Rails', D: 'French', correctOption: 'French'},
        {id: 3, question: 'The following are examples of programming language except', A: 'JavaScript', B: 'Python', C: 'Ruby on Rails', D: 'French', correctOption: 'French'},
        {id: 4, question: 'The following are examples of programming language except', A: 'JavaScript', B: 'Python', C: 'Ruby on Rails', D: 'French', correctOption: 'French'},
        {id: 5, question: 'The following are examples of programming language except', A: 'JavaScript', B: 'Python', C: 'Ruby on Rails', D: 'French', correctOption: 'French'},
    ];

    return ( 
        <div className="cbt">
            <Navbar />
            <div className="cbtBody">
                <div className="timerBody">
                    <span>Passport</span>
                    <div className="profilePic">
                        <img src={profilePic} alt="profile pic" />
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <p>Timer</p>
                        <span className="timer">30m 00s</span>
                    </div>
                    <div className="profilePic examInfoWrpper">
                        <span className="examInfo">Exam Info</span>
                        <ul>
                            <li>Reg No: CHM/2018/019</li>
                            <li>Subject: {subject}</li>
                            <li>Ques in Total: 100</li>
                        </ul>
                    </div>
                </div>
                <div className="examBody">
                    <div className="inst">
                        <span className="subject">{subject} Examination</span>
                        <span className="instructions">Instructions: Ensure to attempt all question</span>
                    </div>
                    {
                        questions.map((question) => (
                            <div className="questions" key={question.id}>
                                <span><b>{question.id}.)     {question.question}</b></span>
                                <ul>
                                    <li><input type="radio" name={`${question.id}`} />a. {question.A} </li>
                                    <li><input type="radio" name={`${question.id}`} />b. {question.B} </li>
                                    <li><input type="radio" name={`${question.id}`} />c. {question.C} </li>
                                    <li><input type="radio" name={`${question.id}`} />d. {question.D} </li>
                                </ul>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
     );
}
 
export default CBT;