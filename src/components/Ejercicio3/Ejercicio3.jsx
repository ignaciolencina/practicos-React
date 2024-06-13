import PropTypes from "prop-types";
import { useState } from "react";

const Ejercicio3 = (props) => {
  const { persona } = props;
  const [msg, setMsg] = useState("");
  const handleShow = () => {
    setMsg("(from changed state)");
  };
  const handleHide = () => {
    setMsg("");
  };
  return (
    <>
      <section>
        <h1>
          Hello {persona} {msg}!
        </h1>
        <div>
          <button onClick={handleShow} className="btn btn-primary p-1 mt-2">
            Click me
          </button>
          <button
            onClick={handleHide}
            className="btn btn-success p-1 mt-2 ms-5"
          >
            Then me
          </button>
        </div>
      </section>
    </>
  );
};
export default Ejercicio3;

Ejercicio3.propTypes = {
  persona: PropTypes.string.isRequired,
};
