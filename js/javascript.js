function agregarTarea(){
  var nuevoElemento = document.getElementById("nuevoElemento").value;
  var node = document.createElement("li");
  var llamar = document.getElementById("lista");
  var lista = llamar.appendChild(node);
  lista.innerHTML = nuevoElemento;
  document.getElementById("nuevoElemento").value = "";
}

function agregarTitulo(){
  var pedirTitulo = prompt("¿Cúal es el título?");
  var agregarTitulo = document.getElementById("titulo");
  agregarTitulo.innerHTML = pedirTitulo;
}

function editar(){
  var nuevoTitulo = prompt("¿Cúal es el nuevo título?");
  var agregarTitulo = document.getElementById("nuevoTitulo");
  var tituloAnterior = document.getElementById("titulo");
  tituloAnterior.innerHTML = nuevoTitulo;
}

function agregarLista(){
  var nuevaTab = document.getElementById("nuevaTab");
  var clon = nuevaTab.cloneNode(true);
  document.getElementById("nuevaSeccion").appendChild(clon);

  agregarTarea();
}
