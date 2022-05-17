let counted = document.getElementById("number");
let numero = 0 ;

function add() {
    numero += 1 ;
    counted.innerHTML = numero;
}

function remove() {
    if(numero!=0){
    numero -= 1 ;
    counted.innerHTML = numero;
    }
}