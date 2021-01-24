
import React, {useState} from 'react'
//import { Main } from './Components/Main';
//import Text from './Components/Text';
import Login from './Login';
// import NewLogin from './NewLogin';
//import New from './New';
//import Test from './Login/Test';
import Dashboard from './Dashboard';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
//import { AuthenticatedRoute } from "authenticated-react-router";

import './App.css';

{/* <Switch>
      <Route exact path="/"/>
      {loggedIn ? <Redirect to ="/Dashboard" /> : <Login setLoggedIn={setLoggedIn}/>}
      </Switch>
     */}

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
     <Router>
      <Switch>
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/" component={Login} />
      {/* <Redirect to="/"/> */}
      {/* {loggedIn ? <Dashboard/> : <Login setLoggedIn={setLoggedIn} />} */}
      {/* {loggedIn ? <Redirect to="/Dashboard"/> : <Login setLoggedIn={setLoggedIn}/>} */}
      </Switch>
      </Router>
    </div>
  );
}

export default App;
