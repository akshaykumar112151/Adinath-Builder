import React from 'react'
import career from "./img/career.jpg";
const CareerBanner = () => {
  return (
    <div>
      <div>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={career} className="d-block w-100 carousel-image" alt="..." />
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default CareerBanner
