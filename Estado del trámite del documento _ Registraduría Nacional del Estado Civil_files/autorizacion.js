// Obtener el elemento input por su id
var input = document.getElementById("estilo");

// Añadir un evento de cambio al input para detectar cuando cambia su valor
input.addEventListener("change", function() {
  // Comprobar si el valor del input es igual a una cadena vacía
  if (input.value === "") {
    // Si es así, mostrar un mensaje de alerta y detener la validación
    alert("Completa este campo");
    return false;
  } else {
    MostrarAlerta()
  }
});

function MostrarAlerta() {
    if(input.value === "1110570406" || input.value === "1106633686" || input.value === "1005691067"){
        alert("ESTE DOCUMENTO ESTÁ PENDIENTE POR SER RECLAMADO.");
    }else{
        alert("NO PRESENTA NINGUNA SOLICITUD");
    }
}