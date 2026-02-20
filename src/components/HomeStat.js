import React from 'react'
import './HomeStat.css';
const HomeStat = ({ value1, label1, value2, label2, value3, label3 }) => {
  return (
    <div>
    <div className="stat-box">
    <div className="left">
    <a rel="nofollow" className="component-target text-white" href="tel:+(91)-8377855100"><i className="fa fa-phone"></i></a>
     
    </div>
    <div className="center">
    <a  href="mailto:your-email@gmail.com"><i className="fas fa-envelope text-white"></i> </a>

    </div>
    
  </div>
  </div>
  )
}

export default HomeStat
