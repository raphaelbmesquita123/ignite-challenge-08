import { useContext } from 'react';

import { MoviesContext } from '../../context/MoviesContext';
import { MovieCard } from '../MovieCard';
import { Header } from '../Header';

import './styles.scss';

export default function Content() {
  const { movies } = useContext(MoviesContext);
  const { selectedGenre } = useContext(MoviesContext);

  return (
    <div className="container">
      <Header selectedGenre={selectedGenre.title} />
      <main>
        <div className="movies-list">
          {movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              movieCard={{
                title: movie.Title,
                poster: movie.Poster,
                runtime: movie.Runtime,
                rating: movie.Ratings[0].Value,
              }}
            />
          ))}
        </div>
      </main>
    </div>
  );
}