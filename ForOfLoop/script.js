// FOR OF LOOP
// ENHANCED OBJECT LITERALS

'use strict';

// Définition des jours de la semaine
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// Définition des heures d'ouverture pour certains jours de la semaine
const openingHours = {
    [weekdays[3]]: {
        open: 12,
        close: 22,
    },
    [weekdays[4]]: {
        open: 11,
        close: 23,
    },
    [weekdays[5]]: {
        open: 0, // Ouvert 24h/24
        close: 24,
    },
};

// Définition de l'objet restaurant avec des propriétés variées
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    //ES6 enhanced object literal : utilisé pour assigner la propriété openingHours précédemment définie à l'objet restaurant
    openingHours,
};

/* Le code suivant combine les deux tableaux des menu de l'objet restaurant et les stocke dans la variable menu. L'itération suit, affichant chaque élément avec une boucle for...of et ajoutant un nombre à chaque entrée avec la méthode .entries() et une structure d'interpolaion afin d'afficher l'index et l'élément associé. */

// On combine les deux tableaux des menu de l'objet restaurant et on les stocke dans la variable "menu" en utilisant l'opérateur spread
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// On itère sur la variable "menu" avec une boucle for...of pour afficher chaque élément
for (const item of menu) console.log(item); // For of loop

// On itère sur la variable "menu" avec une boucle for...of et la méthode .entries() pour ajouter un nombre à chaque entrée avec une structure d'interpolation pour afficher l'index et l'élément associé
for (const item of menu.entries()) {
    console.log(`${item[0] + 1}: ${item[1]}`);
}

// Utilisation de la destructuration pour obtenir l'index et l'élément associé dans chaque entrée
for (const [i, el] of menu.entries()) {
    console.log(`${i + 1} : ${el}`);
}
