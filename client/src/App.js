import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Landing';
import Landing from './components/layout/Navbar';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import './App.css';

const App = () => 
<Router>
<Fragment>
{/* <section className="container"> */}
<Navbar></Navbar>
<Switch>
   <Route exact path="/" component={Landing}></Route>   
      <Route exact path="/register" component={Register}></Route>
      <Route exact path="/login" component={Login}></Route>
      </Switch>
    {/* </section> */}
 </Fragment>
</Router>


export default App;
