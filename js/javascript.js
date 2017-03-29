function agregarTarea(){
  var nuevoElemento = document.getElementById("nuevoElemento").value;
  var node = document.createElement("li");
  var textNode = document.createTextNode(nuevoElemento);
  document.getElementById("lista").appendChild(textNode);
  document.getElementById("nuevoElemento").value = "";
}
