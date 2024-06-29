import PropTypes from "prop-types";
import Swal from "sweetalert2";

import CardVet from "./CardVet";

const CardView = (props) => {
  const { appointments, setAppointments } = props;

  const deleteAppointment = (idAppointment, nameAppointment) => {
    Swal.fire({
      title: "Atención",
      html: `<p>Estás por eliminar la cita de <b>${nameAppointment}</b>. Esta acción es irreversible</p>`,
      icon: "warning",
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonText: "Si, eliminar",
      confirmButtonColor: "red",
      cancelButtonText: "No, conservar",
    }).then((res) => {
      if (res.isConfirmed) {
        // Actualizamos lista de contactos, eliminando este
        const newArray = appointments.filter((c) => c.uCode !== idAppointment);
        setAppointments(newArray);

        // Mostramos mensaje de exito
        Swal.fire({
          title: "Cita eliminada exitosamente",
          icon: "success",
          showCancelButton: false,
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  };

  return (
    <section className="row g-2">
      {appointments.map((appointment) => {
        return (
          <CardVet
            appointment={appointment}
            deleteAppointment={deleteAppointment}
            key={appointment.uCode}
          />
        );
      })}
    </section>
  );
};
export default CardView;

CardView.propTypes = {
  appointments: PropTypes.array.isRequired,
  setAppointments: PropTypes.func.isRequired,
};
