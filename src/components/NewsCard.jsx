import React from 'react';

function NewsCard({ news }) {
  // Check if news object is empty or null
  if (!news || Object.keys(news).length === 0) {
    return (
      <div className="card mb-3">
        <div className="card-body">
          <p className="card-text">No news available</p>
        </div>
      </div>
    );
  }

  return (
    <div className="card mb-3">
      <img src={news.imageUrl} className="card-img-top img-fluid" alt="News" />
      <div className="card-body">
        <h5 className="card-title">{news.title}</h5>
        <p className="card-text">{news.content}</p>
        <p className="card-text"><small className="text-muted">{news.author}</small></p>
        <p className="card-text"><small className="text-muted">{news.date} - {news.time}</small></p>
        <a href={news.readMoreUrl} className="btn btn-primary">Read More</a>
      </div>
    </div>
  );
}

export default NewsCard;
