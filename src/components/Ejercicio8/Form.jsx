import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

import { Contact } from "./Contact";
import Swal from "sweetalert2";

const Form = (props) => {
  const { contacts, setContacts } = props;

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit: onSubmitRHF,
  } = useForm();

  const handleSubmit = (data) => {
    const newContact = new Contact(
      data.name,
      data.surname,
      data.idNumber,
      data.email
    );

    const newArray = [...contacts, newContact];
    setContacts(newArray);

    Swal.fire({
      title: "Completado!",
      text: `Formulario enviado a nombre de ${data.name} ${data.surname}`,
      icon: "success",
      showCancelButton: false,
      showConfirmButton: false,
      timer: 2000,
    });

    reset();
  };

  return (
    <form
      className="bg-secondary-subtle p-3 rounded"
      onSubmit={onSubmitRHF(handleSubmit)}
    >
      <fieldset className="mb-2">
        <label htmlFor="input-name" className="form-label">
          Nombre*
        </label>
        <input
          required
          placeholder="Ignacio"
          type="text"
          id="input-name"
          className={`form-control ${errors.name ? "is-invalid" : ""}`}
          maxLength={40}
          minLength={2}
          {...register("name", {
            required: "El campo nombre es obligatorio",
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
          <span className="badge text-bg-danger">{errors.name?.message}</span>
        </div>
      </fieldset>
      <fieldset className="mb-2">
        <label htmlFor="input-surname" className="form-label">
          Apellido*
        </label>
        <input
          required
          placeholder="Lencina"
          type="text"
          id="input-surname"
          className={`form-control ${errors.surname ? "is-invalid" : ""}`}
          maxLength={40}
          minLength={2}
          {...register("surname", {
            required: "El campo apellido es obligatorio",
            maxLength: {
              value: 40,
              message: "El apellido no puede tener más de 40 caracteres",
            },
            minLength: {
              value: 2,
              message: "El apellido debe tener más de 2 caracteres",
            },
            pattern: {
              value: /^[a-zA-ZÁÉÍÓÚáéíóúÜüÑñ\s]+$/,
              message: "El apellido debe contener solo letras y espacios",
            },
          })}
        />
        <div className="invalid-feedback">
          <span className="badge text-bg-danger">
            {errors.surname?.message}
          </span>
        </div>
      </fieldset>
      <fieldset className="mb-2">
        <label htmlFor="input-id" className="form-label">
          DNI*
        </label>
        <input
          required
          placeholder="12345678"
          type="text"
          id="input-id"
          className={`form-control ${errors.idNumber ? "is-invalid" : ""}`}
          maxLength={8}
          minLength={7}
          {...register("idNumber", {
            required: "El campo DNI es obligatorio",
            maxLength: {
              value: 8,
              message: "El DNI no puede tener más de 8 caracteres",
            },
            minLength: {
              value: 7,
              message: "El DNI debe tener más de 6 caracteres",
            },
            pattern: {
              value: /^\d{7,8}$/,
              message: "El campo DNI debe indicar un DNI telefónico válido",
            },
          })}
        />
        <div className="invalid-feedback">
          <span className="badge text-bg-danger">
            {errors.idNumber?.message}
          </span>
        </div>
      </fieldset>
      <fieldset>
        <label htmlFor="input-email" className="form-label">
          Email*
        </label>
        <input
          required
          placeholder="ejemplo@gmail.com"
          type="email"
          id="input-email"
          className={`form-control ${errors.email ? "is-invalid" : ""}`}
          maxLength={50}
          minLength={11}
          {...register("email", {
            required: "El campo email es obligatorio",
            maxLength: {
              value: 50,
              message: "El email no puede tener más de 50 caracteres",
            },
            minLength: {
              value: 11,
              message: "El email debe tener más de 11 caracteres",
            },
            pattern: {
              value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
              message: "Ingrese un email válido",
            },
          })}
        />
        <div className="invalid-feedback">
          <span className="badge text-bg-danger">{errors.email?.message}</span>
        </div>
      </fieldset>
      <div className="text-end">
        <button className="mt-3 btn btn-success" type="submit">
          Enviar
        </button>
      </div>
    </form>
  );
};
export default Form;

Form.propTypes = {
  contacts: PropTypes.array.isRequired,
  setContacts: PropTypes.func.isRequired,
};
