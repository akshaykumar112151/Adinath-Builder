import React from 'react';
import "../components/VideosBanner.css";
import Videosbannner from "../components/img/Videosbannner.jpg";

const VideosBanner = () => {
  return (
    <div>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Videosbannner} className="d-block w-100 carousel-image" alt="..." />
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideosBanner;
