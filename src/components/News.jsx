import React from 'react';
import NewsCard from './NewsCard';

function News({ news, selectedCategory }) {
  const capitalizedCategory = selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1);
  return (
    <div className="container" style={{ marginTop: '60px' }}>
      <h2 className="text-center">{capitalizedCategory} News</h2> {/* Display selected category as a heading */}
      <div className="row">
        {Array.isArray(news) && news.map((newsItem, index) => (
          <div className="col-md-4" key={index}>
            <NewsCard news={newsItem} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;
