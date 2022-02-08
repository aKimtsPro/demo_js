// alert("hello world!");
// console.log("bonjour");
// console.warn("attention");
// console.error("erreur");

if(true){
    var variable1 = "var";
    let variable2 = "let";
    const CONSTANTE = "const";

    variable2 = 15; // La variable peut prendre des données de n'importe quel type
    variable2 = {
        a : 1486
    };
    variable2 = [1,2,3]

    // CONSTANTE = variable2; // On ne peut pas modifier les const
}

console.log(variable1);
// console.log(variable2); // hors de portée
// console.log(CONSTANTE); // hors de portée


var test1 = 14;
let test2 = 15;
const test3 = 16;

// Les constantes prédéfinies

// NaN: Not a Number

// const m1 = prompt("membre 1:");
// const m2 = prompt("membre 2:");

// const rslt = parseInt(m1) + parseInt(m2);

// if( isNaN(rslt) ){
//     console.log("calcul impossible")
// }
// else{
//     console.log("rslt: " + rslt);
// }

// Infinity

console.log( Infinity / Infinity ); // NaN
console.log( 1200 / 0 ); // Infinity
console.log( 1200 / Infinity ); // 0
console.log( Infinity * 0 ); // NaN
console.log( Infinity * 50 ); // Infinity
console.log( Infinity - 203341414141 ); // Infinity
console.log( Infinity + 654688 ); // Infinity

// undefined

let p;

console.log(p); 
// Les variables n'ayant pas de valeur donnée ont pour valeur "undefined"
console.log(typeof p);
// p = "salut";
// console.log(typeof p);

console.log( p === undefined )


// Les types

let entier = 1;
let reel = 1.1;
let chaine = "ma chaine s'appelle \"chaine\"";
chaine = 'ma chaine qui s\'appelle "chaine"';
let tableau = [ 1, chaine, true ];
let tableauAssoc = {
    key1: "value1",
    key2: "value2"
} 

// Truthy / Falsy
// Certaines valeurs sont considérées comme 'Falsy' 
// même si non 'false'

console.log(null ? "null est truthy" : "null est Falsy");
console.log(undefined ? "undefined est truthy" : "undefined est Falsy");
console.log(0 ? "0 est truthy" : "0 est Falsy");
console.log(NaN ? "NaN est truthy" : "NaN est Falsy");

console.log([] ? "[] est truthy" : "[] est Falsy");
console.log({} ? "{} est truthy" : "{} est Falsy");

// Les tableaux
console.clear();
let tab = [ "element1", 2, false, [], new Date(), 1.1, () => {}, undefined ];
// tab = new Array(); // = [];

for(let i=0; i<tab.length ; i++){
    console.log( tab[i] );
}

// Ajouter
tab.push( "ajouté à la fin" );
tab.unshift( "ajouté au début" );
tab.splice(tab.length-2, 0, 15, "bonjour"); // peut aussi supprimer/remplacer

// Supprimer
let dernier = tab.pop();
let premier = tab.shift();
let subTab = tab.splice(2, 3); // peut aussi inserer/remplacer

// Autres
tab = [ 1, "2", "trois" ]
tab.sort(); // 1 , "2", "trois" // modifie le tableau
tab.reverse(); // "trois", "2", 1 // modifie le tableau
tab = tab.concat( tab.reverse() ); // 1, "2", "trois", 1, "2", "trois" // ne modifie pas
subTab = tab.slice(1,-3);
console.log(tab.join(" - "));
console.log(subTab);


// Les chaines de caractères

chaine = "ma chaine";
chaine = 'ma chaine';
chaine = new String('ma chaine');

let char = chaine.charAt(3); // 'c'
// 'a' = 97, 
// char.charCodeAt(0); // 99
char = char.concat(char.charCodeAt(0)); // c99

let tabChaine = ['a', 'b', 'c'];
for( let i = 0; i < tabChaine.length; i++){
    let lettre = tabChaine[i];
    lettre = lettre.charCodeAt(0) + 1;
    lettre = String.fromCharCode(lettre); // créer une chaine à partir de suite de code Unicode
    tabChaine[i] = lettre;
}

// chaine = 'ma chaine';
let index = chaine.indexOf("a"); // 1
index = chaine.lastIndexOf(String.fromCharCode(101)); // 8
index = chaine.lastIndexOf('ai'); // 5

chaine = chaine.replace('haine', 'amour'); // ne modifie pas
// ma camour
let subChaine = chaine.slice(1,4); // 'a c'
tabChaine = chaine.split('');


// Les Dates

let date = new Date();
date = new Date(1000);
date = new Date(2022,2,6,12,30,12,250);
date = new Date(2022,2,6);

console.log(date);

switch(date.getFullYear()){
    case 2022:
    case 2023:
        console.log("2022 ou 2023");
        break;
}

// Les boucles

tabChaine = ['a', 'b', 'c'];
for(let lettre of tabChaine){
    lettre += '_';
}
for(let lettre of tabChaine){ // pour les valeurs
    console.log(lettre);
}
// a
// b
// c

tab2 = [['a'], ['b'], ['c']];
for(let lettre of tab2){
    lettre[0] += '_';
}
for(let lettre in tab2){ // pour l'index
    console.log(tab2[lettre][0]);
}
// a_
// b_
// c_

let tabA = {
    a: 'A',
    b: 'B',
    c: 'C'
}

for(let key in tabA){
    console.log( key + ' ' + tabA[key] )
}

// break;continue;

// let i = 0;
// while(++i){ // boucle infinie
//     if(i % 2 == 1)
//         continue; // quitte l'iteration actuelle
//     if(i == '5')
//         break; // quitte la boucle
// }

// Les fonctions
console.clear()
function maFonction(a,b){
    if(a)
        return 'salut';
    else if(b)
        return 15;
}

function reverseString(chaine){
    return chaine.split('')
        .reverse()
        .join('');
}
let func = reverseString;
func('salut');

func = function (chaine) {
    return chaine.split('')
        .reverse()
        .join('');
}
func('salut');

func = (chaine) => {
    return chaine.split('')
        .reverse()
        .join('');
}
func('salut');


function maFunc(callback){
    setTimeout(callback, 1000);
}

maFunc(() => console.log('fin du timeout'));


function f(a,b,c,d,e,f){
    rslt= a+b;
    rslt*=d;
    e=f;
    rslt -= e;
    return rslt;
}

let r =f();
console.log(r);

(function (){ console.log('exec')})(); // 'exec'


console.clear();
function throwsError(){
    throw new Date();
}

try{
    throwsError();
}
catch(err){
    console.error(err);
}