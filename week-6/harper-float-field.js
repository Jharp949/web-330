//Title: harper-float-field.js
//Author: James Harper
//Date: 7/1/2023
//Description: Web 330 - Assignment 6.2

export class FloatField {
  constructor(name, field) {
    this.name = name;
    this.field = field;
  }

  validate() {
    if (!isNaN(this.field)) {
      return true;
    } else {
      return false;
    }
  }

  getMessage() {
    return `${this.name} must be a float value. You entered ${this.field}.`;
  }
}
