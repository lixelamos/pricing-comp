import React from 'react';

const ToggleSwitch = ({ isChecked, onToggle }) => {
  return (
    <div className="toggle-switch">
      <span>Billed annually</span>
      <input
        type="checkbox"
        className="toggler"
        onChange={onToggle}
        checked={isChecked}
      />
      <span>Billed monthly</span>
    </div>
  );
};

export default ToggleSwitch;
