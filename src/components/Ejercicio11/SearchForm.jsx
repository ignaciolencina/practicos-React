import { useForm, Controller } from "react-hook-form";
import PropTypes from "prop-types";

const SearchForm = (props) => {
  const { news, setFilteredNews } = props;


  const {
    control,
    formState: { errors },
    handleSubmit: onSubmitRHF,
  } = useForm();


  return (
    // onSubmit={onSubmitRHF(handleSearch)}
    <form className="bg-primary-subtle p-2" >
      <div className="row mb-3 text-center">
        <label htmlFor="input-category" className="col-sm-2 col-form-label">
          Buscar por categoría:
        </label>
        <div className="col-sm-8">
          <Controller
            name="inputCategory"
            control={control}
            defaultValue=""
            rules={{ required: "Debe seleccionar una categoría para realiazr la busqueda" }}
            render={({ field }) => (
              <select
                {...field}
                id="inputCategory"
                className={`form-control ${errors.category ? "is-invalid" : ""}`}
              >
                <option value="">Seleccionar...</option>
              </select>
            )}
          />
          <div className="invalid-feedback">
            <span className="badge text-bg-danger">
              {errors.category?.message}
            </span>
          </div>
        </div>
        <div className="col-sm-2">
          <button className="btn btn-primary" type="submit">
            Buscar
          </button>
        </div>
      </div>
    </form>
  );
};
export default SearchForm;

SearchForm.propTypes = {
  news: PropTypes.array.isRequired,
  setFilteredNews: PropTypes.func.isRequired,
};
