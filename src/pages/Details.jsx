import React from 'react';
import { Link, Redirect, useLocation } from 'react-router-dom';

const Details = () => {
  const [info, setInfo] = React.useState('');

  const [isRedirectToHome, setIsRedirectToHome] = React.useState(false);

  const { pathname } = useLocation();

  React.useEffect(() => {
    let card = window.localStorage.getItem('card');
    if (card) {
      card = JSON.parse(card);
      const pathnameFromCard = `/details/${card.index}`;
      if (pathnameFromCard !== pathname) {
        setIsRedirectToHome(true);
      } else {
        setInfo(card);
      }
    } else {
      setIsRedirectToHome(true);
    }
  }, []);

  return (
    <div className="card-container card-container-details">
      <div>
        <img className="img" src={info.urlToImage} alt="" />
        <p className="card-info">
          <span className="card-info-label">Author: </span>
          {info.author}
        </p>
        <p className="card-info">
          <span className="card-info-label">Source: </span>
          {info.source}
        </p>
        <p className="card-info card-date">{info.publishedAt}</p>
        <h2 className="card-title">{info.title}</h2>
        <p>{info.content}</p>
        <p className="card-info">
          <span className="card-info-label">Url: </span>
          <Link to={{ pathname: info.url }} target="_blank" rel="noopener noreferrer">
            {info.url}
          </Link>
        </p>
      </div>
      {isRedirectToHome && <Redirect to="/" />}
    </div>
  );
};

export default Details;
