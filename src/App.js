import './App.css';
import {  Switch, Route } from 'react-router-dom';
import { Login, ResetPassword } from './components';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={<Login />} />
        <Route path="/reset-password" component={<ResetPassword />} />
      </Switch>
    </div>
  );
}

export default App;
