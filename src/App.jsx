import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

const App = () => {
  const [cards, setCards] = React.useState([]);

  return (
    <div className="app-container">
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
    </div>
  );
};

export default App;
