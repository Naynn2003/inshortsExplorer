import React, { useState } from 'react';

function Navbar({ onCategoryClick }) {
  const categories = [
    "all", "national", "business", "sports", "world",
    "politics", "technology", "startup", "entertainment",
    "miscellaneous", "hatke", "science", "automobile"
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleCategoryClick = (category) => {
    onCategoryClick(category);
    // Close the menu when a category is selected
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid" style={{ maxWidth: '90%' }}> {/* Center content */}
        <span className="navbar-brand" style={{ cursor: 'pointer' }}>News In Shorts</span> {/* Brand name */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {categories.map((category, index) => (
              <li className="nav-item" key={index}>
                <span className="nav-link" style={{ cursor: 'pointer' }} onClick={() => handleCategoryClick(category)}>{category}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
