//Title: harper-main-course.js
//Author: James Harper
//Date: 6/10/2023
//Description: Web 330 - Assignment 3.2

//References harper-product.js and builds a class based on the same parameters.
import { Product } from './harper-product.js';

export class MainCourse extends Product {
  constructor(name, price) {
    super(name, price);
  }
}
