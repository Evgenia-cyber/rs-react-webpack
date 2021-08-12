import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ author, title, description, publishedAt, source, urlToImage, url, content, index }) => {
  const handleClick = () => {
    const card = { author, title, publishedAt, source, urlToImage, url, content, index };
    window.localStorage.setItem('card', JSON.stringify(card));
  };

  return (
    <div className="card-container">
      <div>
        <img className="img" src={urlToImage} alt="" />
        <p className="card-info">
          <span className="card-info-label">Author: </span>
          {author}
        </p>
        <p className="card-info card-date">{publishedAt}</p>
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
      </div>
      <Link to={`/details/${index}`} onClick={handleClick}>
        <span className="more-btn">More info</span>
      </Link>
    </div>
  );
};

export default Card;
