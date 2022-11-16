import React, { useState } from 'react';
import MovieList from './components/MovieList';
import './App.css';

function App() {
  const apiKey = 'api_key=59b4bf87e337717965103693e06ba19c';
  const [movies, setMovies] = useState([
    {
      backdrop_path: '/3XjDhPzj7Myr8yzsTO8UB6E2oAu.jpg',
      first_air_date: '2011-02-28',
      genre_ids: [18, 80],
      id: 31586,
      name: 'La Reina del Sur',
      origin_country: ['US'],
      original_language: 'es',
      original_name: 'La Reina del Sur',
      overview:
        'After years of blood, sweat and tears, a woman of humble origin ends up becoming a drug trafficking legend, with all that that means...',
      popularity: 2171.339,
      poster_path: '/uBTlJDdPpRxYTfUnKw4wbuIGSEK.jpg',
      vote_average: 7.8,
      vote_count: 1393,
    },
    {
      backdrop_path: '/5kkw5RT1OjTAMh3POhjo5LdaACZ.jpg',
      first_air_date: '2021-10-12',
      genre_ids: [80, 10765],
      id: 90462,
      name: 'Chucky',
      origin_country: ['US'],
      original_language: 'en',
      original_name: 'Chucky',
      overview:
        'After a vintage Chucky doll turns up at a suburban yard sale, an idyllic American town is thrown into chaos as a series of horrifying murders begin to expose the town’s hypocrisies and secrets. Meanwhile, the arrival of enemies — and allies — from Chucky’s past threatens to expose the truth behind the killings, as well as the demon doll’s untold origins.',
      popularity: 3545.458,
      poster_path: '/kY0BogCM8SkNJ0MNiHB3VTM86Tz.jpg',
      vote_average: 7.9,
      vote_count: 3466,
    },
    {
      backdrop_path: '/zaulpwl355dlKkvtAiSBE5LaoWA.jpg',
      first_air_date: '2010-10-31',
      genre_ids: [10759, 18, 10765],
      id: 1402,
      name: 'The Walking Dead',
      origin_country: ['US'],
      original_language: 'en',
      original_name: 'The Walking Dead',
      overview:
        "Sheriff's deputy Rick Grimes awakens from a coma to find a post-apocalyptic world dominated by flesh-eating zombies. He sets out to find his family and encounters many other survivors along the way.",
      popularity: 1907.926,
      poster_path: '/xf9wuDcqlUPWABZNeDKPbZUjWx0.jpg',
      vote_average: 8.1,
      vote_count: 13987,
    },
  ]);
  return (
    <div>
      <MovieList movies={movies} />
    </div>
  );
}

const getMovieRequest = async () => {
  //TODO: Remove search parameters
  const url =
    'https://api.themoviedb.org/3/tv/popular?api_key=59b4bf87e337717965103693e06ba19c';
  const response = await fetch(url);
  //Data converts response to JSON
  const data = await response.json();

  console.log('data ', data);
};
export default App;
