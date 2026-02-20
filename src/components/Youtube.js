import React from 'react';
import "./Youtube.css";
function Youtube() {
  const handleClick = () => {
    window.open('', '_blank');
  };

  return (
    <div className="container-Y">
      <div className="play-button" onClick={handleClick}>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-play"
        >
          <path d="M5 3l14 9-14 9V3z" />
        </svg>
      </div>
      <div className="content">
      <div>
             <h1 className="styled-h1 text-center text-white"> Ready to embark on your journey?</h1> <br />
            </div>
        
        <h2 className="subtitle">
        We are World Leading
        
        </h2>
        <h2 className="subtitle">
        Online Tour Booking Platform       </h2>
      </div>
    </div>
  );
}

export default Youtube;
