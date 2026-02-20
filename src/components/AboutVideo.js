import React from 'react';
import bannerimg6 from './img/bannerimg6.jpg'; // लोकल इमेज का पाथ

const AboutVideo = () => {
  return (
    <div>
      <div className="video-two">
        <div
          className="video-two-bg jarallax"
          data-jarallax=""
          data-speed="0.2"
          data-imgposition="50% 0%"
          style={{ backgroundImage: `url(${bannerimg6})` }}
          data-jarallax-original-styles="background-image: url(assets/images/backgrounds/bannerimg6.jpg)"
        >
          <div
            id="jarallax-container-0"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              overflow: "hidden",
              zIndex: -100
            }}
          >
            <div
              style={{
                backgroundPosition: "50% 50%",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundImage: `url(${bannerimg6})`,
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw", // Responsive full width
                height: "100vh", // Responsive full height
                overflow: "hidden",
                pointerEvents: "none",
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden",
                willChange: "transform, opacity",
                marginTop: "21.7px",
                transform: "translate3d(0px, 7.3125px, 0px)",
                zIndex: -1
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background: "rgba(0, 0, 0, 0.6)", // Dark overlay
                  zIndex: 2
                }}
              />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="video-two__inner">
                <div className="video-one__video-link">
                  <a
                    href="https://www.youtube.com/watch?v=OmiLSLUMu0nnnnM"
                    className="video-popup"
                  >
                    <div className="video-one__video-icon">
                      <span className="icon-play-button" />
                      <i className="ripple" />
                    </div>
                  </a>
                </div>
                {/* <p className="video-one__tagline">Are you ready to travel?</p>
                <h2 className="video-one__title">
                  We are World Leading <br /> Online Tour Booking Platform
                </h2> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutVideo;
