//Title: harper-product.js
//Author: James Harper
//Date: 6/23/2023
//Description: Web 330 - Assignment 5.2

//Constructor for each product.
export class Product {
  constructor(name, price){
      this.name = name;
      this.price = price;

      this.id = Math.random().toString(16).slice(2);
  }
}
