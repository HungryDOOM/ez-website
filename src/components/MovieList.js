import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const result = await axios.get('http://localhost:5000/api/movies');
      setMovies(result.data);
    };
    fetchMovies();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <table class="table table-dark">
          <thead>
            <tr class="h2">
              <th>Titulo</th>
              <th>Genero</th>
              <th>Año</th>
              <th>Director</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => (
              <tr class="h5 text-center" key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre}</td>
                <td>{movie.year}</td>
                <td>{movie.director}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MovieList;
