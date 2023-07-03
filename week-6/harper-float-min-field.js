//Title: harper-float-min-field.js
//Author: James Harper
//Date: 7/1/2023
//Description: Web 330 - Assignment 6.2

export class FloatMinField {
  constructor(name, field, min) {
    this.name = name;
    this.field = field;
    this.min = min;
  }

  validate() {
    if (parseFloat(this.field) > this.min) {
      return true;
    } else {
      return false;
    }
  }

  getMessage() {
    `${this.name} must be more than ${this.min}. You entered ${this.field}.`
  }
}
