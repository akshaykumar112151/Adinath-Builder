import React from 'react';
// import React, { useState, useEffect } from 'react';
import AboutBanner from './AboutBanner';
import PlanStat from './PlanStat';
import AboutVideo from './AboutVideo';
import AboutStatt from './AboutStatt';
// import Youtube from './Youtube';
// import AboutStat from './AboutStat';
// import TeamMember from './TeamMember';




const About = () => {
  // const [displayText, setDisplayText] = useState('');
  // const fullText = "Your Support🙏";

  // useEffect(() => {
  //   let currentIndex = 0;
  //   let reverse = false;

  //   const interval = setInterval(() => {
  //     if (!reverse) {
  //       setDisplayText(fullText.substring(0, currentIndex));
  //       currentIndex++;

  //       if (currentIndex > fullText.length) {
  //         reverse = true;
  //         currentIndex = fullText.length - 1;
  //       }
  //     } else {
  //       setDisplayText(fullText.substring(0, currentIndex));
  //       currentIndex--;

  //       if (currentIndex === 0) {
  //         reverse = false;
  //         currentIndex = 0;
  //       }
  //     }
  //   }, 500); // Interval duration in milliseconds

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="women-container">
     
      <AboutBanner/><br /><br /><br />
      
      <PlanStat/>
      <AboutVideo/>
      {/* <h2 className='text-black px-4 py-4 animated'>{displayText}</h2> */}
     <br /><br />
     
    
    {/* <Youtube/> */}
     
     <AboutStatt/>
     <br /><br />
     
    </div>
    
  );
};

export default About;
