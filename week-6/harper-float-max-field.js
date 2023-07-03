//Title: harper-float-max-field.js
//Author: James Harper
//Date: 7/1/2023
//Description: Web 330 - Assignment 6.2

export class FloatMaxField {
  constructor(name, field, max) {
    this.name = name;
    this.field = field;
    this.max = max;
  }

  validate() {
    if (parseFloat(this.field) < this.max) {
      return true;
    } else {
      return false;
    }
  }

  getMessage() {
    `${this.name} must be less that ${this.max}. You entered ${this.field}.`
  }
}
