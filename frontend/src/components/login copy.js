import React, { useState } from 'react';
import Axios from "axios";
import { useNavigate } from "react-router-dom";


export default function Login(){
	const navigate = useNavigate();

    const [password, setPassword] = useState('');

  const login = (e) => {
	e.preventDefault();
	console.log("I've been hit")
	Axios.post('http://localhost:3001/login', {password: password}).then((response) => {
	  if(response.data.message) {
		console.log(response);
	  }else{
		localStorage.setItem('userID', JSON.stringify(response.data[0].userId))
		navigate("/index");
	  }
	});
  }

return(
<div class="vid-container">
  <img class="bgvid" source src="https://images.unsplash.com/photo-1425321395722-b1dd54a97cf3?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop="/>
  <div class="inner-container">
    <img class="bgvid inner"        src="https://images.unsplash.com/photo-1425321395722-b1dd54a97cf3?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop="/>
    <div class="box">
      <h1>Login</h1>
      <input type="text" placeholder="Password"/>
      <button>Login</button>
    </div>
  </div>
</div>

    )
}