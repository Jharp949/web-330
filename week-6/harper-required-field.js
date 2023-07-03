//Title: harper-required-field.js.js
//Author: James Harper
//Date: 7/1/2023
//Description: Web 330 - Assignment 6.2

export class RequiredField {
  constructor(name, field) {
    this.name = name;
    this.field = field;
  }

  validate() {
    if (typeof this.field == 'string') {
      return true;
    } else {
      return false;
    }
  }

  getMessage() {
    return `${this.name} is a required field.`;
  }
}
