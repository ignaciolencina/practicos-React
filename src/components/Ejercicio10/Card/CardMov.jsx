import PropTypes from "prop-types";

import "./movCard.css";

const CardMov = (props) => {
  const { movie, deleteMovie } = props;
  return (
    <div className="card m-3 g-0 col-3">
      <img src={movie.image} alt={movie.title} className="card-image" />
      <div className="card-content">
        <h5 className="card-title mb-4 fs-4">{movie.title}</h5>

        <div className="d-flex justify-content-between">
          <button className="btn btn-warning p-1 shadow" type="button">
            Descripción
          </button>
          <button
            className="btn btn-danger p-1 shadow"
            type="button"
            onClick={() => deleteMovie(movie.uCode, movie.name)}
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
