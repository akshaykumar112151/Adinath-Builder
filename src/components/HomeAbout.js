import React from 'react';
import './AboutBanner.css';
import { motion } from 'framer-motion';
import Growth from "./img/Growth.jpg";


const HomeAbout = () => {
  return (
    
    <div className="banner-container">
       <hr /> <br />
       <h1 style={{ fontSize: '23px' }}>
       🏗️ Adinath Builder Presents <span style={{ color: 'red' }}> The Smartest Investment of the Future </span>
      </h1>
      {/* 3 Sections */}
      <div className="container">
        {/* Section 1 */}
        <div className="row my-5 align-items-center">
          <div className="col-12 col-md-6 text-center mb-4 mb-md-0 glow-image">
            <motion.img
              src={Growth}
              className="img-fluid"
              alt="Image 1"
              initial={{ x: '-100vw' }}
              animate={{ x: 0 }}
              transition={{ type: 'spring', stiffness: 50 }}
            />
          </div>
          <div className="col-12 col-md-6">
            <motion.div
              className="content px-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1.5 }}
            >
              <h5 className="style-T text-start" style={{ color: 'black' }}> Why Land & Real Estate Outperform Every Other Asset?
              </h5>
              <div className="yellow-line mb-4"></div>
              <p className="text-start" style={{ color: 'black' }}>
              As the chart clearly shows, Real Estate offers the highest growth potential — beating stocks, bonds, and even gold.</p>
              <p className="text-start" style={{ color: 'black' }}><b>At Adinath Builder, we don’t just sell plots... <br />
              We offer you a gateway to future wealth.</b></p>
              <h5 className="text-start mt-4" style={{ color: 'black' }}>💼 What Makes Land the Best Investment?</h5>
              {/* <div className="progress-bar">
                <div className="progress-bar-fill" style={{ width: '100%' }}>
                  <span className="progress-bar-percentage" style={{ color: 'white' }}>100%</span>
                </div>
              </div> */}
              <p className="text-start mt-4" style={{ color: 'black' }}>✅ High Appreciation Value – Our locations are carefully selected for rapid growth.</p>
              <p className="text-start mt-4" style={{ color: 'black' }}>✅ Zero Depreciation – Unlike vehicles or gadgets, land only appreciates.</p>
              <p className="text-start mt-4" style={{ color: 'black' }}>✅ Security + Growth – A tangible, safe asset with excellent ROI.</p>
              <p className="text-start mt-4" style={{ color: 'black' }}>✅ Limited Inventory – Land is scarce. Demand is rising. The time to invest is now.</p> 
              {/* <p className="text-start mt-4" style={{ color: 'black' }}>Whether you're looking to build your dream home or expand your investment portfolio, Adinath Builder has premium land options that promise growth, security, and value.</p> */}

              {/* <div className="progress-bar">
                <div className="progress-bar-fill" style={{ width: '100%' }}>
                  <span className="progress-bar-percentage" style={{ color: 'white' }}>100%</span>
                </div>
              </div> */}
            </motion.div>
          </div>
        </div>

        {/* Section 2 */}
        {/* <div className="row my-5 align-items-center flex-md-row-reverse">
          <div className="col-12 col-md-6 text-center mb-4 mb-md-0 glow-image">
            <motion.img
              src={Rajendra}
              className="img-fluid"
              alt="Image 2"
              initial={{ x: '100vw' }}
              animate={{ x: 0 }}
              transition={{ type: 'spring', stiffness: 50 }}
            />
          </div>
          <div className="col-12 col-md-6">
            <motion.div
              className="content px-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1.5 }}
            >
              <h1 className="style-T text-start" style={{ color: 'black' }}>Mr. Rajendra Singh</h1>
              <div className="yellow-line mb-4"></div>
              <p className="text-start" style={{ color: 'black' }}>
              We take you on an inspiring journey through architectural excellence, where every detail reflects our commitment to quality and vision. From heritage-inspired designs that echo timeless elegance to cutting-edge modern infrastructure built for today’s evolving lifestyles, our developments are a blend of tradition and innovation. With a focus on precision, sustainability, and aesthetic harmony, each structure is thoughtfully crafted to elevate both form and function — creating spaces that stand the test of time. Our unwavering dedication to design integrity and engineering brilliance ensures that every project becomes a benchmark in excellence.              </p><br />
              <p className="text-start" style={{ color: 'black' }}><b>Let’s build landmarks that create lasting legacies!</b></p>
              <h5 className="text-start mt-4" style={{ color: 'black' }}>Meticulously Planned Projects</h5>
              <div className="progress-bar">
                <div className="progress-bar-fill" style={{ width: '100%' }}>
                  <span className="progress-bar-percentage" style={{ color: 'white' }}>100%</span>
                </div>
              </div>
              <h5 className="text-start mt-4" style={{ color: 'black' }}>Skilled & Visionary Team</h5>
              <div className="progress-bar">
                <div className="progress-bar-fill" style={{ width: '100%' }}>
                  <span className="progress-bar-percentage" style={{ color: 'white' }}>100%</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div> */}

        {/* Section 3 */}
        {/* <div className="row my-5 align-items-center">
          <div className="col-12 col-md-6 text-center mb-4 mb-md-0 glow-image">
            <motion.img
              src={gautamm}
              className="img-fluid"
              alt="Image 3"
              initial={{ x: '-100vw' }}
              animate={{ x: 0 }}
              transition={{ type: 'spring', stiffness: 50 }}
            />
          </div>
          <div className="col-12 col-md-6">
            <motion.div
              className="content px-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1.5 }}
            >
              <h1 className="style-T text-start" style={{ color: 'black' }}>Mr. Sunil Gautam</h1>
              <div className="yellow-line mb-4"></div>
              <p className="text-start" style={{ color: 'black' }}>
              Bold developments for visionaries who seek more than just property — they seek a legacy. Our projects are crafted for those who appreciate iconic architecture, thoughtful planning, and landscapes that leave a lasting impression. From striking façades to immersive green surroundings, we blend bold aesthetics with purposeful functionality — creating environments that not only inspire but also set new benchmarks in modern living. Invest in spaces that don’t just meet expectations, but redefine them — where every square foot tells a story of ambition, innovation, and refined lifestyle.              </p>
              <p className="text-start" style={{ color: 'black' }}><b>Your next great project is just one decision away!</b></p>
              <h5 className="text-start mt-4" style={{ color: 'black' }}>Visionary Development Standards</h5>
              <div className="progress-bar">
                <div className="progress-bar-fill" style={{ width: '100%' }}>
                  <span className="progress-bar-percentage" style={{ color: 'white' }}>100%</span>
                </div>
              </div>
              <h5 className="text-start mt-4" style={{ color: 'black' }}>Client Satisfaction</h5>
              <div className="progress-bar">
                <div className="progress-bar-fill" style={{ width: '99%' }}>
                  <span className="progress-bar-percentage" style={{ color: 'white' }}>99%</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default HomeAbout;
