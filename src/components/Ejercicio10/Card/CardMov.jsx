import PropTypes from "prop-types";

import "./movCard.css";

const CardMov = (props) => {
  const { movie, deleteMovie } = props;
  return (
    <>
      <div className="card m-3 g-0 col-3">
        <img src={movie.image} alt={movie.title} className="card-image" />
        <div className="card-content">
          <h5 className="card-title mb-4 fs-4">{movie.title}</h5>

          <div className="d-flex justify-content-between">
            <button className="btn btn-warning p-1 shadow" type="button" data-bs-toggle="modal" data-bs-target="#movieInfo">
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
      <div
        className="modal fade"
        id="movieInfo"
        tabIndex="-1"
        aria-labelledby="movieInfoLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div data-bs-theme="dark" className="modal-header bg-dark text-light px-4">
              <h1 className="modal-title fs-5" id="movieInfoLabel">
                {movie.title}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-wrap p-4">
                <img className="w-100" src={movie.image} alt={movie.title} />
                {movie.description}</div>
            <div className="modal-footer bg-dark">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CardMov;

CardMov.propTypes = {
  movie: PropTypes.object.isRequired,
  deleteMovie: PropTypes.func.isRequired,
};
