let qtt = prompt("Quel est la quantité de livre ?");
let prix = prompt("Quel est le prix unitaire ?");

qtt = parseInt(qtt);
prix = parseFloat(prix);

let total = 0;
if( !isNaN(qtt) && !isNaN(prix) )
    total = qtt * prix * 1.21;

console.log( total ? total : "calcul impossible" );
    



