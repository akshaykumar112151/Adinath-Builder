import React, {  useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Taj1 from "./img/Taj1.png";
import { Link } from "react-router-dom";
import "./Taj1Banner.css";



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
        <div className="col-md-6"> <br />
          <motion.img 
            src={Taj1} 
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
          ><br />
            
            {/* <p className='text-start ms-2'>Holistic & Integrated Treatments</p> */}
            <div className="style-T">
            <p className='style-T  text-start  ms-2'>Experience Our Journey</p>
            </div>
            <h1 className='text-start text-black'>Create Your Perfect Trip With US</h1>
            <div className="yellow-line ms-2"></div> {/* Yellow underline */} <br />

            <p className='text-start ms-2'>Begin and make the most of your Journey with Budget Taj Tour for hassle-free excursions to and from India. Book your India visits; it’s quick, straightforward, and easy online. Select the add-ons you need and start planning your Journey...
            </p>
            <p className='text-start ms-2'><i className="fa fa-check-circle" aria-hidden="true" style={{ color: '#7CA24A' }}></i> Same Day Tours</p>
            <p className='text-start ms-2'><i className="fa fa-check-circle" aria-hidden="true" style={{ color: '#7CA24A' }}></i> Golden Triangle Tours</p>
            <p className='text-start ms-2'><i className="fa fa-check-circle" aria-hidden="true" style={{ color: '#7CA24A' }}></i> Rajasthan Tours</p><br />
             <Link to="/plan-my-trip" className="btn btn-dark ms-2 link-button">BOOK NOW</Link>
            {/* Add more content here */}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
