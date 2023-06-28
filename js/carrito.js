

document.querySelector(".btnsuma").addEventListener("click",sumarUno);

document.querySelector(".btnrestar").addEventListener("click",restarUno);

let contador = 0;

function sumarUno(holi) {

    contador=contador+1;
    document.querySelector(".msgcontador").innerHTML=contador;
    
}

function restarUno(holi) {

    contador=contador-1;
    document.querySelector(".msgcontador").innerHTML=contador;
    
}