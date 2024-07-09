import PropTypes from "prop-types";
import Swal from "sweetalert2";

import CardMov from "./CardMov";

import "./movCard.css"

const CardView = (props) => {
  const { movies, setMovies } = props;

  const deleteMovie = (idMovie, titleMovie) => {
    Swal.fire({
      title: "Atención",
      html: `<p>Estás por eliminar la película <b>${titleMovie}</b>. Esta acción es irreversible</p>`,
      icon: "warning",
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonText: "Si, eliminar",
      confirmButtonColor: "red",
      cancelButtonText: "No, conservar",
    }).then((res) => {
      if (res.isConfirmed) {
        const newArray = movies.filter((c) => c.uCode !== idMovie);
        setMovies(newArray);

        Swal.fire({
          title: "Película eliminada exitosamente",
          icon: "success",
          showCancelButton: false,
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  };
  return (
    <section className="movies mb-5">
      {movies.map((movie) => {
        return (
          <CardMov
            movie={movie}
            deleteMovie={deleteMovie}
            key={movie.uCode}
          />
        );
      })}
    </section>
  );
};
export default CardView;

CardView.propTypes = {
  movies: PropTypes.array.isRequired,
  setMovies: PropTypes.func.isRequired,
};
