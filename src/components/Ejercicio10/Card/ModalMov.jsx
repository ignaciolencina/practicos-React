import PropTypes from "prop-types";

const ModalMov = (props) => {
  const { movie } = props;
  const modalId = `movieInfo-${movie.uCode}`;
  return (
    <div
      className="modal fade"
      id={modalId}
      tabIndex="-1"
      aria-labelledby={`${modalId}Label`}
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div
            data-bs-theme="dark"
            className="modal-header bg-dark text-light px-4"
          >
            <h1 className="modal-title fs-5" id={`${modalId}Label`}>
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
            <img className="w-100 mb-3" src={movie.image} alt={movie.title} />
            {movie.description}
          </div>
          <div className="modal-footer bg-dark">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ModalMov;

ModalMov.propTypes = {
  movie: PropTypes.object.isRequired,
};
