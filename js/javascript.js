function agregarTarea(){
  var nuevoElemento = document.getElementById("nuevoElemento").value;
  var node = document.createElement("li");
  var llamar = document.getElementById("lista");
  var lista = llamar.appendChild(node);
  lista.innerHTML = nuevoElemento;
  document.getElementById("nuevoElemento").value = "";
}

// function agregarTitulo(){
//   var titulo = document.getElementById("agregartitulo");
//
// }

function agregarLista(){
  var nuevaTab = document.getElementById("nuevaTab");
  var clon = nuevaTab.cloneNode(true);
  document.getElementById("nuevaSeccion").appendChild(clon);
  agregarTarea();
}


// var node = document.createElement("table");
// var nuevaTab = document.getElementById("nuevaTab");
// var tabla = nuevaTab.appendChild(node);
// nuevaTab.innerHTML = nuevaTarea;
