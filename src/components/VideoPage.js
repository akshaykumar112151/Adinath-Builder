import React, { useEffect } from 'react';
import './VideoPage.css';

const VideoPage = () => {
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
    <div className="video-page">
    <div className="video-container">
    <iframe
  className="video"
  id="video-1"
  width="360"
  height="215"
  src="https://www.youtube.com/embed/2eLZyLGXG_Q?start=5"
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>

<iframe
  className="video"
  id="video-1"
  width="360"
  height="215"
  src="https://www.youtube.com/embed/naZkec8HhJ4?start=15"
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>

<iframe
  className="video"
  id="video-1"
  width="360"
  height="215"
  src="https://www.youtube.com/embed/E3klUzOkiok"
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>

<iframe
  className="video"
  id="video-1"
  width="360"
  height="215"
  src="https://www.youtube.com/embed/y-fmatXhAFY?start=6"
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>

<iframe
  className="video"
  id="video-1"
  width="360"
  height="215"
  src="https://www.youtube.com/embed/V2fHrcZz4gI"
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>

<iframe
  className="video"
  id="video-1"
  width="360"
  height="215"
  src="https://www.youtube.com/embed/SGlhbMfpwaE"
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>

<iframe
  className="video"
  id="video-1"
  width="360"
  height="215"
  src="https://www.youtube.com/embed/o8qdP7Ra8sM?start=1"
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>



<iframe
  className="video"
  id="video-1"
  width="360"
  height="215"
  src="https://www.youtube.com/embed/2eLZyLGXG_Q?start=5"
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>

<iframe
  className="video"
  id="video-1"
  width="360"
  height="215"
  src="https://www.youtube.com/embed/TScvCL1qJS0"
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>

<iframe
  className="video"
  id="video-1"
  width="360"
  height="215"
  src="https://www.youtube.com/embed/y-fmatXhAFY?start=6"
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>

<iframe
  className="video"
  id="video-1"
  width="360"
  height="215"
  src="https://www.youtube.com/embed/o8qdP7Ra8sM?start=2"
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>
<iframe
  className="video"
  id="video-1"
  width="360"
  height="215"
  src="https://www.youtube.com/embed/_aktqatXURA?start=86"
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>
      </div>
      
    </div>
    
  );
};

export default VideoPage;
