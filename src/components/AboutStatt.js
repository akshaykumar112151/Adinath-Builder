import React from 'react'
import "./AboutStatt.css";
import Project from "./img/project.png";
import Happy from "./img/happy.png";
import guide from "./img/guide.png";

const AboutStatt = () => {
  return (
    <div>
              <div className="stats">
  <div className="stat">
    <div className="stat-figure text-primary">
     <img src={Project} alt="" />
    </div>
    <div className="stat-title">Total Project
    </div>
    <div className="stat-value">30+</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-accent">
      <img src={Happy} alt="" />
    </div>
    <div className="stat-title">Happy Customers</div>
    <div className="stat-value">1000+</div>
  </div>
  <div className="stat">
    <div className="stat-figure text-info">
      <img src={guide} alt="" />
    </div>
    <div className="stat-title">Directors</div>
    <div className="stat-value">3</div>
  </div>
  
</div>


    </div>
    
  )
}

export default AboutStatt
