import React, { useState } from 'react';
import vrindawan from "./img/vrindawan.png";
import Hill2 from "./img/Hill2.png";
import mathura from "./img/mathura.png";
import { Link } from "react-router-dom";
import "./Hill.css";

const Hill = () => {
  const [hoveredLink, setHoveredLink] = useState(null);

  return (
    <div className="hill-container">
      <div className="hill-heading"><br />
      <p>
      OUT OF  <span style={{ color: 'red' }}> STATE PROPERTY PURCHASE</span>
        </p>
      </div>
      <div className="hill-cards-container py-3 px-4">
        <div
          className="hill-card"
          onMouseEnter={() => setHoveredLink('delhi')}
          onMouseLeave={() => setHoveredLink(null)}
        >
          <Link to="/running-projects" className={`hill-link ${hoveredLink === 'delhi' ? 'active' : ''}`}>
            <img src={Hill2} className="hill-card-img" alt="Delhi" />
            <div className="hill-card-content">
              <h3>Agra</h3>
              <button className="tour-count"> Book Now</button>
            </div>
          </Link>
        </div>
        <div
          className="hill-card"
          onMouseEnter={() => setHoveredLink('agra')}
          onMouseLeave={() => setHoveredLink(null)}
        >
          <Link to="/" className={`hill-link ${hoveredLink === 'agra' ? 'active' : ''}`}>
            <img src={mathura} className="hill-card-img" alt="Agra" />
            <div className="hill-card-content">
              <h3>Mathura</h3>
              <button className="tour-count">Coming Soon</button>
            </div>
          </Link>
        </div>
        <div
          className="hill-card"
          onMouseEnter={() => setHoveredLink('jaipur')}
          onMouseLeave={() => setHoveredLink(null)}
        >
          <Link to="/" className={`hill-link ${hoveredLink === 'jaipur' ? 'active' : ''}`}>
            <img src={vrindawan} className="hill-card-img" alt="Jaipur" />
            <div className="hill-card-content">
              <h4>Vrindavan</h4>
              <button className="tour-count">Coming Soon</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hill;
