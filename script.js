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

    // Création d'une fonction permettant de selectionner un attribut dans le tableau
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
};

const arrNew = [2, 3, 4];
const a = arrNew[0];
const b = arrNew[1];
const c = arrNew[2];

const [x, y, z] = arrNew;
console.log(x, y, z);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main,secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

// receive 2 returns value from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested destructuring
const nested = [2, 4, [5, 6]];
const [mainp, , [mainp2, mainp3]] = nested;
console.log(mainp, mainp2, mainp3);

// Connerrrieeeeee !!
// const newArr2 = []
// newArr2.push(mainp,mainp2,mainp3)
// console.log(newArr2);

// Default values
const [p=1,q=1,r=1] = [8,2,2]
console.log(p,q,r);


