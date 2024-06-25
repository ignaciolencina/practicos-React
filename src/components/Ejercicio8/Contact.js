export class Contact {
  constructor(name, surname, idNumber, email) {
    this.uCode = window.self.crypto.randomUUID();
    this.name = name;
    this.surname = surname;
    this.idNumber = idNumber;
    this.email = email;
  }
}
