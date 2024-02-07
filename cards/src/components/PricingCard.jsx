import React, { useState } from 'react';

const PricingCard = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  const handleToggle = () => {
    setIsMonthly(!isMonthly);
  };

  return (
    <div>
      <div className="top-banner">
        <p className="current-plan"> Your current Plan</p>
        <p className="plan-type"> Starter Trial . 500MAUs</p>
      </div>

      <div className="container">
        <h1 className="title">Choose a plan</h1>
        <div className="toggle-switch">
          <span>Billed annually</span>
          <input
            type="checkbox"
            className="toggler"
            onChange={handleToggle}
            checked={!isMonthly}
          />
          <span> Billed monthly</span>
        </div>

        <div className="cards">
          {/* Starter Plan */}
          <div className="card" id="card-1">
            <h1 className="card-title">Starter</h1>
            <h2 className="card-price" id="starter-price">
              {isMonthly ? '$19' : '$200'} <span>{isMonthly ? '/ month' : '/ year'}</span>
            </h2>
            <ul className="card-plan">
              <li>500MAUs</li>
              <li>3 projects</li>
              <li>Unlimited guides</li>
              <li>Unlimited flows</li>
              <li>Unlimited branded themes</li>
              <li>Email Support</li>
            </ul>
            <button type="button" className="card-btn">Choose Plan</button>
          </div>

          {/* Pro Plan */}
          <div className="card" id="card-2">
            <h1 className="card-title">Pro</h1>
            <h2 className="card-price" id="pro-price">
              {isMonthly ? '$99' : '$1000'} <span>{isMonthly ? '/ month' : '/ year'}</span>
            </h2>
            <select id="maus">
              <option value="500">500 MAUS</option>
              <option value="1000">1000 MAUS</option>
              <option value="1500">1500 MAUS</option>
              <option value="2000">2000 MAUS</option>
              <option value="2500">2500 MAUS</option>
            </select>
            <span className="note">Monthly active users</span>
            <ul className="card-plan">
              <li>All starter features, Plus:</li>
              <li>Unlimited projects</li>
              <li>Unlimited fully customizable themes</li>
              <li>A dedicated customer Success Manager</li>
            </ul>
            <button type="button" className="card-btn">Choose Plan</button>
          </div>

          {/* Enterprise Card */}
          <div className="card" id="card-3">
            <h1 className="card-title">Enterprise</h1>
            <h2 className="card-price">Let's Talk!</h2>
            <ul className="card-plan">
              <li>All pro features</li>
              <li>Unlimited MAUs</li>
              <li>Detected environment</li>
              <li>Enterprise account administration</li>
              <li>Premium account and services</li>
            </ul>
            <button type="button" className="card-btn">Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
