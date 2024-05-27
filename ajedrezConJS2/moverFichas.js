
var contenido = ""; // Variable para almacenar el contenido copiado

// Seleccionar todos los divs con data-celda
var celdas = document.querySelectorAll('[data-celda]');

// Recorrer los divs y añadir un event listener a cada uno
celdas.forEach(function (celda) {
  celda.addEventListener('click', function () {
    // Si el div está vacío, insertar el contenido de la variable "contenido"
    if (this.innerHTML === ""  && contenido != "") {
      this.innerHTML = contenido;
      contenido = ""; // Vaciar la variable "contenido"
      console.log("Contenido borrado.")
      // elimina el contenido en el div "fichaMoviendo"
      var fichaMoviendo = document.querySelector('[data-celda="fichaMoviendo"]');
      fichaMoviendo.innerHTML = "";
    }else if(this.innerHTML !== ""  && contenido != ""){
    console.log("casillero ocupado");
    } else {
      contenido = this.innerHTML; // Copiar el contenido del div en la variable "contenido"
      console.log("Contenido copiado: " + contenido);
      this.innerHTML = ""; // Eliminar el contenido del div
      console.log("Contenido borrado.")
      // Copiar el contenido de la variable "contenido" en el div "fichaMoviendo"
      var fichaMoviendo = document.querySelector('[data-celda="fichaMoviendo"]');
      fichaMoviendo.innerHTML = contenido;

    }
  });
});

    console.log("js cargado");

    // function insertarHTML() {
    //     const html = '<p>js: cargado.</p>';
    //     document.body.insertAdjacentHTML('beforeend', html);
    // }
    // window.onload = insertarHTML;
