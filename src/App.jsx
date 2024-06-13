import "./App.css";
import Ejercicio1 from "./components/Ejercicio1/Ejercicio1";
import Ejercicio2 from "./components/Ejercicio2/Ejercicio2";
import Ejercicio3 from "./components/Ejercicio3/Ejercicio3";

const App = () => {
  return (
    <>
      <Ejercicio1 />
      <Ejercicio2 persona="my friend" />
      <Ejercicio3 persona="my friend" />
    </>
  );
};
export default App;
