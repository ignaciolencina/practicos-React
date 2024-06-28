import { useState, useEffect } from "react";
import CardVet from "./CardVet";
import FormVet from "./FormVet";

const appointmentsLS = JSON.parse(localStorage.getItem("appointments")) || [];


const Ejercicio9 = () => {
    const [appointments, setAppointments] = useState(appointmentsLS);

    useEffect(() => {
        localStorage.setItem("appointments", JSON.stringify(appointments));
      }, [appointments]);

  return (
    <>
      <h1 className="text-center">Administrador de pacientes de veterinaria</h1>
      <FormVet appointments={appointments} setAppointments={setAppointments}/>
      <CardVet />
    </>
  );
};
export default Ejercicio9;
