import React from 'react';

const Card = ({ name, phone, deliveryDate, country, gender }) => (
  <div className="card-container">
    <h2 className="">{name}</h2>
    <p className="">
      <span>Phone: </span>
      {phone}
    </p>
    <p className="">
      <span>Delivery date: </span>
      {deliveryDate}
    </p>
    <p className="">
      <span>Country: </span>
      {country}
    </p>
    <p className="">
      <span>Gender: </span>
      {gender}
    </p>
  </div>
);

export default Card;
