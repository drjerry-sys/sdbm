import './App.css';
import {  Switch, Route } from 'react-router-dom';
import { Login, ResetPassword, StudentPortal, StaffPortal, RegForm } from './components';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/reset-password" component={ResetPassword} />
        <Route exact path="/student-portal" component={StudentPortal} />
        <Route exact path="/student/form" component={RegForm} />
        <Route path="/student-portal/:option" component={StudentPortal} />
        <Route exact path="/staff-portal" component={StaffPortal} />
        <Route path="/staff-portal/:option" component={StaffPortal} />
      </Switch>
    </div>
  );
}

export default App;
