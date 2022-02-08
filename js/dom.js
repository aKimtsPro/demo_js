
function writeProps( obj ){
    const div = document.getElementById('text-here');
    for(prop in obj){
        const p = document.createElement('p');
        p.innerText = 'key: ' + prop + ' | value: '+ obj[prop];
        p.classList.add('truc');
        p.onclick = () => alert('salut');
        p.addEventListener('click', () => div.removeChild(p))
        p.addEventListener('click', (event) => console.log(event) )
        div.appendChild(p);
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
endTimeout();

const interval =  setInterval( () => alert('3sec se sont passées'), 3000 );
function endInterval(){
    clearInterval( interval );
    console.log('interval stopped')
}
endInterval();


// Manip CSS
let blue = false;
let int = setInterval( () => {
    div.style.border = blue ? "3px dashed red" : "3px dashed blue";
    blue = !blue;
} ,2000)
clearInterval(int);

blue = false;
const changeColor = () => {
    div.classList.remove( blue ? 'blue-bordered' : 'red-bordered' );
    div.classList.add( blue ? 'red-bordered' : 'blue-bordered' );
    blue = !blue;
}
int = setInterval( changeColor , 2000)
clearInterval(int);

// console.log( getComputedStyle(div) )








