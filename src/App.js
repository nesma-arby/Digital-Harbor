import React, { Component } from 'react';
import './App.css';
import Login from './Login';
import Register from './Register';
import Myaccount from './Myaccount';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import NavBar from './NavBar';


class App extends Component {


  render() {

    return (
      <div className="App">

        <Router>

         

          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/Home' component={Home} />
            <Route path='/register' exact component={Register} />
            <Route path='/login' component={Login} />
            <Route exact path='/myaccount' component={Myaccount} />
            <Route exact path='/logout' component={Home} />
          </Switch>

        </Router>


      </div>
    );
  }
}

export default App;







