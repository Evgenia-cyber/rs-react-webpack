import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../components/Card';
import Form from '../components/Form';
import Paginator from '../components/Paginator';
import { cardsSlice } from '../redux/slices/homeSlice';

const Home = () => {
  const cards = useSelector(cardsSlice);

  return (
    <>
      <Form />
      {typeof cards !== 'string' && cards.length > 0 && (
        <>
          <Paginator />
          <div className="cards">
            {cards.map((card, index) => (
              <Card
                key={card.url}
                author={card.author}
                title={card.title}
                description={card.description}
                publishedAt={card.publishedAt}
                source={card.source}
                urlToImage={card.urlToImage}
                url={card.url}
                content={card.content}
                index={index}
              />
            ))}
          </div>
        </>
      )}
      {typeof cards === 'string' && <div className="no-results">{cards}</div>}
    </>
  );
};

export default Home;
