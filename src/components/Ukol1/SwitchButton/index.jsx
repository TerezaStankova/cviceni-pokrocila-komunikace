import './style.css';
import { useState } from 'react';

export const SwitchButton = ({ label, onSwitch}) => {
  const [bulbOn, setBulbOn] = useState(true);

  return (
    <button className={!bulbOn ? "switch-button switch-button--on" : "switch-button"} onClick={() => {setBulbOn(!bulbOn); onSwitch(bulbOn);}}>
      <i className="switch-icon" />
      <div className="button-label">{label}</div>
    </button>
  );
};
