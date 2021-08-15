import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect, useLocation } from 'react-router-dom';
import { infoSlice, isRedirectToHomeSlice, setInfo, setIsRedirectToHome } from '../redux/slices/detailsSlice';

const Details = () => {
  const dispatch = useDispatch();

  const info = useSelector(infoSlice);
  const isRedirectToHome = useSelector(isRedirectToHomeSlice);

  const { pathname } = useLocation();

  React.useEffect(() => {
    let card = window.localStorage.getItem('card');
    if (card) {
      card = JSON.parse(card);
      const pathnameFromCard = `/details/${card.index}`;
      if (pathnameFromCard !== pathname) {
        dispatch(setIsRedirectToHome(true));
      } else {
        dispatch(setInfo(card));
      }
    } else {
      dispatch(setIsRedirectToHome(true));
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
