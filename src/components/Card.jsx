import React from 'react';

const Card = ({ name, phone, deliveryDate, country, gender }) => (
  <div className="card-container">
    <h2>{name}</h2>
    <p>
      <span className="card-info">phone: </span>
      {phone}
    </p>
    <p>
      <span className="card-info">delivery date: </span>
      {deliveryDate}
    </p>
    <p>
      <span className="card-info">country: </span>
      {country}
    </p>
    <p>
      <span className="card-info">gender: </span>
      {gender}
    </p>
  </div>
);

export default Card;
