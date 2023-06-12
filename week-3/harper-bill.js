//Title: harper-bill.js
//Author: James Harper
//Date: 6/10/2023
//Description: Web 330 - Assignment 3.2

//Creates a new class to reference within this file.
export class Bill {
  constructor(_beverages, _appetizers, _mainCourses, _desserts) {
    this._beverages = [];
    this._appetizers = [];
    this._mainCourses = [];
    this._desserts = [];
  }
//Function that adds the user selected beverage choice.
  addBeverage(beverage) {
    this._beverages.push(beverage);
  }
//Function that adds the user selected appetizer choice.
  addAppetizer(appetizer) {
    this._appetizers.push(appetizer);
  }
//Function that adds the user selected mainCourse choice.
  addMainCourse(mainCourse) {
    this._mainCourses.push(mainCourse);
  }
//Function that adds the user selected dessert choice.
  addDessert(dessert) {
    this._desserts.push(dessert);
  }
//Function that references the price of each item and adds it to a variable for the total.
  getTotal() {
    let total = 0;

    let beverageTotal = this._beverages.forEach(function(beverage) {
      total += parseFloat(beverage.price);
    })

    let appetizerTotal = this._appetizers.forEach(function(appetizer) {
      total += parseFloat(appetizer.price);
    })

    let mainCourseTotal = this._mainCourses.forEach(function(mainCourse) {
      total += parseFloat(mainCourse.price);
    })

    let dessertTotal = this._desserts.forEach(function(dessert) {
      total += parseFloat(dessert.price);
    })

    return total;
  }
}
