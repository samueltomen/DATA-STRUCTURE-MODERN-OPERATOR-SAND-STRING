'use strict';

// Data needed for a later exercise
const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekdays = [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday',
];
// Data needed for first part of the section
const hours = {
    [weekdays[0]]: {
        open: 12,
        close: 22,
    },
    [weekdays[4]]: {
        open: 11,
        close: 23,
    },
    [weekdays[6]]: {
        open: 0, // Open 24 hours
        close: 24,
    },
};

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    // ES6 ehanced object litteral
    hours,

    order(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery({
        starterIndex = 1,
        mainIndex = 0,
        time = '20:00',
        adress = 'Via del Sole,21',
    }) {
        console.log(
            `Order received ! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${adress} at ${time}`
        );
    },

    orderPasta(ing1, ing2, ing3) {
        console.log(
            `Here is your delicious pasta with ${ing1} ${ing2} ${ing3}`
        );
    },
    orderPizza(mainIngredient, ...othersIngredients) {
        console.log(mainIngredient);
        console.log(othersIngredients);
    },
};

// Property Names
const properties = Object.keys(hours);
console.log(properties);

let openStr = `We are open on ${properties.length} days : `;

for (const day of properties) {
    openStr += `${day}, `;
    console.log(day);
}
console.log(openStr);
// Property VALUES
const values = Object.values(hours);
console.log(values);

// Entire Object
const entries = Object.entries(hours);
console.log(entries);

// [key, value]
for (const [day, { open, close }] of entries) {
    console.log(`On ${day} we open at ${open} and close at ${close}`);
}

// // if(restaurant.hours && restaurant.hours.mon)
// // console.log(restaurant.hours.mon.open);

// // WITH optional chaining
// // ? verifie si la propriété existe, si ce n'est pas le cas elle retournera undefined or null
// console.log(restaurant.hours.mon?.open);
// console.log(restaurant.hours.tue?.open);

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (const day of days) {
//     console.log(day);
//     const open = restaurant.hours[day]?.open || ' we are closed';
//     console.log(`On ${day}, we are ${day?.open} ${open}`);
// }

// // Methods
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');

// // Arrays
// const users = [{ name: 'Jonas', email: 'heelo@jonas.com' }];

// console.log(users[0]?.name ?? 'Users array is empty');

// // Boucle for of
// const menu = [...restaurant.starterMenu,...restaurant.mainMenu]

// for (const item of menu)console.log(item);

// for(const item of menu.entries()){
//     console.log(`${item[0]+1}: ${item[1]}`);
// }
// const rest1 = {
//     name: 'Capri',
//     // numGuests: 20,
//     numGuests: 0,
// };

// const rest2 = {
//     name: 'La Piazza',
//     owner: 'Giovanni Rossi',
// };

// // OR assignement operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// Simplification de l'operation du dessus (similaire a +=)
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// // // nullish assignement operator (null or undefined)
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// // AND assignements operator (retourne la valeur false)
// // rest1.owner = rest1.owner && '<ANONYMOUS>'
// // rest2.owner = rest2.owner && '<ANONYMOUS>'
// // Simplification de l'operation du dessus
// rest1.owner &&= '<ANONYMOUS>'
// rest2.owner &&= '<ANONYMOUS>'

// console.log(rest1);
// console.log(rest2);

///////////////////////////////////////////////////
// The Nullish Coalescing Operator
// restaurant.numGuests = 0
// const guest2 = restaurant.numGuests || 10
// console.log(guest2);

// // Nullish : null and undefined (NOT 0 or '')
// const guestCorrect = restaurant.numGuests ?? 10
// console.log(guestCorrect);

// console.log('------- OR -------');
// // use ANY data types, return ANY data type, short-circuitting
// // Si la première valeur est veridique il renverra toujours celle ci
// console.log( 3 || 'Jonas');
// console.log('' || 'Jonas');
// console.log(true || 0);
// console.log(undefined || null);
// console.log(undefined || 0 || '' || "Hello" || 23 || null);

// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10
// console.log(guests1);

// restaurant.numGuests = 0
// const guest2 = restaurant.numGuests || 10
// console.log(guest2);
// console.log(restaurant.numGuests);

// console.log('------- AND -------');

// console.log(0 && 'Jonas');
// console.log(7 && 'Jonas');
// console.log('Hello' && 23 && null && 'jonas');

// // Practical example
// if( restaurant.orderPizza){
//     restaurant.orderPizza('mushroom' ,'spinach')
// }
// restaurant.orderPizza && restaurant.orderPizza ('spinach', 'mushromm')

// // 1) Destructuring

// // SPREAD, because on RIGHT side of =
// const arr5 = [1, 2, ...[3, 4]];

// // REST
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, ...others);

// const [pizza, , Risotto, ...otherFood] = [
//     ...restaurant.mainMenu,
//     ...restaurant.starterMenu,
// ];
// console.log(pizza, Risotto, otherFood);

// // Objects
// const { sat, ...weekDays } = restaurant.openingHours;
// console.log(weekDays);

// //  2) Functions
// const add = function (...numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//     console.log(sum);
// };
// add(2, 3);
// add(5, 3, 7, 2);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza('mushroom','onions','olives','spinach')
// restaurant.orderPizza('mushrooms')

// restaurant.orderDelivery({
//     time: '22:30',
//     adress: 'Via del Sole,21',
//     mainIndex: 2,
//     starterIndex: 2,
// });

// restaurant.orderDelivery({
//     adress: '20 rue de la Soif',
//     mainIndex: 2,
// });

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//     name: restaurantName,
//     openingHours: hours,
//     categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);
// // Default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// // Nested objects
// const {
//     fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// ----------------------- SPREAD OPERATORS ----------------- //

// Utiliser le spread operator ... (ajoute les valeurs d'un tableau a un autre tableau)
// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);

// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// // Copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// // Join 2 Arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(...menu);

// // Iterables are: arrays, strings, maps, sets but NOT an OBJECT
// const str = 'Jonas';
// const letters = [...str, '', '.S'];
// console.log(...letters);
// console.log(...str);
// // console.log(`${...str}Schedtman`); //NOT WORKING

// // Real-world example
// const ingredients = [
//     // prompt("Let's make pasta! Ingredient 1 ?"),
//     // prompt('Ingredient 2?'),
//     // prompt('Ingredient 3?'),
// ];
// console.log(ingredients);
// restaurant.orderPasta(...ingredients);

// // Object
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurant.name, restaurantCopy.name);
