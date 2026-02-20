import React from 'react';
import "./ContactMap.css";
const ContactMap = () => {
  return (
     <div className="map-container">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2920.1861236142245!2d78.003526788855!3d27.200915300000013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39747746203fffff%3A0xdf43da308d796f31!2sAdinath%20Builders(%20Seller%20of%20Residential%2C%20Investment%20and%20Commercial%20Types%20Plots)!5e1!3m2!1sen!2sin!4v1744273688214!5m2!1sen!2sin" 
                allowFullScreen
                loading="lazy"
                title="Google Map"
            ></iframe>
        </div>
  )
}

export default ContactMap
