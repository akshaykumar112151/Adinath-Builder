import React from 'react'
import ContactForm from "./ContactForm";
import ContactFormBanner from './ContactFormBanner';
import ContactInfo from './ContactInfo';
import ContactMap from './ContactMap';
const ContactUs = () => {
  return (
    <div>
      <ContactFormBanner/><br /><br />
      <ContactForm/><br /><br /><br />
      <ContactInfo/><br /><br /><br />
      <ContactMap/>
    </div>
  )
}

export default ContactUs
