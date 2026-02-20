import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import rain from './img/rain.png';
import cctv from './img/cctv.jpg';
import clubhouse from './img/clubhouse.png';
import rcc from './img/rcc.jpg';
import inner from './img/inner.jpg';

import energy from './img/energy.jpg';
import sewage from './img/sewage.jpg';
import park from './img/park.avif';
import gym from './img/gym.avif';
import metro from './img/metro.avif';
import airport from './img/airport.png';
import closegate from './img/closegate.webp';
import market from './img/market.jpg';
import Temple from "./img/Temple.webp"

const amenitiesList = [
  { text: "Sewage Treatment Plant ", img: sewage },
  { text: "Rain Water Harvesting System", img: rain },
  { text: "Open Greenary Park ", img: park },
  { text: "Open Gym", img: gym },
  { text: "24*7 CCTV SURVEILLANCE", img: cctv },
  { text: "Metro Connectivity", img: metro },
  { text: "Airpot Connectivity", img: airport },
  { text: "Community Hall / Club house", img: clubhouse },
  { text: "Closed Gate Colony", img: closegate },
  { text: "Nearby From Banks / Schools / Markets", img: market },
  { text: "29, 35 & 40 Feet Wide Roads", img: rcc },
  { text: "Inner Ring Road", img: inner },

  { text: "Electrification", img: energy },
  { text: "Temple within Premises", img: Temple },
  // { text: "Temple within Premises", img: Temple },


  
];

const Aminities = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h5 style={{ fontSize: '30px' }}>
        <span style={{ color: 'red' }}>AMENITIES</span>
      </h5>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '20px',
          marginTop: '20px',
        }}
      >
        {amenitiesList.map((item, index) => (
          <motion.div
            key={index}
            style={{
              border: '1px solid #ccc',
              borderRadius: '25px',
              padding: '15px',
              width: isMobile ? '100%' : '280px',
              maxWidth: '100%',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              textAlign: 'center',
              backgroundColor: '#fff',
              boxSizing: 'border-box',
            }}
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              duration: 0.5,
              ease: 'easeInOut',
              delay: index * 0.05,
              type: 'spring',
              stiffness: 120,
              damping: 10,
            }}
          >
            <img
              src={item.img}
              alt={`Amenity ${index + 1}`}
              style={{
                width: '100%',
                height: isMobile ? 'auto' : '153px',
                objectFit: 'contain',
                marginBottom: '10px',
              }}
            />
            <div>
              <p style={{ textAlign: 'left', fontSize: '15px' }}>✓ {item.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Aminities;
