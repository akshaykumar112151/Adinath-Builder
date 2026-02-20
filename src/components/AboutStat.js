import React from 'react'
import './AboutStat.css';

const AboutStat = ({ value1, label1, value2, label2, value3, label3 }) => {
  return (
    <div>
      <div className="stat-box-A">
      <div className="left">
        <span>{"5,000+"}</span>
        <span>{"Happy Family"}</span>
      </div>
      <div className="center">
        <span>{"15"}</span>
        <span>{"Team of Experts"}</span>
      </div>
      <div className="right">
        <span>{"20+"}</span>
        <span>{"Years of Experience"}</span>
      </div>
    </div>
    </div>
  )
}

export default AboutStat
