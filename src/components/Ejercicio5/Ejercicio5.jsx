import { useEffect, useRef, useState } from "react";
import { Tarea } from "./Tarea.js";
import "./Ejercicio5.css";

const Ejercicio5 = () => {
  const [toDos, setToDos] = useState([]);

  const $input = useRef();

   // Cargar las tareas desde el localStorage cuando se monta el componente
   useEffect(() => {
    const savedToDos = localStorage.getItem("toDos");
    if (savedToDos) {
      setToDos(JSON.parse(savedToDos));
    }
  }, []);

  // Guardar las tareas en el localStorage cada vez que cambian
  useEffect(() => {
    localStorage.setItem("toDos", JSON.stringify(toDos));
  }, [toDos]);

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      const newToDo = new Tarea($input.current.value);
      if (newToDo.nombre.trim()) {
        const newArray = [...toDos, newToDo];
        setToDos(newArray);
        $input.current.value = "";
      }
    }
  };

  const handleCompleted = (codigo) => {
    const newArray = toDos.filter((toDo) => toDo.codigo !== codigo);
    setToDos(newArray);
  };

  return (
    <section className="container">
      <article className="text-center">
        <h1>Bienvenido</h1>
        <h3 className="fs-5">Ingresa tus tareas</h3>
      </article>
      <article>
        <div className="bg-white p-3 rounded text-center my-3">
          <fieldset>
            <label></label>
            <input
              type="text"
              ref={$input}
              onKeyDown={handleEnter}
              className="input-toDo px-2"
              placeholder="Tarea... 'Enter'"
              maxLength={80}
            />
          </fieldset>
        </div>
        <div className="lista-toDos row mt-4">
          {toDos.map((toDo, index) => {
            return (
              <div key={toDo.codigo} className="col-md-3 toDos my-3">
                <div className="card">
                  <p>
                    <span className="text-danger"># {index + 1}</span> {toDo.nombre}
                  </p>

                  <button
                    className="completed-button ms-auto"
                    onClick={() => handleCompleted(toDo.codigo)}
                  >
                    Completada
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </article>
    </section>
  );
};
export default Ejercicio5;
