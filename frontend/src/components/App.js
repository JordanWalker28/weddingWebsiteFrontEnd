import Login from "./Login";
import Signup from "./Signup";
import React, { Fragment } from "react";
import './App.css';
import Navbar from '../components/Navbar/Navbar';
import Venue from './venue';
import WeddingDay from './weddingday';
import Discover from './discover';
import Music from './music';
import Gifts from './gifts';
import { BrowserRouter as Router, Switch } from "react-router-dom";

import Index from "./Dashboard";
import { AuthRoute, ProtectedRoute } from "../utils/route";

export default function App() {

    if (localStorage.getItem("isBool") === null) {
      localStorage.setItem('isBool', JSON.stringify(true));
    }

    return ( 
      <div className ="App">
      <Router>
        <Switch>
          <AuthRoute exact path="/" component={Login} />
          <AuthRoute exact path="/login" component={Login} />
          <Fragment>
          <Navbar/>
          <ProtectedRoute exact path="/weddingDay" component={WeddingDay}/>
          <ProtectedRoute exact path="/gifts" component={Gifts}/>
          <ProtectedRoute exact path="/index" component={Index}/>
          <ProtectedRoute exact path="/venue" component={Venue}/>
          <ProtectedRoute exact path="/discover" component={Discover}/>
          <ProtectedRoute exact path="/music" component={Music}/>
          </Fragment>
          </Switch>
      </Router>
      </div>
    );
}


