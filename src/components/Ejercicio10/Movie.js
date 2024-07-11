export class Movie {
    constructor(title, description, genre, image) {
      this.uCode = window.self.crypto.randomUUID();
      this.title = title;
      this.description = description;
      this.genre = genre;
      this.image = image;
    }
  }
  