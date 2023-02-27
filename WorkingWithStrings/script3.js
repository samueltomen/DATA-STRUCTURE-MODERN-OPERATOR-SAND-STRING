// Description: Working with strings

console.log('a+very+nice+string'.split('+')); //Retourne un tableau avec les éléments séparés par le séparateur + (["a", "very", "nice", "string"])
console.log('Jonas Schmedtmann'.split(' ')); //Retourne un tableau avec les éléments séparés par le séparateur espace (["Jonas", "Schmedtmann"])

const [firstName, lastName] = 'Jonas Schmedtman'.split(' ');
console.log(firstName, lastName); //Retourne le prénom et le nom (Jonas Schmedtman)

//Transformer un tableau en chaine de caractères
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName); //Retourne le nom avec la majuscule (Mr. Jonas SCHMEDTMANN)

const capitalizeName = function (name) {
    const names = name.split(' '); //Retourne un tableau avec les éléments séparés par le séparateur espace (["jessica", "and", "smith", "davis"])
    const namesUpper = [];

    for (const n of names) {
        // namesUpper.push(n[0].toUpperCase() + n.slice(1)); //Retourne la première lettre en majuscule et le reste de la chaine de caractères (Jessica And Smith Davis)
        namesUpper.push(n.replace(n[0], n[0].toUpperCase())); //Retourne la première lettre en majuscule et le reste de la chaine de caractères (Jessica And Smith Davis)
    }
    console.log(namesUpper.join(' ')); //Retourne un tableau avec les éléments séparés par le séparateur espace (["Jessica", "And", "Smith", "Davis"])
};

capitalizeName('jessica and smith davis');
capitalizeName('jonas schmedtmann');

//Padding

const message = 'Go to gate 23!';
console.log(message.padStart(25, '+').padEnd(35, '+')); //Retourne une chaine de caractères avec 25 caractères au début et 35 caractères à la fin (++++++++++++++++++Go to gate 23!++++++++++++++++++++)
console.log('Jonas'.padStart(25, '+').padEnd(35, '+')); //Retourne une chaine de caractères avec 25 caractères au début et 35 caractères à la fin (++++++++++++++++++++++Jonas++++++++++++++++++++++++++)

const maskCreditCard = function (number) {
    const str = number + ''; //Retourne une chaine de caractères (123456789)
    const last = str.slice(-4); //Retourne les 4 derniers caractères (6789)
    return last.padStart(str.length, '*'); //Retourne une chaine de caractères avec 9 caractères au début (******6789)
};

console.log(maskCreditCard(123456789)); //Retourne une chaine de caractères avec 9 caractères au début (******6789)
console.log(maskCreditCard('123456789')); //Retourne une chaine de caractères avec 9 caractères au début (******6789)

//Repeat

const message2 = 'Bad weather... All Departures Delayed... ';
console.log(message2.repeat(5)); //Retourne une chaine de caractères avec 5 répétitions (Bad weather... All Departures Delayed... Bad weather... All Departures Delayed... Bad weather... All Departures Delayed... Bad weather... All Departures Delayed... Bad weather... All Departures Delayed... )

const planesInLine = function (n) {
    console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
};

planesInLine(5); //Retourne une chaine de caractères avec 5 répétitions (There are 5 planes in line ✈✈✈✈✈)
planesInLine(3); //Retourne une chaine de caractères avec 3 répétitions (There are 3 planes in line ✈✈✈)
planesInLine(12); //Retourne une chaine de caractères avec 12 répétitions (There are 12 plane

//CODING CHALLENGE #4

// Création d'un élément "textarea" dans le body de la page web
document.body.append(document.createElement('textarea'));

// Création d'un élément "button" dans le body de la page web
document.body.append(document.createElement('button'));

// Solution de Jonas
// Ajout d'un écouteur d'événement "click" sur le bouton
document.querySelector('button').addEventListener('click', function () {
    // Récupération de la valeur de la zone de texte
    const text = document.querySelector('textarea').value;
    console.log(text);
});

// Séparation des différentes lignes du texte
const rows = text.split('\n');
console.log(rows);

// Pour chaque ligne, on effectue les opérations suivantes
for (const [i, row] of rows.entries()) {
    // Séparation des deux parties de chaque ligne (séparées par un "_")
    const [first, second] = row.toLowerCase().trim().split('_');

    // Création d'une chaîne de caractères en camelCase à partir des deux parties
    const output = `${first}${second.replace(
        second[0],
        second[0].toUpperCase()
    )}`;

    // Affichage de la chaîne de caractères créée ainsi que des symboles "✅"
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
}



// Notre solution
const transformText = function (variable) {
    // Conversion de la chaîne de caractères en minuscules
    const lowerTextArea = variable.toLowerCase();

    // Tableau pour stocker les mots en camelCase
    const camelCaseTextArea = [];

    // Division de la chaîne de caractères en tableau, en remplaçant les "_" par des espaces
    const replaceTextArea = lowerTextArea.replaceAll('_', ' ').split(' ');

    // Pour chaque mot du tableau, on crée un mot en camelCase et on l'ajoute au tableau "camelCaseTextArea"
    for (const word of replaceTextArea) {
        camelCaseTextArea.push(word.replace(word[0], word[0].toUpperCase()));
    }

    // Concaténation des mots en camelCase pour former une seule chaîne de caractères
    const joinCamelCaseTextArea = camelCaseTextArea.join('');

    // Affichage de la chaîne de caractères en camelCase
    console.log(joinCamelCaseTextArea);
};
