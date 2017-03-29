function agregarTarea(){
  var nuevoElemento = document.getElementById("nuevoElemento").value;
  var node = document.createElement("li");
  var textNode = document.createTextNode(nuevoElemento);
  var llamar = document.getElementById("lista");
  var lista = llamar.appendChild(node);
  lista.innerHTML = nuevoElemento;
  document.getElementById("nuevoElemento").value = "";
}
