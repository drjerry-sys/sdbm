import './App.css';
import {  Routes, Route, Navigate } from 'react-router-dom';
import { Login, ResetPassword, StudentPortal, StaffPortal, RegForm, CBT } from './components';

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<Login/>} />
        <Route path="/reset-password" element={<ResetPassword/>} />
        <Route exact path="/student-portal" element={<StudentPortal/>} />
        <Route exact path="/student/form" element={<RegForm/>} />
        <Route exact path="/cbt/:exam" element={<CBT/>} />
        <Route exact path="/student-portal/:option" element={<StudentPortal/>} />
        <Route exact path="/student-portal/:option/:suboption" element={<StudentPortal/>} />
        <Route exact path="/staff-portal" element={<StaffPortal/>} />
        <Route path="/staff-portal/:option" element={<StaffPortal/>} />
      </Routes>
    </div>
  );
}

export default App;
