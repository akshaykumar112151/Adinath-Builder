// src/Footer.js
import React from 'react';
import './Footer.css';
import Salogo from "../components/img/Salogo.png";
import '@fortawesome/fontawesome-free/css/all.min.css';
// import tripadvisor from "./img/tripadvisor.jpg";

const Footer = () => {
  return (
    
    <footer className="footer py-5">
      
      <div className="footer-section contact-us  ">
        <img src={Salogo} alt="Logo" className="footer-logo" />
        <h5><b><i>Now Build With Us</i></b></h5><p className="text-footer-p">Buy, sell, and invest in plots, colonies, and land with ADINATH GROUP OF COMPANY We make property transactions seamless and hassle-free. Start your real estate journey today!</p>
        {/* <p>Phone: <a href="tel:+918377855100">+91-8377855100</a></p>
        <p>Email: <a href="mailto:info@zeeva.in">info@zeeva.in</a></p> */}
      </div>
      <div className="footer-section quick-links">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="about-us">About</a></li>
          <li><a href="/image-gallery">Gallery</a></li>
          <li><a href="/Visit">Visits</a></li>
          {/* <li><a href="#mauritius">Blogs</a></li> */}
          <li><a href="/contact-us">Contact Us</a></li>
          <li><a href="/">Term&Condition</a></li>

        </ul>
        
        
      </div>
      
      
      <div className="footer-section opening-hours">
        
      <div className="footer-sectionp quick-links">
        <h3>OUR PROJECTS</h3>
        <ul>
        <li><a href="/running-projects">RUNNING PROJECTS</a></li>
        <li><a href="/upcoming-projects">UP-COMING PROJECTS</a></li>

          <li><a href="/completed-projects">COMPLETED PROJECTS</a></li>
          {/* <li><a href="/sunrise-taj-mahal-tour-from-delhi">READY TO MOVE          </a></li> */}
          
          {/* <li><a href="#mauritius">Blogs</a></li> */}
          {/* <li><a href="/contact-us">Contact Us</a></li> */}
        </ul>
        
        
      </div>
        <div className="social-icons">
          <a href="https://www.facebook.com/" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>

          <a href="https://www.instagram.com/" aria-label="Instagram" target="_blank" rel="noopener noreferrer" ><i className="fab fa-instagram ms-2"></i></a>

          <a href="https://www.twitter.com/" aria-label="Twitter" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
          <a href="https://www.linkdin.com/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
          <a href="https://www.youtube.com/" aria-label="YouTube" target="_blank" rel="noopener noreferrer" ><i className="fab fa-youtube ms-2"></i></a>
          {/* <a href="https://www.google.com/search?kgmid=/g/11vp_f5w43&hl=en-IN&q=Dr.+Vaishali+Tandon&kgs=0b01d5c6f42a5fb0&shndl=30&shem=lrnole,ssic&source=sh/x/loc/osrp/m5/4#lrd=0x3974779af6cb7cef:0xe02e9fe2e36d2145,1,,,," aria-label="Google" target="_blank" rel="noopener noreferrer" ><i className="fab fa-google ms-2"></i></a> */}

        </div>
      </div>
      
      <div className="footer-section opening-hours">
        <h3>Find Us On</h3>
        <a rel="nofollow" className="component-target" href="tel:+91 7055311111">
          <i className="fa fa-phone"></i>
          <span className="component-target-text"> +91 7055311111</span>
          
       </a><br />
       <a rel="nofollow" className="component-target" href="tel:+91 9412262935">
          <i className="fa fa-phone"></i>
          <span className="component-target-text"> +91 9412262935</span>
          
       </a><br />
        <a  href="mailto:adinathinfratech@gmail.com"><br /><i className="fas fa-envelope"></i> adinathinfratech@gmail.com</a>
        <div className="footer-section location text-start ms-0"><br />
        <h3>Location</h3> 
        <p>Visit us at our location:</p>
        <span><a href="/" aria-label="Location" target="_blank" rel="noopener noreferrer"><p><span><i className="fas fa-map-marker-alt " ></i> Head Office: 508, 5th Floor, Maruti Plaza, Sanjay Place, Agra (U.P.) </span></p></a></span>
        {/* <span><a href="/" aria-label="Location" target="_blank" rel="noopener noreferrer"><p><span><i className="fas fa-map-marker-alt " ></i> Corporate Office: UG Sanjay Place,Sanjay Place, Agra (U.P.)</span></p></a></span> */}

      </div>
     
      

        
      {/* <a href="https://www.tripadvisor.in/Attraction_Review-g297683-d19593752-Reviews-Babloo_Heritage_Tuk_Tuk-Agra_Agra_District_Uttar_Pradesh.html" aria-label="Tripadvisor" target="_blank" rel="noopener noreferrer"><img className='trip-img' src={tripadvisor} alt="" /></a> */}
      </div>
      
      <div className="copyright ">
      <p className='text-whitesmoke'>©ADINATH INFRATECH PVT.LTD. 2025 | All rights reserved. Design and Developed by <span><a href="https://www.magnumdigitalsolution.com/" target="_blank" rel="noreferrer noreferrer">Magnum Digital Solutions </a></span></p>
      </div>
     
      
      
      
    </footer>
    
    
  );
};

export default Footer;
