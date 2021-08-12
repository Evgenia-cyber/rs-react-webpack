import React from 'react';
import Card from '../components/Card';
import Form from '../components/Form';
import Paginator from '../components/Paginator';
import { defaultCurrentPage, minPageSize, sorts } from '../constants/constants';

const Home = () => {
  const [cards, setCards] = React.useState([]);

  const [searchValue, setSearchValue] = React.useState('');

  const [sortBy, setSortBy] = React.useState(sorts[0]);

  const [pageSize, setPageSize] = React.useState(minPageSize);

  const [totalPages, setTotalPages] = React.useState(0);

  const [currentPage, setCurrentPage] = React.useState(defaultCurrentPage);

  const [isPaginatorBtnClicked, setIsPaginatorBtnClicked] = React.useState(false);

  const [isLoading, setIsLoading] = React.useState(false);

  return (
    <>
      <Form
        searchValue={searchValue}
        sortBy={sortBy}
        pageSize={pageSize}
        currentPage={currentPage}
        isLoading={isLoading}
        setCards={setCards}
        setIsLoading={setIsLoading}
        setSearchValue={setSearchValue}
        setSortBy={setSortBy}
        setPageSize={setPageSize}
        setTotalPages={setTotalPages}
        setCurrentPage={setCurrentPage}
        setIsPaginatorBtnClicked={setIsPaginatorBtnClicked}
      />
      {typeof cards !== 'string' && cards.length > 0 && (
        <>
          <Paginator
            searchValue={searchValue}
            sortBy={sortBy}
            pageSize={pageSize}
            totalPages={totalPages}
            currentPage={currentPage}
            isPaginatorBtnClicked={isPaginatorBtnClicked}
            setIsPaginatorBtnClicked={setIsPaginatorBtnClicked}
            setCurrentPage={setCurrentPage}
            setCards={setCards}
            setIsLoading={setIsLoading}
          />
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
