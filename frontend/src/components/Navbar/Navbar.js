import React from 'react';
import ToggleSwitch from './NavToggle'
import {NavLink, NavMenu} from './NavbarElements'
import "../../Css/NavBar.css";

const Navbar = () => {

  let item = (JSON.parse(localStorage.getItem('isBool')));
  const title = item === true ? "Patricia and Jordan" : "Patricia und Jordan";
  const venue = item === true ? "Venue" : "Hochzeitslocation";
  const weddingDay = item === true ? "Wedding Day" : "Unser Hochzeitstag";
  const discover = item === true ? "Discover" : "Empfehlungen";
  const music = item === true ? "Important Information" : "Wichtige Infos";
  const gifts = item === true ? "Gifts" : "Hochzeitsgeschenke";


  return (
      <NavMenu>
        <div className="logo"><a href="/index">{title}</a></div>
        <ul className="nav-links">
          <input type="checkbox" id="checkbox_toggle" />
          <label htmlFor="checkbox_toggle" className="hamburger">&#9776;</label>
          <div className="menu">
            <li><NavLink to="/venue">{venue}</NavLink></li>
            <li><NavLink to="/weddingday">{weddingDay}</NavLink></li>
            <li><NavLink to="/discover">{discover}</NavLink></li>
            <li><NavLink to="/music">{music}</NavLink></li>
            <li><NavLink to="/gifts">{gifts}</NavLink></li>
            <li><ToggleSwitch/></li>
          </div>
        </ul>
      </NavMenu>
  );
};
  
export default Navbar;