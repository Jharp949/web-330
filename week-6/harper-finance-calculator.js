//Title: harper-finance-calculator.js
//Author: James Harper
//Date: 7/1/2023
//Description: Web 330 - Assignment 6.2

export class FinanceCalculator {
  static MONTHS_IN_YEAR = 12;

  static calculateFutureValue(monthlyPayment, rate, years) {
    let months = years * this.MONTHS_IN_YEAR;
    const interestRate = 1 + rate / 100;
    const presentValue = monthlyPayment * months;
    const futureValue = presentValue * (Math.pow(interestRate, months));

    return futureValue.toFixed(2);
  }

  static convertToCurrency(field) {
    let currencyFormatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    });

    return currencyFormatter.format(field);
  }
}
