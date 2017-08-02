function agregarTarea(){
  var nuevoElemento = document.getElementById("nuevoElemento").value;
  var node = document.createElement("li");
  var llamar = document.getElementById("lista");
  var textNode = document.createTextNode("nuevoElemento");
  var lista = llamar.appendChild(node);
  lista.innerText = nuevoElemento;
  document.getElementById("nuevoElemento").value = "";
  // llamar.id = Date.now();
  // lista.value = llamar.id
}

function editarTitulo(){
  var tituloAnterior = document.getElementById("titulo");
  var nuevoTitulo = prompt("Ingrese titulo nuevo");
  tituloAnterior.innerHTML = nuevoTitulo;
}

function agregarLista(){
  var tabla = document.getElementById("nuevaTab");
  var nuevaLista = document.getElementById("lista");
  var clon = tabla.cloneNode(true);
  var botonBorrar = document.createElement("button");
  var nuevaTab = document.getElementById("nuevaSeccion").appendChild(clon);

  clon.id = Date.now();
  tabla.value = clon.id
  nuevaLista.id = clon.id
  botonBorrar.value = clon.id
  botonBorrar.innerText = "Borrar"

  // botonBorrar.onclick = function(){
  //   var idElementoABorrar = document.getElementById(this.value);
  //   nuevaLista.removeChild(this)
  //   nuevaLista.removeChild(idElementoABorrar)
  // }

}
