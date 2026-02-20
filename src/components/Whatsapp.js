import React from 'react';
import './Whatsapp.css';
import whatsappLogo from '../components/img/whatsapp.png';

const Whatsapp = () => {
  return (
    <div className="fixed-bottom p-3 slide-right" style={{ zIndex: "6", left: "initial" }}>
      <a href="https://wa.me/917055311111?text=" target="_blank" rel="noopener noreferrer" >
        <img src={whatsappLogo} width="40" alt="aaa" />
      </a>
    </div>
  );
}

export default Whatsapp;
