import PropTypes from "prop-types";

const SearchForm = (props) => {
  const { categories, isLoading, handleCategoryChange, handleSearch } =
    props;


  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <form className="bg-primary-subtle p-2" onSubmit={handleSubmit}>
      <div className="row mb-3 text-center">
        <label htmlFor="input-category" className="col-sm-2 col-form-label">
          Seleccione una categoría:
        </label>
        <div className="col-sm-8">
          <select
            id="categorySelect"
            className="form-select"
            onChange={(e) => handleCategoryChange(e.target.value)}
            disabled={isLoading}
          >
            {categories.map((category, index) => (
              <option key={index} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
        </div>
        <div className="col-sm-2">
          <button className="btn btn-primary" type="submit" disabled={isLoading}>
            Buscar
          </button>
        </div>
      </div>
    </form>
  );
};
export default SearchForm;

SearchForm.propTypes = {
 categories: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  handleCategoryChange: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired
};
