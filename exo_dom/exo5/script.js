function addToCart(clicked){

    const parent = clicked.parentNode;
    const prix = parent.previousElementSibling;
    const nom = prix.previousElementSibling;

    const productRow = document.getElementById("produit-panier-" + nom.innerText);
    if( productRow ){
        const qtt_cell = productRow.lastElementChild;
        qtt_cell.innerText++;
    }
    else {
        const tr = document.createElement('tr');
        const td_nom = document.createElement('td');
        const td_prix = document.createElement('td');
        const td_qtt = document.createElement('td');

        tr.id = "produit-panier-" + nom.innerText
        td_nom.innerText = nom.innerText;
        td_prix.innerText = prix.innerText;
        td_qtt.innerText = 1;

        tr.appendChild(td_nom);
        tr.appendChild(td_prix);
        tr.appendChild(td_qtt);

        const panier = document.getElementById("panier");
        panier.appendChild(tr);
    }
    const total = document.getElementById("total");
    total.value = parseInt(total.value) + parseInt(prix.innerText);

}


