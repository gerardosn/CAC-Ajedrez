
function mostrarTextoCompleto() {
    var textoCorto = document.getElementById("texto-corto");
    var textoCompleto = document.getElementById("texto-completo");
    var imgMultimedia = document.getElementById("imgMultimedia");
  
    // Remueve la clase 'texto' para permitir que se muestre completo
    textoCorto.classList.remove("texto");
    // Establece la altura máxima al alto real del texto completo
    textoCompleto.style.maxHeight = textoCompleto.scrollHeight + "px";
    // Ajusta el tamaño de la imagen al 150% de su tamaño original
    imgMultimedia.style.width = "88%"; 
  }
  
  function restaurarTexto() {
    var textoCorto = document.getElementById("texto-corto");
    var textoCompleto = document.getElementById("texto-completo");
    var imgMultimedia = document.getElementById("imgMultimedia");
    
    // Restaura la clase 'texto' para limitar el tamaño al original
    textoCorto.classList.add("texto");
    // Restaura la altura máxima al original
    textoCompleto.style.maxHeight = "2em"; 
    // Ajusta el tamaño de la imagen al 150% de su tamaño original
    imgMultimedia.style.width = "44%"; 
        
  }
  
async function mostrarContParaForm(url){
  const ContParaFormNArticulo = document.querySelector('.ContParaFormNArticulo')
  ContParaFormNArticulo.classList.remove('hidden')

  const response = await fetch(url);
  if (response.ok) {
    const htmlString = await response.text();
    ContParaFormNArticulo.innerHTML = htmlString;
  } else {
    console.error('Error al cargar el archivo HTML');
  }  
}
function cerrarContParaForm(){
  const ContParaFormNArticulo = document.querySelector('.ContParaFormNArticulo')
  ContParaFormNArticulo.classList.add('hidden')
}

// scriptFormCompartir
function validarNumeros(){
  const nroWhatsapp = document.querySelector('input[name="nroWhatsapp"]').value;
  const errNroWhatsapp = document.querySelector("#errNroWhatsapp");


    // Expresión regular para validar números
    const regex = /^[0-9]+$/;
  
    // Validar el valor con la expresión regular
    if (!regex.test(nroWhatsapp)) {
      // El valor no es válido, mostrar mensaje de error
      errNroWhatsapp.textContent = "Error: Debe ingresar solo números.";
      errNroWhatsapp.classList.remove("hidden");
    }

}

//script sumarLike
function sumarLike(){
  let numeroLikes = parseInt (document.getElementById('nroLikes').querySelector('p').textContent);
  numeroLikes = numeroLikes + 1;
  document.getElementById('nroLikes').querySelector('p').textContent = numeroLikes;
}