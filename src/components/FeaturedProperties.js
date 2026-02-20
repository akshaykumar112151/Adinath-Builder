import React, { useState } from 'react';
import "./FeaturedProperties.css";
import VedPuram from "./img/VedPuram-1.png";
import Dwarikaimg1 from "./img/Dwarikaimg1.jpg";
import VinayakCityimg1 from "./img/VinayakCityimg1.jpg";
import Takshshilaimg1 from "./img/Takshshilaimg1.jpg";
import VaishaliCityimg1 from "./img/VaishaliCityimg1.jpg"
import Shouryaimg1 from "./img/Shouryaimg1.webp";
import { Link } from "react-router-dom";

const FeaturedProperties = () => {
  const [hoveredLink, setHoveredLink] = useState(null);

  const properties = [
    {
      img: VedPuram,
      link: "/VedPuram-Phase-2",
      title: "Adinath Ved Puram Phase-2",
      desc: "KDS Baghel Degree College Mod Dhanoli ,Jagner Road, Agra"
    },
    {
      img: Dwarikaimg1,
      link: "/Dwarika-residency",
      title: " Adinath Dwarika Residency",
      desc: "Near Holy Light School Ladamda, Fathepur Sikri Road, Agra"
    },
    {
      img: VinayakCityimg1,
      link: "/vinayak-city",
      title: "Adinath Vinayak City",
      desc: "Mauza Baad Near Dimond Circle, Agra"
    },
    {
      img: Takshshilaimg1,
      link: "/takshshila",
      title: " Adinath's Takshshila",
      desc: "Behind Gyadevi Mahavidhyalay, Novri, Pachgai Kheda, Deori Road, Agra"
    },
    {
      img: VaishaliCityimg1,
      link: "/vaishali-city",
      title: "Adinath's Vaishali City",
      desc: "Kakua chauraha, In Front of Police Chowki, Gwalior Road, Agra "
    },
    {
      img: Shouryaimg1,
      link: "/shorya-city",
      title: "Adinath's Shorya City",
      desc: "S.S. Educational Institute , Mode Gamri, Jagner Road, Agra "
    }
  ];

  return (
    <div>
      <br /><br />
      <div className="style-Fs">
        <h1>
          ꜰᴇᴀᴛᴜʀᴇ <span style={{ color: 'red' }}>ᴘʀᴏᴘᴇʀᴛɪᴇꜱ </span>
        </h1><br />
        <h4>Our Best Running Projects</h4>
      </div>

      <div className="container-A py-3 px-4">
        <div className="row text-start">
          {properties.map((property, index) => (
            <div key={index} className="col-lg-6 col-md-6 mb-4">
              <div className="card-A">
                <Link to={property.link} style={{ textDecoration: 'none' }}>
                  <img src={property.img} className="card-img-top" alt={property.title} />
                </Link>
                <div className="card-body"><br />
                  <Link
                    to={property.link}
                    onMouseEnter={() => setHoveredLink(property.link)}
                    onMouseLeave={() => setHoveredLink(null)}
                    style={{
                      textDecoration: 'none',
                      color: 'black',
                      transform: hoveredLink === property.link ? 'scale(1.05)' : 'scale(1)',
                      transition: 'all 0.3s ease',
                      display: 'inline-block'
                    }}
                  >
                    <h3 className='text-start'><b>{property.title}</b></h3>
                    <p>{property.desc}</p>
                  </Link>
                </div>
                <div className="container-F">
                  <Link to={property.link} style={{ textDecoration: 'none', color: 'black' }}>
                    <div className="item text-start"> More Details</div>
                  </Link>
                </div><br />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
