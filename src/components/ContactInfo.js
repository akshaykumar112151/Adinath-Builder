import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import "./ContactInfo.css";

const ContactInfo = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: {
          type: 'spring',
          stiffness: 100, // Adjust the stiffness
          damping: 5, // Adjust the damping (bounciness)
          duration: 1, // Adjust the duration
          delay: 0.1 // Adjust the delay
        },
      });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [controls, inView]);

  return (
    <div className="container-IN">
      <motion.div
        className="contact-item"
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        ref={ref}
      >
        <div className="icon">
          <i className="fas fa-map-marker-alt"></i>
        </div>
        <div className="content">
          <p>508, 5th Floor, Maruti Plaza, Sanjay Place, Agra (U.P.</p>
        </div>
      </motion.div>
      <motion.div
        className="contact-item"
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        ref={ref}
      >
        <div className="icon">
          <i className="fa fa-phone"></i>
        </div>
        <div className="content">
          <p>+91 7055311111</p>
          <p>+91 9412262935</p>
        </div>
      </motion.div>
      <motion.div
        className="contact-item"
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        ref={ref}
      >
        <div className="icon">
          <i className="fas fa-envelope"></i>
        </div>
        <div className="content">
          <p>adinathinfratech@gmail.com</p>
        </div>
      </motion.div>
    </div>
  );
}

export default ContactInfo;
