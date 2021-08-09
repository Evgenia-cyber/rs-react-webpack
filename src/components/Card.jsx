import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ author, title, description, publishedAt, source, url, urlToImage }) => (
  <div className="card-container">
    <img className="img" src={urlToImage} alt="" />
    <p className="card-info">
      <span className="card-info-label">Author: </span>
      {author}
    </p>
    <p className="card-info">
      <span className="card-info-label">Source: </span>
      {source}
    </p>
    <p className="card-info card-date">{publishedAt}</p>
    <h2 className="card-title">{title}</h2>
    <p>{description}</p>
    <Link to={{ pathname: url }} target="_blank" rel="noopener noreferrer">
      <span className="more-btn">More info</span>
    </Link>
  </div>
);

export default Card;
