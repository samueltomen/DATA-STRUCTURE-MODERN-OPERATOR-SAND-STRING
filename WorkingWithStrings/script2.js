//WORKING WITH STRINGS 2

'use strict';

// Définition de la variable flights qui est utilisée dans un exercice ultérieur

// Convertir la chaîne de caractères airline en minuscule et l'afficher dans la console
console.log(airline.toLowerCase());
// Convertir la chaîne de caractères airline en majuscule et l'afficher dans la console
console.log(airline.toUpperCase());

// Fixer la capitalisation du nom d'un passager
const passenger = 'jonAs'; //Jonas
// Convertir la chaîne de caractères en minuscules
const passengerLower = passenger.toLowerCase();
// Mettre la première lettre en majuscule et ajouter le reste de la chaîne de caractères en minuscules
const passengerCorrect =
    passengerLower[0].toUpperCase() + passengerLower.slice(1);
// Afficher le nom corrigé dans la console
console.log(passengerCorrect);

// Comparer deux adresses e-mail
const email = 'hello@jonas.io';
const loginEmail = '  Hello@JOnas.Io \n ';

// Convertir la chaîne de caractères en minuscules et supprimer les espaces au début et à la fin
const lowerEmail = loginEmail.toLowerCase().trim();
// Afficher l'adresse e-mail normalisée dans la console
console.log(lowerEmail);
// Vérifier si les deux adresses e-mail sont identiques et afficher le résultat dans la console
console.log(email === lowerEmail); //true

// Remplacer des caractères dans une chaîne de caractères
const priceUS = '288,97$';
// Remplacer le symbole '$' par '£' et ',' par '.'
const priceGB = priceUS.replace('$', '£').replace(',', '.');
// Afficher le prix converti dans la console
console.log(priceGB);

// Remplacer des mots dans une chaîne de caractères
const announcement =
    'All passengers come to boarding door 23. Boarding door 23!';
// Remplacer le mot 'door' par 'gate' dans la chaîne de caractères et afficher le résultat dans la console
console.log(announcement.replace('door', 'gate')); //remplace uniquement la première occurrence
// Remplacer tous les mots 'door' par 'gate' dans la chaîne de caractères et afficher le résultat dans la console
console.log(announcement.replaceAll('door', 'gate')); //remplace toutes les occurrences

// Utiliser des méthodes de chaînes de caractères pour retourner des valeurs booléennes
const plane1 = 'Airbus A320neo';
// Vérifier si la chaîne de caractères contient le mot 'A320' et afficher le résultat dans la console
console.log(plane1.includes('A320')); //true
// Vérifier si la chaîne de caractères contient le mot 'Boeing' et afficher le résultat dans la console
console.log(plane1.includes('Boeing')); //false
// Vérifier si la chaîne de caractères commence par le mot 'Air' et afficher le résultat dans la console
console.log(plane1.startsWith('Air')); //true

// Utiliser des conditions pour effectuer des actions en fonction de certaines valeurs de chaînes de caractères
if (plane1.startsWith('Airbus') && plane1.endsWith('neo')) {
    console.log('Part of the NEW Airbus family');
} else {
    console.log('Old plane');
}

//Practice exercise
const checkBaggage = function (items) {
    const baggage = items.toLowerCase();
    if (baggage.includes('knife') || baggage.includes('gun')) {
        console.log('You are NOT allowed on board');
    } else {
        console.log('Welcome aboard');
    }
};

checkBaggage('I have a laptop, some food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');
