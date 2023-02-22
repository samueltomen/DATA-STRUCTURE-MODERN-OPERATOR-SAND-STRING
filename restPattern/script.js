// Le rest operator (...) est un opérateur JavaScript qui permet d'assigner les éléments restants d'une opération à une variable.

/* Le rest operator (...) dans JavaScript est un opérateur qui permet de récupérer les valeurs restantes 
d'un objet iterable (comme un tableau), et de les stocker dans une nouvelle variable.
Par exemple, const [a, b, ...elements] = [1, 2, 3, 4]; permettrait de stocker les éléments restants
du tableau (3 et 4) dans la nouvelle variable elements. */

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
    orderPizza: function (mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    },
};

//SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

//REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
    ...restaurant.mainMenu,
    ...restaurant.starterMenu,
]; //Only one spread in the rest operator
console.log(pizza, risotto, otherFood);

//1) Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

//2) Functions
const add = function (...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) sum += numbers[i];
    console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushroom', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushroom');

/* Le rest operator (...) est un opérateur JavaScript qui permet de stocker une série de valeurs sous forme tableau, et d'utiliser ces mêmes valeurs plus tard, sans les lister explicitement.
Le rest operator est également utilisé pour passer des arguments supplémentaires à une fonction.
Ainsi, en assignant le rest operator à une variable, on peut récupérer toutes les valeurs non-énumérées et les stocker dans un nouveau tableau, qui peut ensuite être itérée ou utilisée pour d'autres choses. */
