import React from 'react';
import viewsImg from '../assets/icons/eye.svg';
import commentsImg from '../assets/icons/comments.svg';

const Card = ({ country, city, img, alt, price, comments, views }) => (
  <div className="card-container">
    <img className="img" src={img} alt={alt} />
    <div className="card-content-container">
      <h2 className="card-country">{country}</h2>
      <h3 className="card-city">{city}</h3>
      <p className="card-price-text">
        Стоимость тура:
        <span className="card-price">{price}</span>
      </p>
      <div className="card-info">
        <div className="card-info-views">
          <img className="card-icon" src={viewsImg} alt="eye" />
          <span>{views}</span>
        </div>
        <div className="card-info-comments">
          <img className="card-icon" src={commentsImg} alt="comments" />
          <span>{comments}</span>
        </div>
      </div>
    </div>
  </div>
);

export default Card;
