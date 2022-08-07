import React, { useState } from 'react';
import ToggleSwitch from './NavToggle'
import {NavLink, NavMenu} from './NavbarElements'

import "../../Css/NavBar.css";

const Navigation = () => {

  let item = (JSON.parse(localStorage.getItem('isBool')));
  const title = item === true ? "Patricia and Jordan" : "Patricia und Jordan";
  const venue = item === true ? "Venue" : "Hochzeitslocation";
  const weddingDay = item === true ? "Wedding Day" : "Unser Hochzeitstag";
  const discover = item === true ? "Discover" : "Empfehlungen";
  const music = item === true ? "Important Information" : "Wichtige Infos";
  const gifts = item === true ? "Gifts" : "Hochzeitsgeschenke";

  const [checked, setChecked] = React.useState(false);
  const onToggle = () => (setChecked(!checked));

  return (
      <NavMenu>
        <div className="logo"><a href="/index">{title}</a></div>
        <ul className="nav-links">
          <input type="checkbox" id="checkbox_toggle" checked={checked} onChange={onToggle} />
          <label htmlFor="checkbox_toggle" className="hamburger" onChange={(e) => setChecked(e.target.checked)}>&#9776;</label>
          <div className="menu">
            <li><NavLink to="/venue" onClick={() => setChecked((c) => !c)}>{venue}</NavLink></li>
            <li><NavLink to="/weddingday" onClick={() => setChecked((c) => !c)}>{weddingDay}</NavLink></li>
            <li><NavLink to="/discover" onClick={() => setChecked((c) => !c)}>{discover}</NavLink></li>
            <li><NavLink to="/music" onClick={() => setChecked((c) => !c)}>{music}</NavLink></li>
            <li><NavLink to="/gifts" onClick={() => setChecked((c) => !c)}>{gifts}</NavLink></li>
            <li><ToggleSwitch/></li>
          </div>
        </ul>
      </NavMenu>
  );
};
  
export default Navigation;