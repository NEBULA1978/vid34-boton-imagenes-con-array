window.onload = inicio;
var imagenes = [
  "semillas.jpg",
  "menu-verduras.jpg",
  "Frutas y verduras frescas.jpg",
  "Frutas y verduras.jpg",
  "menu-frutas.jpg",
  "menu-frutos-secos.jpg",
];

var orden=[];
var cantidad = imagenes.length;


function inicio() {
  document.getElementById("boton1").onclick = mas;
  document.getElementById("boton2").onclick = mostrar_todo;
}
function mas() {
  if(orden.length==imagenes.length){
    orden=[];
    document.getElementById("caja").innerHTML="";
    document.getElementById("boton2").disabled=true;
  }
  do {
    r = Math.floor(Math.random()*cantidad);

  }while(orden.indexOf(r)>=0)
  orden.push(r);
  document.getElementById("caja").innerHTML += `<div><img src="${imagenes[r]}"></div>`;
  
  if(orden.length==imagenes.length){
    document.getElementById("boton2").disabled=false;
  }
  }

function mostrar_todo() {
    document.getElementById("caja").innerHTML="";
    for(let k=imagenes.length-1;k>=0;k--){
      document.getElementById(
        "caja"
      ).innerHTML += `<div><img src="${imagenes[orden[k]]}"></div>`;
  }

  }
