import PropTypes from "prop-types";
import Swal from "sweetalert2";

import CardMov from "./CardMov";

import "./movCard.css"

const CardView = (props) => {
  const { movies, setMovies } = props;

  const deleteAppointment = (idMovie, nameMovie) => {
    Swal.fire({
      title: "Atención",
      html: `<p>Estás por eliminar la cita de <b>${nameMovie}</b>. Esta acción es irreversible</p>`,
      icon: "warning",
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonText: "Si, eliminar",
      confirmButtonColor: "red",
      cancelButtonText: "No, conservar",
    }).then((res) => {
      if (res.isConfirmed) {
        // Actualizamos lista de contactos, eliminando este
        const newArray = movies.filter((c) => c.uCode !== idMovie);
        setMovies(newArray);

        // Mostramos mensaje de exito
        Swal.fire({
          title: "Cita eliminada exitosamente",
          icon: "success",
          showCancelButton: false,
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  };
  return (
    <section className="movies">
      {movies.map((movie) => {
        return (
          <CardMov
            movie={movie}
            deleteAppointment={deleteAppointment}
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
