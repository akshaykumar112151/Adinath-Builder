import React from 'react';
import './AboutBanner.css';
import { motion } from 'framer-motion';
import aboutbanner from "./img/aboutbanner.jpg"
import monika from "./img/Monika.jpg";
import Rajendra from "./img/Rajenddra.jpg";
import gautamm from "./img/gautamm.jpg";

const AboutBanner = () => {
  return (
    <div className="banner-container">
      {/* Banner Carousel */}
      <div>
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={aboutbanner}
                className="d-block w-100 carousel-image"
                alt="..."
              />
            </div>
          </div>
        </div>
      </div><br /><br />
      <div className="text-white p-6 max-w-4xl text-start ms-3">
      <h2 className="text-3xl font-bold mb-6 border-b border-white pb-2">Profile / Overview</h2>
      
      <p className="mb-4">
        Since the inception, <strong>Adinath</strong> has 19 years of track record of sustained growth,
        customer satisfaction, and innovation. The company offers an array of real estate
        solutions to its customers viz. land, land and property sale, dealing in homes and
        land properties to name a few.
      </p>

      <p className="mb-4">
        Over the years, Adinath has established itself as a major brand in the real estate
        sector, along with our relentless pursuit towards the wellbeing of the environment,
        community, and people as a whole. We are working towards turning our valued customer’s
        dreams into a reality.
      </p>

      <p className="mb-4">
        The sheer hard work and integrity of our management have resulted in the showers of
        appreciation and faith by our satisfied customers.
      </p>

      <h3 className="text-2xl font-semibold mt-8 mb-3 border-b border-gray-400 pb-1">Best of the industry practices</h3>
      <p className="mb-4">
        Supported by an advanced information system, our highly efficient management delivers
        accurate estimates and effective cost control. We are on a mission to provide customer
        satisfaction and create value for stakeholders through best of the industry practices,
        professionalism, transparency, quality, cutting-edge technology, and social responsibility.
      </p>

      <h3 className="text-2xl font-semibold mt-8 mb-3 border-b border-gray-400 pb-1">Philosophy</h3>
      <p className="mb-4">
        Adinath’s business philosophy derives its strength from the belief that customer
        satisfaction is our real and primary motive, above the growth in figures and revenues —
        which we believe is nothing but one of the outcomes of client’s happiness and satisfaction.
      </p>
      <p>
        Adinath, with its unparalleled business approach and vision, is consistently working to
        create value for its customers and business partners. Adinath Builders is uniquely committed
        to serve its clients.
      </p>
      <h3 className="text-2xl font-semibold mt-8 mb-3 border-b border-gray-400 pb-1">OUR VISION</h3>
      <p className="mb-4">
      The vision of Adinath Builders is to achieve the highest possible standards of the real estate market while establishing our company as the most trusted and preferred real estate company.
      </p>
     
      <h3 className="text-2xl font-semibold mt-8 mb-3 border-b border-gray-400 pb-1">OUR MISSION</h3>
      <p className="mb-4">
      At Adinath, our mission is to modernize the experience of buying and selling real estate by cultivating a spirit of collaboration innovation and integrity.


      </p>
      <h3 className="text-2xl font-semibold mt-8 mb-3 border-b border-gray-400 pb-1">A NAME CALLED TRUST</h3>
      <p className="mb-4">
      The company fasters a culture of partnership in which all clients are represented in a cooperative environment by the management.

      </p>
      <p className="mb-4">
      Our foremost mission is to glorify the God by putting our clients intrests above our own providing the biggest level of honesty and expertise. Our collaboration spirit and desire to grow will help us achieve the goals we set. We will make the families we serve feel special, creating raving fans, and help them truly win. We will succeed because we will not let our clients fail.
      </p>
     
    </div>
     {/* 3 Sections */}
<div className="container">
  {/* Section 1 */}
  <div className="row my-5 align-items-center">
    <div className="col-12 col-md-6 text-center mb-4 mb-md-0 glow-image">
      <motion.img
        src={monika}
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
        <h1 className="style-T text-start text-white">Mrs. Monika Singh</h1>
        <div className="yellow-line mb-4"></div>
        <p className="text-start text-white">
        Embark on your ideal investment journey with confidence through our premium land development solutions.
        We specialize in delivering end-to-end services that combine strategic planning, expert execution, and uncompromised quality. From initial consultation to project completion, we ensure a seamless, hassle-free experience backed by transparent processes, timely delivery, and unmatched professionalism — turning your vision into a valuable reality.        </p><br /><br />
        <p className="text-start text-white"><b>Wishing you a prosperous and secure investment ahead!</b></p>
        <h5 className="text-start text-white mt-4">Unmatched Quality in Development</h5>
        <div className="progress-bar">
          <div className="progress-bar-fill" style={{ width: '100%' }}>
            <span className="progress-bar-percentage">100%</span>
          </div>
        </div>
        <h5 className="text-start text-white mt-4">Industry-Leading Expertise</h5>
        <div className="progress-bar">
          <div className="progress-bar-fill" style={{ width: '100%' }}>
            <span className="progress-bar-percentage">100%</span>
          </div>
        </div>
      </motion.div>
    </div>
  </div>

  {/* Section 2 */}
  <div className="row my-5 align-items-center flex-md-row-reverse">
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
        <h1 className="style-T text-start text-white">Mr. Rajendra Singh</h1>
        <div className="yellow-line mb-4"></div>
        <p className="text-start text-white">
        We take you on an inspiring journey through architectural excellence, where every detail reflects our commitment to quality and vision.
From heritage-inspired designs that echo timeless elegance to cutting-edge modern infrastructure built for today’s evolving lifestyles, our developments are a blend of tradition and innovation. With a focus on precision, sustainability, and aesthetic harmony, each structure is thoughtfully crafted to elevate both form and function — creating spaces that stand the test of time.
Our unwavering dedication to design integrity and engineering brilliance ensures that every project becomes a benchmark in excellence.        </p><br />
        <p className="text-start text-white"><b>Let’s build landmarks that create lasting legacies!</b></p>
        <h5 className="text-start text-white mt-4">Meticulously Planned Projects</h5>
        <div className="progress-bar">
          <div className="progress-bar-fill" style={{ width: '100%' }}>
            <span className="progress-bar-percentage">100%</span>
          </div>
        </div>
        <h5 className="text-start text-white mt-4">Skilled & Visionary Team</h5>
        <div className="progress-bar">
          <div className="progress-bar-fill" style={{ width: '100%' }}>
            <span className="progress-bar-percentage">100%</span>
          </div>
        </div>
      </motion.div>
    </div>
  </div>

  {/* Section 3 */}
  <div className="row my-5 align-items-center">
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
        <h1 className="style-T text-start text-white">Mr. Sunil Gautam</h1>
        <div className="yellow-line mb-4"></div>
        <p className="text-start text-white">
        Bold developments for visionaries who seek more than just property — they seek a legacy.
Our projects are crafted for those who appreciate iconic architecture, thoughtful planning, and landscapes that leave a lasting impression. From striking façades to immersive green surroundings, we blend bold aesthetics with purposeful functionality — creating environments that not only inspire but also set new benchmarks in modern living.
Invest in spaces that don’t just meet expectations, but redefine them — where every square foot tells a story of ambition, innovation, and refined lifestyle.        </p>
        <p className="text-start text-white"><b>Your next great project is just one decision away!</b></p>
        <h5 className="text-start text-white mt-4">Visionary Development Standards</h5>
        <div className="progress-bar">
          <div className="progress-bar-fill" style={{ width: '100%' }}>
            <span className="progress-bar-percentage">100%</span>
          </div>
        </div>
        <h5 className="text-start text-white mt-4">Client Satisfaction</h5>
        <div className="progress-bar">
          <div className="progress-bar-fill" style={{ width: '99%' }}>
            <span className="progress-bar-percentage">99%</span>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
</div>

    </div>
  );
};

export default AboutBanner;
