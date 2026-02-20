import React from 'react';
import { motion } from 'framer-motion';
import img1 from "./img/img1.png";
import img2 from "./img/img2.png";
import img3 from "./img/img3.png";
import img4 from "./img/img4.png";

import "./CenterMain.css";

const features = [
  {
    img: img1,
    title: "Elite Construction",
    description:
      "Showcasing durable materials, expert craftsmanship, precision design, best performance, sustainable methods ."
  },
  {
    img: img2,
    title: "Professional Ability",
    description:
      "Expert in delivering high-quality, efficient construction projects with precision, innovation, safety, and superior craftsmanship."
  },
  {
    img: img3,
    title: "Great Customer Support",
    description:
      "To assist our customers and help them in every possible way, we are available 24X7 on Phone and WhatsApp."
  },
  {
    img: img4,
    title: "Super Fast Booking",
    description:
      "You will get instant confirmation after booking, plus we use PayPal as our payment partner."
  }
];

const CenterMain = () => {
  return (
    <div className="feature-container">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          className="feature-card"
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
            delay: index * 0.15,
            type: "spring",
            stiffness: 120,
            damping: 10
          }}
        >
          <img src={feature.img} alt={feature.title} className="feature-image" />
          <div className="feature-content">
            <h2 className='text-start'>{feature.title}</h2>
            <p>{feature.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default CenterMain;