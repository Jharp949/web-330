//Title: harper-validator.js
//Author: James Harper
//Date: 7/1/2023
//Description: Web 330 - Assignment 6.2

import { RequiredField } from './harper-required-field.js';
import { FloatField } from './harper-float-field.js';
import { FloatMaxField } from './harper-float-max-field.js';
import { FloatMinField } from './harper-float-min-field.js';

export class Validator {
  validators = [];
  messages = [];

  constructor(name, field) {
    this.name = name;
    this.field = field;
  }

  addRequiredField() {
    this.validators.push(new RequiredField(this.name, this.field));
  }

  addRequiredFloatField() {
    this.validators.push(new FloatField(this.name, this.field));
  }

  addFloatMinField(min) {
    this.validators.push(new FloatMinField(this.name, this.field, min));
  }

  addFloatMaxField(max) {
    this.validators.push(new FloatMaxField(this.name, this.field, max));
  }

  validate() {
    for (let valArray of this.validators) {
      if (!valArray.validate()) {
        this.messages.push(input.getMessage());

        return false;
      }
    }

    return true;
  }
}
