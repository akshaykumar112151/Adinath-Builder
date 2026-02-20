import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchNavbar.css'; // Import the CSS file

const SearchNavbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [highlightedIndex, setHighlightedIndex] = useState(-1); // For keyboard navigation
  const navigate = useNavigate();

  // List of pages with their corresponding paths
  const pages = [
    { name: 'Home', path: '/' },
    { name: 'Sunrise Taj Mahal Tour from Delhi', path: '/sunrise-taj-mahal-tour-from-delhi' },
    { name: 'Taj Mahal Tour from Delhi by car', path: '/taj-mahal-tour-from-delhi-by-car' },
    { name: 'Day Tour to Taj Mahal and Agra by Express Train from Delhi', path: '/day-tour-to-taj-mahal-and-agra-by-express-train-from-delhi' },
    { name: 'Full Day New and Old Delhi City Tour', path: '/full-day-new-and-old-delhi-city-tour' },
    { name: 'Day Trip to Jaipur from Delhi by Car', path: '/day-trip-to-jaipur-from-delhi-by-car' },
    { name: 'Cooking Class Experience In Delhi', path: '/cooking-class-experience-in-delhi' },
    { name: '2 Day Golden Triangle to Agra and Jaipur from Delhi', path: '/2-day-golden-triangle-to-agr-and-jaipur-from' },
    { name: '3 Day Golden Triangle to Agra and Jaipur from Delhi', path: '/3-day-golden-triangle-to-agra-and-jaipur-from-delhi' },
    { name: '4 Day Golden Triangle to Agra and Jaipur from Delhi', path: '/4-day-golden-triangle-to-agra-and-jaipur-from-delhi' },
    { name: '5 Day Golden Triangle to Agra and Jaipur from Delhi', path: '/5-day-golden-triangle-to-agra-and-jaipur-from-delhi' },
    { name: '6 Day Golden Triangle Tour with Varanasi', path: '/6-Day-golden-triangle-tour-with-varanasi' },
    { name: '6 Day Golden Triangle tour with Mumbai', path: '/6-day-golden-triangle-tour-with-mumbai' },
    { name: '6 Day Golden Triangle Tour with Udaipur', path: '/6-day-golden-triangle-tour-with-udaipur' },
    { name: '4 Day Golden Triangle Tour with Ranthambore', path: '/4-day-golden-triangle-tour-with-ranthambore' },
    { name: '6 Day Golden Triangle Tour from Delhi', path: '/6-day-golden-triangle-tour-from-delhi' },
    { name: 'Delhi Tours', path: '/delhi-tours' },
    { name: 'Agra Tours', path: '/agra-tours' },
    { name: 'Jaipur Tours', path: '/jaipur-tours' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Plan My Trip', path: '/plan-my-trip' },
    { name: 'Contact Us', path: '/contact-us' },

    
    


    

    
    // Add more pages here
  ];

  // Filter pages based on search term
  const filteredPages = pages.filter((page) =>
    page.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle navigation to selected page
  const handlePageSelect = (path) => {
    navigate(path);
    setSearchTerm('');
    setHighlightedIndex(-1);
  };

  // Handle keyboard navigation (up/down arrow and enter)
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      setHighlightedIndex((prevIndex) =>
        prevIndex < filteredPages.length - 1 ? prevIndex + 1 : prevIndex
      );
    } else if (e.key === 'ArrowUp') {
      setHighlightedIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : 0
      );
    } else if (e.key === 'Enter' && highlightedIndex >= 0) {
      handlePageSelect(filteredPages[highlightedIndex].path);
    }
  };

  return (
    
    <nav className="search-navbar ">
      <div className="search-container ">
        <input
          type="text"
          placeholder="Find Your Best Tour 🧳..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
          className="search-input"
        />
        <button
          onClick={() =>
            highlightedIndex >= 0
              ? handlePageSelect(filteredPages[highlightedIndex].path)
              : searchTerm && filteredPages.length > 0
              ? handlePageSelect(filteredPages[0].path)
              : null
          }
          className="search-button"
        >
          Search
        </button>
      </div>
      {searchTerm && (
        <ul className="search-results">
          {filteredPages.length === 0 ? (
            <li className="no-results">No results found</li>
          ) : (
            filteredPages.map((page, index) => (
              <li
                key={page.path}
                onClick={() => handlePageSelect(page.path)}
                className={`result-item ${index === highlightedIndex ? 'highlighted' : ''}`}
                onMouseEnter={() => setHighlightedIndex(index)}
              >
                {page.name}
              </li>
            ))
          )}
        </ul>
      )}
    </nav>
  );
};

export default SearchNavbar;
