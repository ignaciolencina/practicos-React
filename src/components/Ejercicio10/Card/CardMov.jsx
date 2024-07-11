import PropTypes from "prop-types";

import "./movCard.css";

const CardMov = (props) => {
  const { movie, deleteMovie } = props;
  const modalId = `#movieInfo-${movie.uCode}`
  return (
    <div className="card m-3 g-0 col-3">
      <img src={movie.image} alt={movie.title} className="card-image" />
      <div className="card-content">
        <h5 className="card-title mb-4 fs-4">{movie.title}</h5>

        <div className="d-flex justify-content-between">
          <button
            className="btn btn-warning p-1 shadow"
            type="button"
            data-bs-toggle="modal"
            data-bs-target={modalId}
          >
            Ver más
          </button>
          <button
            className="btn btn-danger p-1 shadow"
            type="button"
            onClick={() => deleteMovie(movie.uCode, movie.title)}
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};
export default CardMov;

CardMov.propTypes = {
  movie: PropTypes.object.isRequired,
  deleteMovie: PropTypes.func.isRequired,
};
