import React from 'react';
import Card from './components/Card';
import SearchBar from './components/SearchBar';
import { cardsData } from './data/cardsData';

const cards = cardsData;

const App = () => (
  <>
    <SearchBar />
    {cards.map((card) => (
      <Card
        key={card.city}
        country={card.country}
        city={card.city}
        img={card.img}
        alt={card.alt}
        price={card.price}
        comments={card.comments}
        views={card.views}
      />
    ))}
  </>
);

export default App;
