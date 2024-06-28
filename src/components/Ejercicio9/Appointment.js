export class Appointment {
  constructor(name, owner, date, hour, symptoms) {
    this.uCode = window.self.crypto.randomUUID();
    this.name = name;
    this.owner = owner;
    this.date = date;
    this.hour = hour;
    this.symptoms = symptoms;
  }
}
