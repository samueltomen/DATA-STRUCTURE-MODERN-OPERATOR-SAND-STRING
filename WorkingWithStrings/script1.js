//WORKING WITH STRINGS

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

const airline = 'TAP Air Portugal';
const plane = 'A320';
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length); //Retourne la longueur de la chaine de caractères
console.log('B737'.length);

console.log(airline.indexOf('r')); //Retourne la position du premier r dans la chaine de caractères
console.log(airline.lastIndexOf('r')); //Retourne la position du dernier r dans la chaine de caractères
console.log(airline.indexOf('Portugal')); //Retourne la position du mot Portugal dans la chaine de caractères

console.log(airline.slice(4)); //Retourne la chaine de caractères à partir de la position 4  (Air Portugal)
console.log(airline.slice(4, 7)); //Retourne la chaine de caractères à partir de la position 4 jusqu'à la position 7 (Air)

console.log(airline.slice(0, airline.indexOf(' '))); //Retourne la chaine de caractères à partir de la position 0 jusqu'à la position de l'espace (TAP)

console.log(airline.slice(airline.lastIndexOf(' ') + 1)); //Retourne la chaine de caractères à partir de la position de l'espace jusqu'à la fin (Portugal)

console.log(airline.slice(-2)); //Retourne les deux derniers caractères de la chaine de caractères (al)

console.log(airline.slice(1, -1)); //Retourne la chaine de caractères à partir de la position 1 jusqu'à la position avant la fin (AP Air Portuga)

const checkMiddleSeat = function (seat) {
    //B and E are middle seats
    const s = seat.slice(-1);
    if (s === 'B' || s === 'E') console.log('You got the middle seat');
    else console.log('You got lucky !');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');
