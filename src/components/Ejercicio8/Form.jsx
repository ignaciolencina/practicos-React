const Form = () => {
  return (
    <form>
      <fieldset>
        <label htmlFor="input-name" className="form-label">
          Nombre
        </label>
        <input placeholder="Ignacio" type="text" className="form-control" />
      </fieldset>
      <fieldset>
        <label htmlFor="input-surname" className="form-label">
          Apellido
        </label>
        <input placeholder="Lencina" type="text" className="form-control" />
      </fieldset>
      <fieldset>
        <label htmlFor="input-id" className="form-label">
          DNI
        </label>
        <input placeholder="12345678" type="number" className="form-control" />
      </fieldset>
      <fieldset>
        <label htmlFor="input-email" className="form-label">
          Email
        </label>
        <input
          placeholder="ejemplo@gmail.com"
          type="email"
          className="form-control"
        />
      </fieldset>
      <div className="text-end">
        <button className="mt-3 btn btn-success">Enviar</button>
      </div>
    </form>
  );
};
export default Form;
