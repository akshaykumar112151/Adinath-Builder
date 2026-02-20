import React, { useState } from 'react';
import Salogo from "../components/img/Salogo.png";
import './Navbar.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from './About';
import Home from './Home';
import Career from './Career';
import ContactUs from './ContactUs';
import ScrollToTop from './ScrollToTop'; // Import ScrollToTop component
import VedPuramPhase from './VedPuramPhase';
import Dwarikaresidency from './Dwarikaresidency';
import VinayakCity from './VinayakCity';
import Takshshila from './Takshshila';
import VaishaliCity from './VaishaliCity';
import ShoryaCity from './ShoryaCity';
import TermsConditions from './TermsCondition';
import FeaturedProperties from './FeaturedProperties';
import UpComingProjects from './UpComingProject';
import CompletedProjects from './CompletedProjects';
import ImageGallery from './ImageGallery';
import Visit from './Visit';

const Navbar = ({ userName }) => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  const handleNavItemClick = () => setIsNavCollapsed(true);

  return (
    <Router>
      <div>
        <ScrollToTop /> {/* Add the ScrollToTop component here */}
        <header>
                
     
          <nav className="navbar navbar-expand-lg navbar-light bg-light py-0">
            <div className="container" style={{ paddingTop: '5px', paddingBottom: '5px' }}>
              <Link className="navbar-brand" to="/" onClick={handleNavItemClick}>
                <span role="img" aria-label="Hello">
                  <img src={Salogo} alt="" />
                </span>
              </Link>
              <button className="navbar-toggler" type="button" onClick={handleNavCollapse} aria-controls="navbarSupportedContent" aria-expanded={!isNavCollapsed} aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarSupportedContent">
                <ul className="navbar-nav ms-3 ">
                  <li className="nav-item">
                    <Link className="nav-link active men-link " aria-current="page" to="/" onClick={handleNavItemClick} style={{color: 'black'}}>HOME</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link women-link " to="/about-us" onClick={handleNavItemClick} style={{color: 'black'}}>ABOUT US</Link>
                  </li>
                  <li className="nav-item nav ">
                    <a className="nav-link nav-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color: 'black'}}>PROJECTS
                     
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><Link className="dropdown-item" to="/running-projects" onClick={handleNavItemClick} style={{color: 'black'}}>RUNNING PROJECTS </Link></li>
                      <hr className="dropdown-divider" />
                      <li><Link className="dropdown-item" to="/upcoming-projects" onClick={handleNavItemClick} style={{color: 'black'}}>UP-COMING PROJECTS </Link></li>
                      <hr className="dropdown-divider" />
                      <li><Link className="dropdown-item" to="/completed-projects" onClick={handleNavItemClick} style={{color: 'black'}}>COMPLETED PROJECTS</Link></li>
                     
                    </ul>
                  </li>
                  <li className="nav-item nav ">
                    <a className="nav-link nav-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color: 'black'}}>GALLERY
                     
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><Link className="dropdown-item" to="/image-gallery" onClick={handleNavItemClick} style={{color: 'black'}}>IMAGES</Link></li>
                      <hr className="dropdown-divider" />
                      <li><Link className="dropdown-item" to="/" onClick={handleNavItemClick} style={{color: 'black'}}>VIDEOS</Link></li>
                      
                      
                    </ul>
                  </li>
                
                  <li className="nav-item">
                    <Link className="nav-link women-link " to="/Career" onClick={handleNavItemClick} style={{color: 'black'}}>CAREER</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link women-link " to="/Visit" onClick={handleNavItemClick} style={{color: 'black'}}>VISITS</Link>
                  </li>
                
                  <li className="nav-item">
                    <Link className="nav-link women-link " to="/contact-us" onClick={handleNavItemClick} style={{color: 'black'}}>CONTACT US</Link>
                  </li>
                  <button class="call-button"><a rel="nofollow" class="component-target text-white" href="tel:+(91)-7055311111"><i class="fa fa-phone"></i><span class="component-target-text">+91 7055311111</span></a></button>
                </ul>
               
            
                
              </div>
              
            </div>
           
          </nav>
        </header>
        <div className="main-content"> {/* Added this wrapper div */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/running-projects" element={<FeaturedProperties/>} />
            <Route path="/upcoming-projects" element={<UpComingProjects/>} />
            <Route path="/completed-projects" element={<CompletedProjects/>} />
            <Route path="/VedPuram-Phase-2" element={<VedPuramPhase />} />
            <Route path="/Dwarika-residency" element={<Dwarikaresidency />} />
            <Route path="/vinayak-city" element={<VinayakCity/>} />
            <Route path="/takshshila" element={<Takshshila/>} />
            <Route path="/vaishali-city" element={<VaishaliCity/>} />
            <Route path="/shorya-city" element={<ShoryaCity/>} />
            <Route path="/image-gallery" element={<ImageGallery/>} />


           <Route path="/career" element={<Career />} />
           <Route path="/Visit" element={<Visit />} />

            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />

          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default Navbar;
