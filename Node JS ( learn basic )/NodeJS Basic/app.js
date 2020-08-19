// FILESYSTEM

// const fs = require('fs');

// fs.copyFileSync("text.txt", "text2.txt");
// console.log('text.txt was copied to text2.txt');

// SUPERHEROES

// const hero = require('superheroes');

// for (let i = 0; i < 10; i++) {
//   console.log(hero.random());
// }

// MODULE / FUNCTION

const op = require("./module.js");

const moduleTitle = op.title;
const modulePerjumlahan = op.tambah(10, 5);
const modulePerkalian = op.kali(10, 5);

console.log(moduleTitle);
console.log(modulePerjumlahan);
console.log(modulePerkalian);