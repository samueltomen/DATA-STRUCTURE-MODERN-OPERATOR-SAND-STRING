/* Créez un tableau joueur pour chaque équipe (variables 'players1' et 'players2')

Le premier joueur de chaque tableau est le gardien de but et les autres sont des joueurs de terrain. 
Pour Bayern Munich (équipe 1), créez une variable ('gk') avec le nom du gardien de but, et un tableau ('fieldPlayers') contenant tous les 10 joueurs de terrain restants.

Créez un tableau 'allPlayers' contenant tous les joueurs des deux équipes (22 joueurs).

Pendant le jeu, Bayern Munich (équipe 1) a utilisé 3 joueurs de remplacement. Donc créez un nouveau tableau ('players1Final') contenant tous les joueurs d'origine de l'équipe 1 plus 'Thiago', 'Coutinho' et 'Perisic'.

Basé sur l'objet game.odds, créez une variable pour chaque cote (appelée 'team1', 'draw' et 'team2').

Écrivez une fonction ('printGoals') qui reçoit un nombre arbitraire de noms de joueurs (pas un tableau) et qui les affiche chacun dans la console, ainsi que le nombre total de buts marqués (nombre de noms de joueurs passés en paramètre).

L'équipe ayant la cote la plus basse a plus de chance de gagner. Imprimez dans la console laquelle des deux équipes a plus de chance de gagner, sans utiliser d'instruction if/else ou l'opérateur ternaire.

Test data pour 6.: D'abord, utilisez les joueurs 'Davies', 'Muller', 'Lewandowski' et 'Kimmich'.

Ensuite, appelez à nouveau la fonction avec des joueurs provenant de game.scored. */

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
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels','Eddy'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

const players1 = game.players[0];
const players2 = game.players[1];
console.log(...players1);
console.log(...players2);

const [gk, ...fieldPlayers] = players1;
console.log(gk);
console.log(...fieldPlayers);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const players1Final = [...players1, 'Thiago', 'Counthino', 'Perisic'];
console.log(players1Final);

const {
    odds: { team1: team1 },
    odds: { x: draw },
    odds: { team2: team2 },
} = game;

console.log(team1);
console.log(draw);
console.log(team2);

function printGoals(...names) {
    console.log(...names, game.scored.length); 
}

printGoals(...game.scored) 
