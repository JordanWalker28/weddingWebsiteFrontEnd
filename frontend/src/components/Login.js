import React from "react";
import { connect } from "react-redux";
import { login } from "../actions/session";
import "../Css/Login.css";
import left from "../img/5B7A1852.jpg"

const mapStateToProps = ({ errors }) => ({
  errors,
});
const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(login(user)),
});
const Login = ({ login }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      username: e.target[0].value,
    };
    login(user);
  };
  return (
    <div class="vid-container">
      <img class="bgvid" src={left}/>
      <div class="inner-container">
        <img class="bgvid inner" src={left}/>
        <div class="box">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <input type="username" name="username" />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
