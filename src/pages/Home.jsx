import React from 'react';
import Card from '../components/Card';
import Form from '../components/Form';
import Paginator from '../components/Paginator';
import { minPageSize, sorts } from '../constants/constants';

const Home = () => {
  const [searchValue, setSearchValue] = React.useState('');

  const [sortBy, setSortBy] = React.useState(sorts[0]);

  const [pageSize, setPageSize] = React.useState(minPageSize);

  const [totalPages, setTotalPages] = React.useState('0');

  const [isLoading, setIsLoading] = React.useState(false);

  const [cards, setCards] = React.useState([]);

  return (
    <>
      <Form
        searchValue={searchValue}
        sortBy={sortBy}
        pageSize={pageSize}
        isLoading={isLoading}
        setCards={setCards}
        setIsLoading={setIsLoading}
        setSearchValue={setSearchValue}
        setSortBy={setSortBy}
        setPageSize={setPageSize}
        setTotalPages={setTotalPages}
      />
      {typeof cards !== 'string' && cards.length > 0 && (
        <>
          <Paginator
            searchValue={searchValue}
            sortBy={sortBy}
            pageSize={pageSize}
            totalPages={totalPages}
            setCards={setCards}
            setIsLoading={setIsLoading}
          />
          <div className="cards">
            {cards.map((card) => (
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
        </>
      )}
      {typeof cards === 'string' && <div className="no-results">{cards}</div>}
    </>
  );
};

export default Home;
