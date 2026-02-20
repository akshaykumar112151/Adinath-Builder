import React, {  useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from "react-router-dom";
import TajVideo1 from "./img/TajVideo1.jpg";



const TajVideo = () => {
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
        <div className="col-md-6"><br />
          <motion.img 
            src={TajVideo1} 
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
            <div className="style-T">
            <p className='style-T  text-start  ms-2'>Get to know us</p>
            </div>
            <h1 className='text-start text-black'>Your Trusted Travel Agency</h1>
            <div className="yellow-line ms-2"></div> {/* Yellow underline */} <br />
            <p className='text-start ms-2'><i className="fa fa-check-circle" aria-hidden="true" style={{ color: '#7CA24A' }}></i> Safety and Trust</p>
            <p className='text-start ms-2'><i className="fa fa-check-circle" aria-hidden="true" style={{ color: '#7CA24A' }}></i> Fast & Simple Booking</p>
            <p className='text-start ms-2'><i className="fa fa-check-circle" aria-hidden="true" style={{ color: '#7CA24A' }}></i> Guaranteed Best Prices</p>
            <p className='text-start ms-2'><i className="fa fa-check-circle" aria-hidden="true" style={{ color: '#7CA24A' }}></i> Explore Our Top-Selling Tours</p><br />
            <h2 className='text-start ms-2'><b>
            Reasons to Travel with Us</b></h2><br />


            <p className='text-start ms-2'>If you're seeking a truly unforgettable family getaway, you'll find the best prices on the perfect hotel here. The experience is unparalleled. Stay informed and explore deals on these popular destinations.
            </p>
            
             <Link to="/plan-my-trip" className="btn btn-dark ms-2 link-button">BOOK NOW</Link>
            {/* Add more content here */}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default TajVideo;
