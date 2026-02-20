import React from 'react';
import Contactbanner from "../components/img/Contactbanner.jpg";
import './ContactFormBanner.css';

const ContactFormBanner = () => {
  return (
    <div>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Contactbanner} className="d-block w-100 carousel-image" alt="..." />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactFormBanner;
