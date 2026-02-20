import React, {  useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import vaishaliour2 from "./img/vaishaliour2.jpg";
import { Link } from "react-router-dom";


const AboutUs = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();
  
  useEffect(() => {
    if (inView) {
      controls.start({
        x: 0,
        opacity: 1,
        transition: { type: 'spring', stiffness: 85, duration: 2},
      });
    }
  }, [controls, inView]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <motion.img 
            src={vaishaliour2} 
            className="img-fluid" 
            alt="Your Image" 
            initial={{ x: '-100vw' }}
            animate={controls}
            ref={ref}
          />
        </div>
        <div className="col-md-6">
          <motion.div 
            className="content"
            initial={{ opacity: 0 }}
            animate={controls}
            ref={ref}
          >
            <br />
            {/* <p className='text-start ms-2'>Holistic & Integrated Treatments</p> */}
            <h1 className='text-start ms-2'>Dr. Vaishali Tandon</h1>
            <div className="yellow-line ms-2"></div> {/* Yellow underline */} <br />

            <p className='text-start ms-2'>Welcome to Dr. Vaishali Tandon's Clinic, where we offer cutting-edge, personalized healthcare. Located in Agra, our clinic is led by the esteemed Dr. Vaishali Tandon, ensuring you receive top-notch, compassionate care.
            </p>
            <p className='text-start ms-2'>Gynaecologists and Obstetricians are medical practitioners with specialisations in both gynaecology and obstetrics. These doctors assist pregnant mothers pre and post-childbirth and help identify and manage illnesses and problems affecting the vagina, ovaries, uterus, and breasts. You can find the best Gynaecologist & Obstetrician Doctors in Agra, if you are experiencing any of the aforementioned medical conditions.</p>
            <Link to="/about-us" className="btn btn-warning ms-2 link-button">About Us</Link>
            {/* Add more content here */}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
