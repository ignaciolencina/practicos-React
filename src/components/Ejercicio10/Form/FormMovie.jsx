import PropTypes from "prop-types";
import { useForm, Controller } from "react-hook-form";

import { Movie } from "../Movie";
import Swal from "sweetalert2";

import "./style.css";

const FormMovie = (props) => {
  const { movies, setMovies } = props;

  const {
    register,
    reset,
    control,
    formState: { errors },
    handleSubmit: onSubmitRHF,
  } = useForm();

  const handleSubmit = (data) => {
    const newMovies = new Movie(data.title, data.description, data.genre, data.image);

    const newArray = [...movies, newMovies];
    setMovies(newArray);

    Swal.fire({
      title: "Guardado con éxito!",
      html: `<p>Película guardada con el título de "${data.title}" </p>`,
      icon: "success",
      showCancelButton: false,
      showConfirmButton: false,
      timer: 4000,
    });

    reset();
  };

  return (
    <>
      <form onSubmit={onSubmitRHF(handleSubmit)}>
        <fieldset className="shadow legend p-2 ps-3 text-light my-1">
          <legend className="m-0">
            Ingrese una pelicula rellenando el formulario
          </legend>
        </fieldset>
        <div className="shadow bg-dark p-3 text-light">
          <div className="row mb-3">
            <label htmlFor="input-title" className="col-sm-2 col-form-label">
              Título:
            </label>
            <div className="col-sm-10">
              <input
                required
                placeholder="Intensamente 2"
                type="text"
                id="input-title"
                className={`form-control ${errors.title ? "is-invalid" : ""}`}
                maxLength={60}
                minLength={2}
                {...register("title", {
                  required: "El campo título es obligatorio",
                  maxLength: {
                    value: 60,
                    message: "El título no puede tener más de 60 caracteres",
                  },
                  minLength: {
                    value: 2,
                    message: "El título debe tener más de 2 caracteres",
                  },
                })}
              />
              <div className="invalid-feedback">
                <span className="badge text-bg-danger">
                  {errors.title?.message}
                </span>
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="input-genre" className="col-sm-2 col-form-label">
              Género:
            </label>
            <div className="col-sm-10">
              <Controller
                name="inputGenre"
                control={control}
                defaultValue=""
                rules={{ required: "El campo género es obligatorio" }}
                render={({ field }) => (
                  <select
                    {...field}
                    id="inputGenre"
                    className={`form-control ${
                      errors.genre ? "is-invalid" : ""
                    }`}
                  >
                    <option value="">Seleccionar...</option>
                    <option value="option1">Comedia</option>
                    <option value="option2">Drama</option>
                    <option value="option3">Infantil</option>
                  </select>
                )}
              />
              <div className="invalid-feedback">
                <span className="badge text-bg-danger">
                  {errors.genre?.message}
                </span>
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="input-image" className="col-sm-2 col-form-label">
              Portada:
            </label>
            <div className="col-sm-10">
              <input
                required
                placeholder="https://google.com"
                type="url"
                id="input-image"
                className={`form-control ${errors.image ? "is-invalid" : ""}`}
                minLength={3}
                {...register("image", {
                  required: "El campo imagen es obligatorio",
                  minLength: {
                    value: 3,
                    message: "El campo imagen debe tener más de 3 caracteres",
                  },
                  pattern: {
                    value:
                      /^\b(?:https?|ftp):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]$/,
                    message: "Ingrese una URL válida en el campo imagen",
                  },
                })}
              />
              <div className="invalid-feedback">
                <span className="badge text-bg-danger">
                  {errors.image?.message}
                </span>
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <label
              htmlFor="input-description"
              className="col-sm-2 col-form-label"
            >
              Descripción:
            </label>
            <div className="col-sm-10">
              <textarea
                required
                placeholder="Esta película se trata de..."
                type="text"
                id="input-description"
                className={`form-control descripcion ${
                  errors.description ? "is-invalid" : ""
                }`}
                maxLength={3000}
                minLength={150}
                rows={5}
                {...register("description", {
                  required: "El campo descripción es obligatorio",
                  maxLength: {
                    value: 3000,
                    message:
                      "La descripción no puede tener más de 3000 caracteres",
                  },
                  minLength: {
                    value: 150,
                    message: "La descripción debe tener más de 150 caracteres",
                  },
                })}
              />
              <div className="invalid-feedback">
                <span className="badge text-bg-danger">
                  {errors.description?.message}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center shadow button p-4 my-1">
          <button className="btn btn-warning" type="submit">
            Guardar
          </button>
        </div>
      </form>
    </>
  );
};
export default FormMovie;

FormMovie.propTypes = {
  movies: PropTypes.array.isRequired,
  setMovies: PropTypes.func.isRequired,
};
