import React from "react";
import { connect } from "react-redux";
import { BrowserRouter, Redirect, Route, withRouter, useLocation } from "react-router-dom";

const mapStateToProps = ({ session: { userId } }) => ({
  loggedIn: Boolean(userId),
});

function usePageViews() {
  let location = useLocation();
  return location.pathname;
}

const Auth = ({ loggedIn, path, component: Component, test }) => (
  test = usePageViews(),
  <Route path={path} render={(props) => loggedIn ? test === "/login" || "/" ? <Redirect to ={"/index"}/> : <Redirect to ={test}/> : <Component {...props} />}/>
);
const Protected = ({ loggedIn, path, component: Component }) => (
  <Route path={path} render={(props) => loggedIn ? <Component {...props} /> : <Redirect to="/login" />} />
);

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
