import React, { useState } from 'react';
import "./FeaturedProperties.css";

import Comingsoon from "./img/completedimg.jpg";

import { Link } from "react-router-dom";

const UpComingProjects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      img: Comingsoon,
      link: "/",
      title: "Adinath GREEN MEDOW",
      desc: "NEAR ADA PROJECT, RING ROAD, FATEHABAD, ETMADPUR MADRA AGRA"
    },
    {
      img: Comingsoon,
      link: "/",
      title: "Adinath THEME CITY",
      desc: "NEAR EDMADPUR MADRA, RING ROAD, FATEHABAD ROAD AGRA"
    },
    {
      img: Comingsoon,
      link: "/",
      title: "COMING SOON 🌆",
      desc: "Tayyar ho jaiye, kuch naya, kuch alag aane wala hai!"
    }
  ];

  return (
    <div>
      <br /><br />
      <div className="style-Fs">
        <h5 style={{ fontSize: '20px' }}>
          OUR BEST <span style={{ color: 'red' }}>UPCOMING PROJECTS</span>
        </h5>
      </div>
      <div className="container-A py-3 px-4">
        <div className="row text-start">
          {projects.map((property, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div
                className="card-A"
                style={{
                  padding: '10px',
                  borderRadius: '10px',
                  boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
                }}
              >
                <Link to={property.link} style={{ textDecoration: 'none' }}>
                  <img
                    src={property.img}
                    alt={property.title}
                    style={{
                      width: '100%',
                      height: '180px',
                      objectFit: 'cover',
                      borderRadius: '5px'
                    }}
                  />
                </Link>
                <div className="card-body" style={{ padding: '10px 0' }}>
                  <Link
                    to={property.link}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    style={{
                      textDecoration: 'none',
                      color: 'black',
                      transform: hoveredIndex === index ? 'scale(1.05)' : 'scale(1)',
                      transition: 'all 0.3s ease',
                      display: 'inline-block'
                    }}
                  >
                    <h3
                      className="text-start"
                      style={{ fontSize: '18px', marginBottom: '5px' }}
                    >
                      <b>{property.title}</b>
                    </h3>
                    <p style={{ fontSize: '14px', marginBottom: '0' }}>
                      {property.desc}
                    </p>
                  </Link>
                </div>
                <div className="container-F">
                  <Link
                    to={property.link}
                    style={{ textDecoration: 'none', color: 'black' }}
                  >
                    <div
                      className="item text-start"
                      style={{ fontSize: '14px', fontWeight: '500' }}
                    >
                      More Details
                    </div>
                  </Link>
                </div>
                <br />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpComingProjects;
