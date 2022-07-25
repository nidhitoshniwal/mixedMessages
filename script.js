const defender = ['Virgil Van Dijk', 'Joao Cancelo', 'Raphael Varane', 'Reece James'];
const midFielder = ['Thiago Alcantara', 'Kevin de Bryune', 'Bruno Fernandes', 'N\'Golo Kante'];
const goalKeeper = ['Alisson Becker', 'Hugo LLoris', 'Edouard Mendy', 'Ederson'];
const attacker = ['Harry Kane', 'Darwin Nunez', 'Erling Haaland', 'Cristiano Ronaldo'];
const striker = ['Muhammed Salah', 'Hueng-Min Son', 'Jadon Sancho', 'Jack Grealish'];

let team = [];

function randomNumGenerator() {
    let num = Math.floor(Math.random()*3);
    return num;
}

function randomPlayer(array) {
    let num = randomNumGenerator();
    return array[num];
}

console.log("Your Fantasy Futsal team:")
console.log("Defender: ", randomPlayer(defender));
console.log("midFielder: ", randomPlayer(midFielder));
console.log("Attacker 1: ", randomPlayer(attacker));
console.log("Attacker 2: ", randomPlayer(attacker));
console.log("Goal Keeper: ", randomPlayer(goalKeeper));
 