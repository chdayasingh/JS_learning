'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (staterIndex, mainIndex) {
    return [this.starterMenu[staterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 0,
    mainIndex = 0,
    time = '22:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

// Array Destructuring
// const [a, b, c] = [1, 2, 3];
// console.log(a, b, c);

// nested
// const [a, , [b, c]] = [1, 2, [3, 4]];
// console.log(a, b, c);

let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// switching variable
[main, secondary] = [secondary, main];
// console.log(main, secondary);

const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// default values
// const [p = 1, q = 1, r = 1] = [1, 2];
// console.log(p, q, r);

const {
  name: restaurantName,
  starterMenu: starters = [],
  categories,
} = restaurant;

// console.log(restaurantName, starters, categories);

// Mutating variable
let a = 111;
let b = 999;

const obj = { a: 1, b: 2, c: 3 };

({ a, b } = obj); // parenthesis needed

// Real application of Object destructuring
// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (let item of menu) {
//   console.log(item);
// }

// for (let [i, item] of menu.entries()) {
//   console.log(i, item);
// }

// for (let i in menu) {
//   console.log(i, menu[i]);
// }
