
function writeProps( obj ){
    const p = document.getElementById('text-here');
    for(prop in obj){
        p.innerHTML += '<p class="truc">key: ' + prop + ' | value: '+ obj[prop] + '</p>'
    }
}

const o = {
    taille: 180,
    nom: 'paul',
    age: 47
}
writeProps(o);

// Methodes de document

document.write('<a href="#">salut</a>');

const div = document.getElementById("text-here");
// console.log(div);

const node_list = document.getElementsByTagName('p');
console.log(node_list);

const created = document.createElement('p'); // créer
created.innerText = "salut"; // config
div.appendChild(created); // ajout

// Les Nodes

console.log(div.attributes)
const fChild = div.firstChild
div.appendChild(fChild) 
// On remarque que le "texte" n'est pas copié mais déplacé

// Propriétés d'un élément:

// div.innerHTML='<ul><li>from console</li></ul>' // compris comme html
// div.innerText='<ul><li>from console</li></ul>' // compris comme texte

const pTruc = document.querySelectorAll('p.truc');
console.log(pTruc);

// setTimeout / setInterval

function func(){
    alert('3sec se sont passées');
}
func = function (){
    alert('3sec se sont passées');
}
func = () => {
    alert('3sec se sont passées');
}
// setTimeout( func , 3000 );

const timeout = setTimeout( () => alert('3sec se sont passées'), 3000 );
function endTimeout(){
    clearTimeout( timeout );
    console.log('timeout averted')
}

const interval =  setInterval( () => alert('3sec se sont passées'), 3000 );
function endInterval(){
    clearInterval( interval );
    console.log('interval stopped')
}
