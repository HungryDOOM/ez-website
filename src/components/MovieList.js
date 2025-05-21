import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const result = await axios.get('https://ez-website-bkn-production.up.railway.app/api/movies');
      console.log(result.data);
      setMovies(result.data);
    };
    fetchMovies();
  }, []);

  return (
    <div className="container">
      <form>
        <label for="title">Titulo</label>
        <input name='title' id='title' type='text'></input><br/>
        <label for="genre">Genero</label>
        <input name='genre' id='genre' type='text'></input><br/>
        <label for="year">Año</label>
        <input name='year' id='year' type='text'></input><br/>
        <label for="director">Director</label>
        <input name='director' id='director' type='text'></input><br/>
        <button type='submit'>Agregar pelicula</button>
      </form>
      <div className="row">
        <table className="table table-dark">
          <thead>
            <tr className="h2">
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
