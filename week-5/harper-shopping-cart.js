//Title: harper-shopping-cart.js
//Author: James Harper
//Date: 6/23/2023
//Description: Web 330 - Assignment 5.2

//class that holds a constructor for product options.
export class ShoppingCart {
  constructor(){
      this.products = [];
  }

  //Function that returns the length of the products array.
  count(){
      return this.products.length;
  }

  //Function that pushes products to an array.
  add(product){
      this.products.push(product);
  }

  //Generator that loops through the list of options and selects one based on user input.
  *[Symbol.iterator]() {
      for (let product of this.products) {
          yield product
      }
  }
}
