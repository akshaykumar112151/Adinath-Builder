import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './AllProjects.css'; // Custom CSS file for styling
import allprojectimg from "./img/allprojectimg.jpg"
const AllProjects = () => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.5 } // Trigger animation when 50% of the element is in view
    );

    const element = document.querySelector('.single-project-container');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <div
      className={`single-project-container ${isInView ? 'in-view' : ''}`}
    >
      <div className="image-section">
        <img
          src={allprojectimg} // Replace with your image URL
          alt="Current Project"
          className="project-image"
        />
      </div>

      <div className="text-section text-start">
        <h2 className=' text-start'>Our Best  Running Projects</h2>
        <p>
          Currently, we are working on several high-quality <br /> construction
          projects, including <br />  <strong>Ved Puram Phase-2</strong>,<br />  <strong>Dwarika Residency</strong>,<br />  <strong>Vinayak City</strong>,<br />  <strong>Takshshila</strong>,<br />  <strong>Vaishali City</strong>,<br />  <strong>Shorya City</strong>.<br /> 
          These projects offer premium living spaces designed to meet the highest standards of comfort and quality.
        </p>
        <Link to="/running-projects" className="shake-view-projects-btn">
  View All Projects
</Link>

      </div>
    </div>
  );
};

export default AllProjects;
