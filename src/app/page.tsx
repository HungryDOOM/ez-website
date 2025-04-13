import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-cover bg-fixed"
    style={
      { backgroundImage: "url('/background.png')" }
    }
    >
      <div className="container mx-auto min-h-screen bg-gray-800 bg-opacity-90">
        <header className="flex items-center">
          <Image
            src="/logo.png"
            alt="logo"
            className="m-3 max-h-100"
            width={100}
            height={100}
          />
          <h1 className="text-3xl font-bold">Catalogo de Peliculas</h1>
        </header>
        <main className="text-center mt-10">
          <p className="text-white">
            Bienvenid@ al catalogo de peliculas MovieMax. Podras encontrar una selección de los mejores títulos de distintos generos como Accion, Aventura, Comedia, Terror, entre otros... para disfrutar solo, en compañia o en familia.
          </p>
        </main>
      </div>
      <footer className="bg-gray-700 text-white text-left py-3 fixed bottom-0 min-w-full">
          <div className="px-5">
            <p>Nombre de Alumno: Brian Joel Alvarez Manriquez</p>
            <p>Codigo de alumno: 222959239</p>
            <p>Correo: brianjoelam12_@hotmail.com</p>
            <p>Materia: Conceptualización de servicios en la nube</p>
          </div>
        </footer>
    </div>
  );
}
