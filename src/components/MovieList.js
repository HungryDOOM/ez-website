import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const result = await axios.get('https://ez-website-bkn-production.up.railway.app/api/movies');
      setMovies(result.data);
    };
    fetchMovies();
  }, []);


const [formData, setFormData] = useState({ nombre: '', correo: '' });
const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post('https://ez-website-bkn-production.up.railway.app/api/movies', formData);
    window.alert("Pelicula agregada");
    window.location.reload();
    console.log('Pelicula agregada:', response.data);
  } catch (error) {
    console.error('Error al agregar pelicula:', error);
  }
};

const delMovie = async (id) => {
  try {
    await axios.delete(`https://ez-website-bkn-production.up.railway.app/api/movies/${id}`);
    window.alert("Pelicula eliminada");
    window.location.reload();
  } catch (error) {
    console.error('Error al eliminar película:', error);
  }
};

  return (
    <div className="container">
      <div className='text-white d-flex justify-content-center align-items-center'>
        <form className="p-4 bg-dark rounded" onSubmit={handleSubmit}>
          <label for="title">Titulo</label>
          <input className='form-control' name='title' id='title' type='text' onChange={handleChange}></input>
          <label for="genre">Genero</label>
          <input className='form-control' name='genre' id='genre' type='text' onChange={handleChange}></input>
          <label for="year">Año</label>
          <input className='form-control' name='year' id='year' type='number' onChange={handleChange}></input>
          <label for="director">Director</label>
          <input className='form-control' name='director' id='director' type='text' onChange={handleChange}></input><br/>
          <button type='submit'>Agregar pelicula</button>
        </form>
      </div>
      <div className="row">
        <table className="table table-dark">
          <thead>
            <tr className="h2 text-center">
              <th>Titulo</th>
              <th>Genero</th>
              <th>Año</th>
              <th>Director</th>
              <th>Accion</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => (
              <tr class="h5 text-center" key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre}</td>
                <td>{movie.year}</td>
                <td>{movie.director}</td>
                <td><button onClick={() => delMovie(movie._id)} className='bg-light border-0 btn btn-info rounded-circle'>-</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MovieList;
