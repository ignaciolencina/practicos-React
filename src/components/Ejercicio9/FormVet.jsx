import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

import { Appointment } from "./Appointment";
import Swal from "sweetalert2";

const FormVet = (props) => {
  const { appointments, setAppointments } = props;

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit: onSubmitRHF,
  } = useForm();

  const handleSubmit = (data) => {
    const newAppointments = new Appointment(
      data.name,
      data.owner,
      data.date,
      data.hour,
      data.symptoms
    );

    const newArray = [...appointments, newAppointments];
    setAppointments(newArray);

    Swal.fire({
      title: "Agendado!",
      html: `<p>Cita veterinaria agendada para ${data.name} </p>`,
      icon: "success",
      showCancelButton: false,
      showConfirmButton: false,
      timer: 4000,
    });

    reset();
  };

  return (
    <form onSubmit={onSubmitRHF(handleSubmit)}>
      <fieldset className="shadow bg-body-tertiary p-2 my-1">
        <legend className="m-0">
          Llenar el formulario para crear una cita
        </legend>
      </fieldset>
      <div className="shadow bg-primary-subtle p-2">
        <div className="row mb-3">
          <label htmlFor="input-name-pet" className="col-sm-2 col-form-label">
            Nombre mascota:
          </label>
          <div className="col-sm-10">
            <input
              required
              placeholder="Toby"
              type="text"
              id="input-name-pet"
              className={`form-control ${errors.name ? "is-invalid" : ""}`}
              maxLength={40}
              minLength={2}
              {...register("name", {
                required: "El campo nombre mascota es obligatorio",
                maxLength: {
                  value: 40,
                  message: "El nombre no puede tener más de 40 caracteres",
                },
                minLength: {
                  value: 2,
                  message: "El nombre debe tener más de 2 caracteres",
                },
                pattern: {
                  value: /^[a-zA-ZÁÉÍÓÚáéíóúÜüÑñ\s]+$/,
                  message: "El nombre debe contener solo letras y espacios",
                },
              })}
            />
            <div className="invalid-feedback">
              <span className="badge text-bg-danger">
                {errors.name?.message}
              </span>
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="input-name-owner" className="col-sm-2 col-form-label">
            Nombre dueño:
          </label>
          <div className="col-sm-10">
            <input
              required
              placeholder="Juan"
              type="text"
              id="input-name-owner"
              className={`form-control ${errors.owner ? "is-invalid" : ""}`}
              maxLength={40}
              minLength={2}
              {...register("owner", {
                required: "El campo nombre dueño es obligatorio",
                maxLength: {
                  value: 40,
                  message: "El nombre no puede tener más de 40 caracteres",
                },
                minLength: {
                  value: 2,
                  message: "El nombre debe tener más de 2 caracteres",
                },
                pattern: {
                  value: /^[a-zA-ZÁÉÍÓÚáéíóúÜüÑñ\s]+$/,
                  message: "El nombre debe contener solo letras y espacios",
                },
              })}
            />
            <div className="invalid-feedback">
              <span className="badge text-bg-danger">
                {errors.owner?.message}
              </span>
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="input-date" className="col-sm-2 col-form-label">
            Fecha:
          </label>
          <div className="col-sm-10 d-flex">
            <input
              required
              type="date"
              className={`form-control ${errors.date ? "is-invalid" : ""}`}
              id="input-date"
              {...register("date", {
                required: "El campo fecha es obligatorio",
              })}
            />
            <div className="invalid-feedback">
              <span className="badge text-bg-danger">
                {errors.date?.message}
              </span>
            </div>
            <div className="d-flex align-items-center col-sm-7">
              <label htmlFor="input-hour" className="mx-5">
                Hora:
              </label>
              <input
                required
                type="time"
                className={`form-control ${errors.hour ? "is-invalid" : ""}`}
                id="input-hour"
                {...register("hour", {
                  required: "El campo hora es obligatorio",
                })}
              />
              <div className="invalid-feedback">
                <span className="badge text-bg-danger">
                  {errors.hour?.message}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="input-symptoms" className="col-sm-2 col-form-label">
            Síntomas:
          </label>
          <div className="col-sm-10">
            <input
              required
              placeholder="Describir síntomas"
              type="text"
              id="input-symptoms"
              className={`form-control ${errors.symptoms ? "is-invalid" : ""}`}
              maxLength={120}
              minLength={10}
              {...register("symptoms", {
                required: "El campo síntomas es obligatorio",
                maxLength: {
                  value: 120,
                  message:
                    "La descripción de los síntomas no puede superar los 120 caracteres",
                },
                minLength: {
                  value: 10,
                  message:
                    "La descripción de los síntomas debe superar los 10 caracteres",
                },
              })}
            />
            <div className="invalid-feedback">
              <span className="badge text-bg-danger">
                {errors.symptoms?.message}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center shadow bg-body-tertiary p-4 my-1">
        <button className="btn btn-primary" type="submit">
          Agregar nueva cita
        </button>
      </div>
    </form>
  );
};
export default FormVet;

FormVet.propTypes = {
  appointments: PropTypes.array.isRequired,
  setAppointments: PropTypes.func.isRequired,
};
