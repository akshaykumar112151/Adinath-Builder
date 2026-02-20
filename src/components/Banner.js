import React, { useEffect, useRef } from 'react';
import Banner1 from "../components/img/Banner1.webp";
import Banner2 from "../components/img/Banner2.jpg";
import Banner3 from "../components/img/Banner3.png";
import Banner4 from "../components/img/Banner4.png";
import Banner5 from "../components/img/Banner5.gif";
import Banner6 from "../components/img/banner6.gif";
import Banner7 from "../components/img/banner7.jpg";
import Banner8 from "../components/img/Banner8.webp";
import BannerMap from "../components/img/BannerMap.jpg";





const Banner = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js').then((bootstrap) => {
      if (carouselRef.current) {
        new bootstrap.Carousel(carouselRef.current, {
          interval: 4000,
          ride: 'carousel',
          pause: false,
          touch: true,
          wrap: true
        });
      }
    });
  }, []);

  const bannerImages = [BannerMap,Banner8,Banner4 , Banner3, Banner2, Banner5, Banner6, Banner7,Banner1 ];

  return (
    <div style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
      {/* Inline CSS for image height & responsiveness */}
      <style>{`
        .carousel-item img {
          height: 630px;
          width: 100%;
          object-fit: cover;
        }

        @media (max-width: 768px) {
          .carousel-item img {
            height: 300px;
          }
        }
      `}</style>

      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        ref={carouselRef}
      >
        {/* Indicators */}
        <div className="carousel-indicators">
          {bannerImages.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={index}
              className={index === 0 ? 'active' : ''}
              aria-current={index === 0 ? 'true' : undefined}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>

        {/* Slides */}
        <div className="carousel-inner">
          {bannerImages.map((imgSrc, index) => (
            <div
              className={`carousel-item ${index === 0 ? 'active' : ''}`}
              key={index}
            >
              <img
                src={imgSrc}
                className="d-block w-100"
                alt={`Banner ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
