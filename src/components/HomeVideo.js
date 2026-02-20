import React, { useEffect } from 'react';
import './HomeVideo.css';
import Video1 from '../assets/Video1.mp4';  // Import video file
import Video2 from '../assets/Video2.mp4';  // Import second video file

const HomeVideo = () => {
  useEffect(() => {
    const videos = document.querySelectorAll('.video');

    const scrollHandler = () => {
      videos.forEach(video => {
        const videoTop = video.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (videoTop < windowHeight * 0.75) {
          video.classList.add('animate');
        }
      });
    };

    window.addEventListener('scroll', scrollHandler);

    // Clean up event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  return (
    <div className="video-container">
      <div className="video-left">
        {/* Video in src folder */}
        <video className="video" width="360" height="215" controls autoPlay>
          <source src={Video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="video-right">
        {/* Video in src folder */}
        <video className="video" width="360" height="215" controls autoPlay>
          <source src={Video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HomeVideo;
