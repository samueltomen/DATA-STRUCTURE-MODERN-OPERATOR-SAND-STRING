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

    // Function to accept user's order
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
};

// Get elements from array using brackets
const arr = [2, 3, 4];
const a = arr[0]; // 2
const b = arr[1]; // 3
const c = arr[2]; // 4

// Get elements from array using destructuring assignment
const [x, y, z] = arr;
console.log(x, y, z); // 2, 3, 4
console.log(arr); // [2, 3, 4]

// Destructure specific values from an array note the use of comma operator
let [main, , secondary] = restaurant.categories;
console.log(main, secondary); // Italian Organic

// Swap two variables with array destructuring
[main, secondary] = [secondary, main];
console.log(main, secondary); // Organic Italian

// Get array items based on index
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse); // Garlic Bread Pizza

// Nested destructuring
const nested = [2, 4, [5, 6]];

// Destructure "outer" and "inner" arrays at the same time
const [i, , [j, k]] = nested;
console.log(i, j, k); // 2 5 6

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); // 8 9 1

/* Le code ci-dessus illustre plusieurs caractéristiques importantes du destructuring en JavaScript, notamment :
Destruction d'un tableau pour créer de nouvelles variables à partir de ses éléments ;
Permutation de valeurs entre deux variables sans avoir besoin d'une variable temporaire;
Affectation des valeurs par défaut à des variables si elles ne peuvent pas être assignées à un élément dans le tableau. */
