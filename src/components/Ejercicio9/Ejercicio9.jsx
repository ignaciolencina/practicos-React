import { useState, useEffect } from "react";
import FormVet from "./FormVet";
import CardView from "./Card/CardView";

const appointmentsLS = JSON.parse(localStorage.getItem("appointments")) || [];

const Ejercicio9 = () => {
  const [appointments, setAppointments] = useState(appointmentsLS);

  useEffect(() => {
    localStorage.setItem("appointments", JSON.stringify(appointments));
  }, [appointments]);

  return (
    <>
      <h1 className="text-center mb-4">
        Administrador de pacientes de veterinaria
      </h1>
      <FormVet appointments={appointments} setAppointments={setAppointments} />
      <h1 className="text-center my-5">Administrar las citas aquí</h1>
      <CardView appointments={appointments} setAppointments={setAppointments} />
    </>
  );
};
export default Ejercicio9;
