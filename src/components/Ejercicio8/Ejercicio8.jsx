import { useState, useEffect } from "react";
import Form from "./Form";

const contactsLS = JSON.parse(localStorage.getItem("contacts")) || [];

const Ejercicio8 = () => {
  const [contacts, setContacts] = useState(contactsLS);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <h1 className="bg-secondary-subtle rounded p-2">
        Formulario de registro
      </h1>
      <hr />
      <Form contacts={contacts} setContacts={setContacts} />
    </>
  );
};
export default Ejercicio8;
