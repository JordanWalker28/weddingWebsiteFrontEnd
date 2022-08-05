import React, { useState } from "react";
import "../../Css/ToggleSwitch.css";

function ToggleSwitch() {
  const [isToggled, setIsToggled] = useState(JSON.parse(localStorage.getItem('isBool')));
  const onToggle = () => (setIsToggled(!isToggled), localStorage.setItem('isBool', JSON.stringify(!isToggled)), window.location.reload(false));
  return (
    <label className="toggle-switch">
      <input type="checkbox" checked={isToggled} onChange={onToggle} />
      <span className="switch" />
    </label>
  );
}
export default ToggleSwitch;