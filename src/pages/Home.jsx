import React from 'react';
import Card from '../components/Card';
import Form from '../components/Form';

const Home = () => {
  const [cards, setCards] = React.useState([]);

  return (
    <>
      <Form setCards={setCards} />
      <div className="cards">
        {cards.map((card) => (
          <Card
            key={card.phone}
            name={card.name}
            phone={card.phone}
            deliveryDate={card.deliveryDate}
            country={card.country}
            gender={card.gender}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
