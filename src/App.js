import './App.css';
import {  Switch, Route } from 'react-router-dom';
import { Login, ResetPassword, StudentPortal } from './components';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/reset-password" component={ResetPassword} />
        <Route exact path="/student-portal" component={StudentPortal} />
        <Route path="/student-portal/:option" component={StudentPortal} />
      </Switch>
    </div>
  );
}

export default App;
