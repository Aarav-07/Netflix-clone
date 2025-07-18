import React, { useEffect, useRef, useState } from 'react';
import './TitleCards.css';
import cards_data from '../../assets/cards/Cards_data';
import { Link } from 'react-router-dom';

const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMTA1NjAzYTZkYzUzZjU2NTk0NzBmZjA0ZWQ0OTEzNiIsIm5iZiI6MTc1MjgzMDQ0NS44MjksInN1YiI6IjY4N2ExMWVkMWQ3NmM5YWFhOWY3NWJjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Zy-SBI1LGDjtP0IfgtnUjZmHOYZcY2cQb3htohRv6r0'
    }
  };

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
      .then(res => res.json())
      .then(res => setApiData(res.results))
      .catch(err => console.error(err));

    const cardsElement = cardsRef.current;
    cardsElement.addEventListener('wheel', handleWheel);

    // Cleanup
    return () => {
      cardsElement.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div className='titlecards'>
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.length > 0 ? (
          apiData.map((card, index) => (
            <Link  to={`/player/${card.id}`}className="card" key={index}>
              <img src={`https://image.tmdb.org/t/p/w300${card.poster_path}`} alt={card.title} />
              <p>{card.title}</p>
            </Link>
          ))
        ) : (
          apiData.map((card, index) => (
            <div className="card" key={index}>
              <img src={`https://image.tmdb.org/t/p/w500`+ card.backdrop_path} alt="" />
              <p>{card.original_title}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TitleCards;
