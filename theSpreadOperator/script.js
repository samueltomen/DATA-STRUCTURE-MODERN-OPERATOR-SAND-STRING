/* Le code montre comment utiliser l'opérateur spread (...) 
pour copier des tableaux, lier des tableaux multiples et même passer 
des variables comme arguments. Cela fonctionnera également sur des objets, 
même s'ils ne sont pas itérables. Enfin, cela nous montre comment créer des 
copies d'objets, attribuer de nouvelles valeurs et comparer les anciennes valeurs 
aux nouvelles. */

'use strict';

// Définition de la variable flights qui est utilisée dans un exercice ultérieur
const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Définition d'un objet restaurant contenant plusieurs propriétés, des tableaux et des fonctions
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
            open: 0, // Ouvert 24h/24
            close: 24,
        },
    },

    // Définition d'une fonction qui permet de passer commande
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    // Définition d'une fonction pour passer commande à livrer
    orderDelivery: function ({
        starterIndex = 1,
        mainIndex = 0,
        time = '20:00',
        adress,
    }) {
        console.log(
            `Order received ! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be received to ${adress} at ${time}`
        );
    },
    // Définition d'une fonction pour passer commande à livrer avec un paramètre par défaut
    orderPasta: function (ing1, ing2, ing3) {
        console.log(
            `Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`
        );
    },
};

const arr = [7, 8, 9]; // Définition d'un tableau
const badNewArr = [1, 2, arr[0], arr[1], arr[2]]; // Définition d'un tableau avec des valeurs extraites d'un autre tableau
console.log(badNewArr);

const NewArr = [1, 2, ...arr]; // Définition d'un tableau avec des valeurs extraites d'un autre tableau avec l'opérateur spread
console.log(NewArr);

console.log(...NewArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci']; // Définition d'un tableau avec des valeurs extraites d'un autre tableau avec l'opérateur spread
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menu = [...restaurant.starterMenu, ...mainMenuCopy];
console.log(menu);

// Iterables are: arrays, strings, maps, sets but NOT OBJECTS
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);
// console.log(`${...str} Schmedtmann`); // Ne fonctionne pas parce que le spread operator ne peut pas être utilisé avec un objet.

const newRestaurant = { ...restaurant, founder: 'Guiseppe', foundedIn: 1998 };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';

console.log(restaurantCopy.name);
console.log(restaurant.name);
