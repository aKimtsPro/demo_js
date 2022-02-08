

const div = document.getElementById("text-here");
const p = document.createElement('p');
p.innerHTML = new Date();
div.appendChild(p);

setInterval(() => {
    // document.getElementById("text-here")
    //     .firstChild
    //     .innerHTML = new Date();
    p.innerHTML = new Date();
}, 1000);