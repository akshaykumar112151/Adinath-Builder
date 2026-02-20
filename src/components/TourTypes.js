import React from 'react';
import "./TourTypes.css";
import strong from "./img/strong.png"
import stronghome from "./img/stronghome.png";
import ontime1 from "./img/ontime1.png";
import ontime2 from "./img/ontime2.png";


import Environment1 from "./img/Environment1.png";
import Environment2 from "./img/Environment2.png";
import hidden1 from "./img/hidden1.png";
import hidden2 from "./img/hidden2.png";

import customer1 from "./img/customer1.png";
import customer2 from "./img/customer2.png";


function TourTypes() {
  return (
    <div className="container-TU">
      <div className="title"><div className="style-F">
        <h6>Why Choose </h6>
        </div>
        
        <h1>Adinath Builder?</h1>
      </div>
      <div className="tour-types">
        <div className="tour-type">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={stronghome} alt="Wildlife" />
              </div>
              <div className="flip-card-back">
                <img src={strong} alt="Wildlife" />
              </div>
            </div>
          </div>
          <p className="text-center text-black">Strong & Safe Build</p>
        </div>
        <div className="tour-type">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={ontime2} alt="Paragliding" />
              </div>
              <div className="flip-card-back">
                <img src={ontime1} alt="Paragliding" />
              </div>
            </div>
          </div>
          <p className="text-center text-black">Timely Completion</p>
        </div>
        <div className="tour-type">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={Environment2} alt="Adventure" />
              </div>
              <div className="flip-card-back">
                <img src={Environment1} alt="Adventure" />
              </div>
            </div>
          </div>
          <p className="text-center text-black">Vastu & Eco-Friendly</p>
        </div>
        <div className="tour-type">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={hidden2} alt="Hang Gliding" />
              </div>
              <div className="flip-card-back">
                <img src={hidden1} alt="Hang Gliding" />
              </div>
            </div>
          </div>
          <p className="text-center text-black">Transparent Pricing</p>
        </div>
        <div className="tour-type">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={customer2} alt="Sightseeing" />
              </div>
              <div className="flip-card-back">
                <img src={customer1} alt="Sightseeing" />
              </div>
            </div>
          </div>
          <p className="text-center text-black">After-Sales Support</p>
          
        </div>
        
      </div>
      
    </div>
    
  );
}

export default TourTypes;
