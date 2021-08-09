import React from 'react';
import Card from '../components/Card';
import Form from '../components/Form';

const Home = () => {
  const [cards, setCards] = React.useState([]);

  return (
    <>
      <Form setCards={setCards} />
      <div className="cards">
        {typeof cards !== 'string' &&
          cards.length > 0 &&
          cards.map((card) => (
            <Card
              key={card.url}
              author={card.author}
              title={card.title}
              description={card.description}
              publishedAt={card.publishedAt}
              source={card.source}
              url={card.url}
              urlToImage={card.urlToImage}
            />
          ))}
      </div>
      {typeof cards === 'string' && <div className="no-results">{cards}</div>}
    </>
  );
};

export default Home;
