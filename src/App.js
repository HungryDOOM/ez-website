import MovieList from './components/MovieList';
import './App.css';

function App() {
  return (

  <main className='main'>
    <div className="container min-vh-100">
      <header className="d-flex align-items-center">
        <h1 className="text-white">Catalogo de Peliculas</h1>
      </header>
      
      <main className="text-center">
        <p className="text-white">Bienvenid&#64; al catalogo de peliculas MovieMax. Podras encontrar una selección de los mejores títulos de distintos generos como Accion, Aventura, Comedia, Terror, entre otros... para disfrutar solo, en compañia o en familia.</p>
      </main>
        <MovieList />

    </div>
    <footer className="bg-dark text-white text-left py-3 fixed-bottom">
      <div className="px-5">
        <p>Nombre de Alumno: Brian Joel Alvarez Manriquez</p>
        <p>Codigo de alumno: 222959239</p>
        <p>Correo: brianjoelam12_&#64;hotmail.com</p>
        <p>Materia: Conceptualización de entornos de desarrollo de aplicaciones y servicios</p>
      </div>
    </footer>
  
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
  
  </main>
  );
}

export default App;
