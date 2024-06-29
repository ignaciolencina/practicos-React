import PropTypes from "prop-types";

import "./vetCard.css";

const CardVet = (props) => {
  const { appointment, deleteAppointment } = props;

  return (
    <section className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
      <div className="card p-0 shadow">
        <div className="card-body p-0">
          <div className="row d-flex align-items-center p-1">
            <div className="col-3 patience-state"></div>
            <div className="col-9 title">
              <p className="card-title m-0">Mascota: {appointment.name}</p>
              <p className="card-title m-0 owner-title">
                Dueño: {appointment.owner}
              </p>
            </div>
          </div>
        </div>
        <div className="card-body cont-box">
          <div className="row">
            <div className="col-4">
              <p className="mb-1">Fecha:</p>
              <p className="mb-1">Hora:</p>
              <p className="mb-1">Síntomas:</p>
            </div>
            <div className="col-8">
              <p className="mb-1 px-2 info-box">{appointment.date}</p>
              <p className="mb-1 px-2 info-box">{appointment.hour}</p>
              <p className="mb-1 px-2 info-box" title={appointment.symptoms}>{appointment.symptoms}</p>
            </div>
          </div>
        </div>
        <div className="card-body p-2">
          <div className="text-end">
            <button
              className="btn btn-danger p-1 shadow"
              type="button"
              onClick={() =>
                deleteAppointment(appointment.uCode, appointment.name)
              }
            >
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CardVet;

CardVet.propTypes = {
  appointment: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  deleteAppointment: PropTypes.func.isRequired,
};
