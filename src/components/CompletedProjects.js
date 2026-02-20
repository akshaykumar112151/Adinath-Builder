import React, { useState } from 'react';
import "./FeaturedProperties.css";
import completedimg from "./img/completedimg.jpg";



import { Link } from "react-router-dom";

const CompletedProjects = () => {
  const [hoveredLink, setHoveredLink] = useState(null);

  return (
    <div>
      <br /><br />
      <div className="style-Fs">
        <h5>
        OUR BEST <span style={{ color: 'red' }}>COMPLETED PROJECTS</span>
        </h5>
        
      </div>
      <div className="container-A py-3 px-4">
        <div className="row text-start">
          {[{
            img: completedimg, link: "", title: "Adinath R.K PURAM ", desc: " "
          }, {
            img: completedimg, link: "", title: " Adinath R.K PURAM PHASE II", desc: " "
          }, {
            img: completedimg, link: "", title: "Adinath SHREE JI PURAM ", desc: ""
          }, {
            img: completedimg, link: "", title: " Adinath's RISHIKESH DHAM ", desc: " "
          }, {
            img: completedimg, link: "", title: "Adinath's MONIKA VIHAR ", desc: ""
          }, 
          {
            img: completedimg, link: "", title: "Adinath's PINK CITY COLONY ", desc: ""
          },
          {
            img: completedimg, link: "", title: "Adinath's PINK CITY SECOND  ", desc: " "
          },
          {
            img: completedimg, link: "", title: "Adinath's DHARAM ENCLAVE  ", desc: "  "
          },
          {
            img: completedimg, link: "", title: "Adinath's SANGAM VIHAR  ", desc: " "
          },
          {
            img: completedimg, link: "", title: "Adinath's SUN CITY  ", desc: "  "
          },
          {
            img: completedimg, link: "", title: "Adinath's SUN CITY PHASE II ", desc: " "
          },
          {
            img: completedimg, link: "", title: "Adinath's STAR CITY  ", desc: "  "
          },
          {
            img: completedimg, link: "", title: "Adinath's DHARAM STATE  ", desc: " "
          },
          {
            img: completedimg, link: "", title: "Adinath's BABA ENCLAVE  ", desc: " "
          },
          {
            img: completedimg, link: "", title: "Adinath's ARUN VIHAR  ", desc: " "
          },
          {
            img: completedimg, link: "", title: "Adinath's D.R.M. STATE  ", desc: " "
          },
          {
            img: completedimg, link: "", title: "Adinath's R.K. PALACE   ", desc: " "
          },
          {
            img: completedimg, link: "", title: "Adinath's MANGAL MURTI DHAM   ", desc: " "
          },
          {
            img: completedimg, link: "", title: "Adinath's SHYAM BIHAR  ", desc: "  "
          },
          {
            img: completedimg, link: "", title: "Adinath's SUNRISE CITY   ", desc: " "
          },
          {
            img: completedimg, link: "", title: "Adinath's ADI PURAM   ", desc: "  "
          },
          {
            img: completedimg, link: "", title: "Adinath's VED PURAM   ", desc: "  "
          },
        ].map((property, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
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

export default CompletedProjects;
