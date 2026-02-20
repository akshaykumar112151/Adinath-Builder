import React from 'react'
import "./HomeReview.css";
import Googleimage from "../components/img/Googleimage.png";
import Youtubeimage from "../components/img/Youtubeimage.jpg";
import Facebookimage from "../components/img/Facebookimage.png";
import Instaimage from "../components/img/Instaimage.png";

const HomeReview = () => {
  return (
    <div>
      <div className="app-container">
      <div className="card">
        <a href="..."><br /><img src={Googleimage} alt="Google Logo" /></a>
        <div className="rating">4.8/5</div>
        <div className="count">38 REVIEWS</div>
      </div>
      <div className="card">
        <a href="..." target="_blank" rel="noopener noreferrer"><img src={Youtubeimage} alt="Youtube Logo" /></a>
        <div className="rating">...</div> <br />
        {/* <div className="count">08 PATIENT STORIES</div> */}
      </div>
      <div className="card">
        <a href="..." target="_blank" rel="noopener noreferrer"><img src={Facebookimage} alt="Facebook Logo" /></a>
        <div className="rating">...</div>
        {/* <div className="count">32,439 LIKES</div> */}
      </div>
      <div className="card"><br />
        <a href="..." target="_blank" rel="noopener noreferrer"><img src={Instaimage} alt="Instagram Logo" /></a>
        <div className="rating">...</div>
        {/* <div className="count">90 VOTES</div> */}
      </div>
    </div>
    
    </div>
  )
}

export default HomeReview
