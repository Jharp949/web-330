//Title: calorie-converter.js
//Author: James Harper
//Date: 6/16/2023
//Description: Web 330 - Assignment 4.2

import { FoodModel } from "./food-model.js";

//Creates then exports the class CalorieConverter.
export class CalorieConverter {
    //Static variable based on the imported FoodModel class.
    static data = [new FoodModel(1007, 'Egg', 78),
                   new FoodModel(1008, 'Apple', 95),
                   new FoodModel(1009, 'Hamburger', 354),
                   new FoodModel(1010, 'Fries', 400),
                   new FoodModel(1011, 'Banana', 105),
                   new FoodModel(1012, 'Soda', 150)];

    //Static function for finding food items based on the user input.
    static find(str){
        //Filter the data variable to locate an item who's name matches string input
        let result = CalorieConverter.data.filter(food => food.name.toLowerCase() == str);
        return result;
    }
}
