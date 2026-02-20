import React from 'react';
import { motion } from 'framer-motion';
import Testimonialsbaner from "../components/img/Testimonialsbaner.png";
import './TestimonialsBanner.css';

const TestimonialsBanner = () => {
  return (
    <div className="banner-container">
      <div>
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={Testimonialsbaner} className="d-block w-100 carousel-image" alt="..." />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <motion.div
              className="content"
              initial={{ x: '-100vw' }}
              animate={{ x: 0 }}
              transition={{ type: 'spring', stiffness: 50 }}
            >
              <br />
              <iframe
                width="100%"
                height="260"
                src="https://www.youtube.com/embed/2eLZyLGXG_Q"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen  // Corrected attribute name
              ></iframe>
            </motion.div>
          </div>
          <div className="col-md-6">
            <motion.div
              className="content-Tb"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1.5 }}
            >
              <br />
              <h1 className='text-start  '>IVF Success Story of a couple at the age of 40 years</h1>
              <div className="yellow-line  "></div> {/* Yellow underline */}
              <br />
              <p className='text-start '>IVF Treatment is a medical boon to couples who are facing the issue of infertility. Here is a story of how Dr. Vaishali Tandon  provided IVF treatment and supported a couple through their IVF journey after they struggled to conceive for many years.</p>
              <p className='text-start '>With Dr. Vaishali Tandon help and guidance, they were able to conceive and give birth to a healthy baby girl. The couple truly believes it is a miracle, that after 40 years they would be able to experience the joys of parenthood.</p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <motion.div
              className="content"
              initial={{ x: '-100vw' }}
              animate={{ x: 0 }}
              transition={{ type: 'spring', stiffness: 50 }}
            >
              <br />
              <iframe
                width="100%"
                height="260"
                src="https://www.youtube.com/embed/E3klUzOkiok"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen  // Corrected attribute name
              ></iframe>
            </motion.div>
          </div>
          <div className="col-md-6">
            <motion.div
              className="content-Tb"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1.5 }}
            >
              <br />
              <h1 className='text-start '>Welcome hope with Dr. Vaishali Tandon InFertility</h1>
              <div className="yellow-line "></div> {/* Yellow underline */}
              <br />
              <p className='text-start '>Listen to the story of a couple who had been trying for years to have a child. With the help of Dr. Vaishali Tandon, Medical Director and Founder Dr. Vaishali Tandon InFertility they were able to fulfill their dreams of parenthood.</p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <motion.div
              className="content"
              initial={{ x: '-100vw' }}
              animate={{ x: 0 }}
              transition={{ type: 'spring', stiffness: 50 }}
            >
              <br />
              <iframe
                width="100%"
                height="260"
                src="https://www.youtube.com/embed/naZkec8HhJ4?start=14"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen  // Corrected attribute name
              ></iframe>
            </motion.div>
          </div>
          <div className="col-md-6">
            <motion.div
              className="content-Tb"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1.5 }}
            >
              <br />
              <h1 className='text-start '>Parenthood one of the most cherished journey made more special...</h1>
              <div className="yellow-line "></div> {/* Yellow underline */}
              <br />
              <p className='text-start '>Listen to the heart warming story of how Dr. Vaishali Tandon (Medical Director and Founder Dr. Vaishali Tandon InFertility) helped a couple walk the journey they so wanted to tread….</p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <motion.div
              className="content"
              initial={{ x: '-100vw' }}
              animate={{ x: 0 }}
              transition={{ type: 'spring', stiffness: 50 }}
            >
              <br />
              <iframe
                width="100%"
                height="260"
                src="https://www.youtube.com/embed/y-fmatXhAFY"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen  // Corrected attribute name
              ></iframe>
            </motion.div>
          </div>
          <div className="col-md-6">
            <motion.div
              className="content-Tb"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1.5 }}
            >
              <br />
              <h1 className='text-start '>Know the story of a young couple, who after having difficulty to conceive saw a ray of hope through Dr. Vaishali Tandon InFertility. Today the couple is a proud parent to a cute and naughty little boy.</h1>
              <div className="yellow-line "></div> {/* Yellow underline */}
              <br />
              <p className='text-start  '>Dr. Vaishali Tandon InFertility, headed by Dr. Vaishali Tandon fulfills the dreams of couples wanting to start a family. With the latest in techniques and procedures Dr. Vaishali Tandon InFertility is one of the fastest growing chain of InFertility Clinics in Delhi/NCR.</p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container ">
        <div className="row">
          <div className="col-md-6">
            <motion.div
              className="content"
              initial={{ x: '-100vw' }}
              animate={{ x: 0 }}
              transition={{ type: 'spring', stiffness: 50 }}
            >
              <br />
              <iframe
                width="100%"
                height="260"
                src="https://www.youtube.com/embed/SGlhbMfpwaE"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen  // Corrected attribute name
              ></iframe>
            </motion.div>
          </div>
          <div className="col-md-6">
            <motion.div
              className="content-Tb"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1.5 }}
            >
              <br />
              <h1 className='text-start '>A father expresses his emotions when blessed with a baby - Dr. Vaishali Tandon </h1>
              <div className="yellow-line  "></div> {/* Yellow underline */}
              <br />
              <p className='text-start '>A father’s love is special, and this week, when the whole world is celebrating Father’s Day, we have one such father with us, who was blessed with a baby using IVF technique at the age of 40.</p>
            </motion.div>
          </div>
        </div>
      </div>
      <br /><br /><br />
    </div>
  );
}

export default TestimonialsBanner;
