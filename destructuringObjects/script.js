'use strict';

/* Explication : la destructuration permet de simplifier ou de réorganiser une structure de données pour la rendre 
plus facile à utiliser et à manipuler. Dans le code ci-dessus, nous pouvons voir que la destructuration est utilisée pour extraire les propriétés d'un objet dans des variables séparées, tout en fournissant des noms de variables différents. 

Caractère utile supplémentaire, elle peut également être utilisée pour définir des valeurs par défaut 
lorsque l'objet est destructurer et changer les valeurs des variables. 

Les règles fonctionnent de la même manière que la mise en place des valeurs hachées, 
mais sont appliquées plutôt sur un objet. */

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
};

// Appel de la fonction orderDelivery de l'objet restaurant avec un objet en argument
restaurant.orderDelivery({
    adress: 'Via del SOlde,21',
});

// Extraction de certaines propriétés de l'objet restaurant
const { name, openingHours, categories } = restaurant;

// Affichage de ces propriétés dans la console
console.log(name, openingHours, categories);

// Extraction de certaines propriétés de l'objet restaurant en renommant certaines d'entre elles
const {
    name: restaurantName,
    openingHours: hours,
    categories: tags,
} = restaurant;

// Affichage de ces propriétés renommées dans la console
console.log(restaurantName, hours, tags);

// Définition de valeurs par défaut pour les propriétés menu et starterMenu
const { menu = [], starterMenu: starter = [] } = restaurant;

// Mutation de variables a et b
let a = 111;
let b = 999;

const obj = { a: 23, b: 7, c: 14 };

// Extraction des propriétés a et b de l'objet obj et affectation à a et b
({ a, b } = obj);

// Affichage de a et b dans la console
console.log(a, b);

// Extraction de propriétés d'un objet imbriqué dans un autre objet
const {
    fri: { open: o, close: c },
} = openingHours;

// Affichage des valeurs de o et c dans la console
console.log(o, c);
