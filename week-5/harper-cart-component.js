//Title: harper-cart-component.js
//Author: James Harper
//Date: 6/23/2023
//Description: Web 330 - Assignment 5.2

//class that extends HTMLElement
class CartComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback(){
    this.innerHTML = `<i id="cartIcon" class="fa fa-shopping-cart"></i> (<span id="cart-count"></span>)`
  }
}

customElements.define("cart-component", CartComponent);
