import { useRef, useState } from "react";
import "./Ejercicio4.css";

const Ejercicio4 = () => {
  const [toDos, setToDos] = useState([]);

  const $input = useRef();

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      const newToDo = $input.current.value;
      if (newToDo.trim()) {
        const newArray = [...toDos, newToDo];
        setToDos(newArray);
        $input.current.value = "";
      }
    }
  };

  const handleCompleted = (index) => {
    const newArray = toDos.filter((_, i) => i !== index);
    setToDos(newArray);
  };

  return (
    <section className="container">
      <section className="card mt-5">
        <article className="text-center">
          <h1>Bienvenido</h1>
          <h3 className="fs-5">Ingresa tus tareas</h3>
        </article>
        <article className="text-center my-2">
          <fieldset>
            <label></label>
            <input
              type="text"
              ref={$input}
              onKeyDown={handleEnter}
              className="input-toDo px-2"
              placeholder="Tarea... 'Enter'"
            />
          </fieldset>
          <ul className="lista-toDos mt-4">
            {toDos.map((toDo, index) => {
              return (
                <li key={index} className="toDos my-3">
                  <div>
                    {toDo}
                    <button
                      className="btn btn-success p-1 ms-5"
                      onClick={() => handleCompleted(index)}
                    >
                      Completada
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </article>
      </section>
    </section>
  );
};
export default Ejercicio4;
