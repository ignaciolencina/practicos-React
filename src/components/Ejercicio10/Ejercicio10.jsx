import { useState, useEffect } from "react";
import FormMovie from "./Form/FormMovie";
import CardView from "./Card/CardView";

const moviesLS = JSON.parse(localStorage.getItem("movies")) || [];

const Ejercicio10 = () => {
  const [movies, setMovies] = useState(moviesLS);

  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movies));
  }, [movies]);
  return (
    <>
      <h1 className="text-center my-4">Administración de películas</h1>
      <FormMovie movies={movies} setMovies={setMovies} />
      <h1 className="text-center my-4">Peliculas cargadas</h1>
      <CardView movies={movies} setMovies={setMovies} />
      <h5 className="mb-5"><span className="text-danger">Spoiler alert!</span> No funciona el scroll horizontal si no es con el drag del mousepad, me suepera la situeichon 😢</h5>
    </>
  );
};
export default Ejercicio10;
