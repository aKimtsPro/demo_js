// 3.1

const date = new Date();
// const jour = new Date().toLocaleString('fr', {weekday:'long'});
let jour;

switch(date){
    case 1:
        jour = 'lundi'; 
        break;
    case 2:
        jour = 'mardi';
        break;
    case 3:
        jour = 'mercredi';
        break;
    case 4:
        jour = 'jeudi';
        break;
    case 5:
        jour = 'vendredi';
        break;
    case 6:
        jour = 'samedi';
        break;
    case 7:
        jour = 'dimanche';
        break;
}
if(jour){
    console.log('Nous sommes ' + jour);
}
else
    console.log("error")

3.2

const taille = parseInt(prompt("Quelle taille?"));
for(let i = 1; i <= taille; i++){
    console.log('A'.repeat(i))
}

// 3.3

const taille = parseInt(prompt("Quelle taille?"));
// const taille = 2;

if(taille >= 2){

    for(let i = 0; i< taille ; i++){
        let line = "";
        for(let k=0; k< 2*taille-1; k++){
            if(k < taille-i-1)
                line += ' ';
            else if( k < taille+i ){
                line += '*'
            }
        }
        console.log(line);
    }
    for(let k=0; k<3; k++ ){
        console.log(' '.repeat(taille <= 2 ? 0 : taille-2) + "***")
    }

}
else{
    console.error("taille invalide");
}

// 3.3 - bis
const taille = parseInt(prompt("Quelle taille?"));
// const taille = 2;

if(!isNaN(taille)){

    for(let i = 0; i< taille ; i++){
        let line = ' '.repeat(taille > 1 ? taille-1-i : 1) + '*'.repeat(2*i+1);
        console.log(line);
    }
    console.log(' '.repeat(taille-2) + "***")
}
else{
    console.error("taille invalide");
}