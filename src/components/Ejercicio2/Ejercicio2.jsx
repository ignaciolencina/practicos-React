import PropTypes from 'prop-types';

const Ejercicio2 = (props) => {
  const { persona } = props;
  return <h1>Hola {persona}!</h1>;
};
export default Ejercicio2;

Ejercicio2.propTypes = {
  persona: PropTypes.string.isRequired,
}