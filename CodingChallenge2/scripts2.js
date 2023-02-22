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
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery: function ({
        starterIndex = 1,
        mainIndex = 0,
        time = '20:00',
        adress = 'Via del Sole,21',
    }) {
        console.log(
            `Order received ! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${adress} at ${time}`
        );
    },

    orderPasta: function (ing1, ing2, ing3) {
        console.log(
            `Here is your delicious pasta with ${ing1} ${ing2} ${ing3}`
        );
    },
    orderPizza: function (mainIngredient, ...othersIngredients) {
        console.log(mainIngredient);
        console.log(othersIngredients);
    },
};

const rest1 = {
    name: 'Capri',
    // numGuests: 20,
    numGuests: 0,
};

const rest2 = {
    name: 'La Piazza',
    owner: 'Giovanni Rossi',
};

// // OR assignement operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// Simplification de l'operation du dessus (similaire a +=)
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// // nullish assignement operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// AND assignements operator (retourne la valeur false)
// rest1.owner = rest1.owner && '<ANONYMOUS>'
// rest2.owner = rest2.owner && '<ANONYMOUS>'
// Simplification de l'operation du dessus
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

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
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 Arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(...menu);

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

// Coding Challenge #1

// Data of the game from the Web
const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

// console.log('--------- DEFINIS LES EQUIPE DANS LES TABLEAU--------------');
// const players1 = game.players[0]
// const players2 = game.players[1]
// console.log(players1);
// console.log(players2);

// console.log('---------- METTRE LE GARDIEN DANS UNE VARIABLE --------------');
// console.log('---- CREER UN TABLEAU AVEC TOUS LES JOUEURS SAUF LE GARDIEN ------');

// const [gk,...fieldPlayers] = players1
// console.log(gk);
// console.log(fieldPlayers);

// console.log('------ TABLEAU QUI CONTIENT TOUS LES JOUEURS------');
// const allPlayers = [...players1,...players2]
// console.log(allPlayers);

// Create new array for the 3 substitute players
// const players1Final = [...players1,'Thiago','Counthino','Perisic']
// console.log(players1Final);

// Create a variable for each odd

// const {team1, ...tim1} = game.odds
// const {x, ...draw} = game.odds
// const {team2, ...tim2} = game.odds
// console.log(team1);
// console.log(x);
// console.log(team2);

// // Methode plus simple
// const {odds: {team1,x:draw, team2}} = game

// function printGoal (...playersName) {
//     console.log(...playersName);
//     console.log(game.score);
// }

// printGoal('Davies','Muller','Lewandowski','Kimmich')
// printGoal(...game.scored)

// // Elaboration du schema
// if(team1 < team2){
//     console.log(team1);
// }else{
//     console.log(team2);
// };
// // 7.
// team1 < team2 && console.log('Team 1 is more likely to win');
// team2 < team1 && console.log('Team 2 is more likely to win');

// // Je recupere la valeur (nom de chaque) de chaque joueur
// const gamePlayers = Object.values(game.scored)
// console.log(gamePlayers);

// 1.
// Je recupere le nombre du but marquer en fonction des joueurs
const goal = Object.keys(game.scored);
console.log(goal);

const goalEntries = Object.entries(game.scored);

for (const [goal, gamePlayer] of game.scored.entries()) {
    goal === 0
        ? console.log(`${gamePlayer} a marquer le ${goal + 1}er but `)
        : console.log(`${gamePlayer} a marquer le ${goal + 1}ème buts `);
}

// 2.
// MON CODE ---
const oddsValues = Object.values(game.odds);
let sum1 = 0;
for (const keys of oddsValues)
sum1 += keys;
let x = sum1 / oddsValues.length;
console.log(x);

// CODE DE JONAS S
let average = 0;
for (const odd of oddsValues) average += odd;
average /= oddsValues.length;
console.log(average);

// 3. //VERY HARD 
for(const [team, odd] of Object.entries(game.odds)){
    const teamStr = team === 'x'? 'draw':`Victory ${game[team]}`  
    console.log(`Odd of ...${teamStr} ${odd}`);
}
