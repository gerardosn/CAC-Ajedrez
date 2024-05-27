function mostrarOpciones() { //muestro opciones de imagen o video
    let inputSelectMultimedia = document.querySelector("#inputSelectMultimedia");

    let inputSelectImagen = document.querySelector("#inputSelectImagen");
    let selectImagen = document.querySelector("#selectImagen");

    let inputGoogleIframe = document.querySelector("#inputGoogleIframe");
    let labelInput2 = document.querySelector("#googleIframe");

    if (inputSelectMultimedia.value === "sinOpcion") {//oculto todos
        inputSelectImagen.classList.add("hidden");
        inputGoogleIframe.classList.add("hidden");
      selectImagen.classList.add("hidden");
      labelInput2.classList.add("hidden");
      errImagen.classList.add("hidden");
      errGoogleIframe.classList.add("hidden");
      errDeEnvio.classList.add("hidden");
    } else if (inputSelectMultimedia.value === "imagen") {//oculto video
        inputSelectImagen.classList.remove("hidden");
        inputGoogleIframe.classList.add("hidden");
      selectImagen.classList.remove("hidden");
      labelInput2.classList.add("hidden");
      errGoogleIframe.classList.add("hidden");
      errDeEnvio.classList.add("hidden");
    } else if (inputSelectMultimedia.value === "video") {//oculto imagen
        inputSelectImagen.classList.add("hidden");
        inputGoogleIframe.classList.remove("hidden");
      selectImagen.classList.add("hidden");
      labelInput2.classList.remove("hidden");
      errImagen.classList.add("hidden");
      errDeEnvio.classList.add("hidden");
    }
  }


  document.querySelector("#inputSelectImagen").addEventListener("change", function() {//compruebo q el archivo sea jpg/png
    let archivo = this.files[0];
    let errImagen = document.querySelector("#eImagen");
  
    if (archivo.type === "image/jpeg" || archivo.type === "image/png") {
        errImagen.textContent = "ok";
        errImagen.classList.remove("hidden");
    } else {
        errImagen.textContent = "Error: debe ingresar un archivo del tipo jpg/png.";
        errImagen.classList.remove("hidden");
    }
  });

  document.querySelector("#inputGoogleIframe").addEventListener("input", function() {
    let textoIngresado = this.value;
    let errGoogleIframe = document.querySelector("#eGoogleIframe");
  
    if (textoIngresado.includes("<iframe") && textoIngresado.includes("</iframe>")) {
        errGoogleIframe.textContent = "ok";
        errGoogleIframe.classList.remove("hidden");
    } else {
        errGoogleIframe.textContent = "Error: ingrese el codigo iframe completo de youtube.";
        errGoogleIframe.classList.remove("hidden");
    }
  });

async function enviarDatos() {
  
  const titulo = document.querySelector('input[name="titulo"]').value;
  const txtBreve = document.querySelector('input[name="txtBreve"]');
  const txtExtendido = document.querySelector('input[name="txtExtendido"]').value;

  const inputSelectMultimedia = document.querySelector("#inputSelectMultimedia");
  const inputSelectImagen = document.querySelector("#inputSelectImagen").files[0];
  const errImagen = document.querySelector("#errImagen");
  const inputGoogleIframe = document.querySelector("#inputGoogleIframe").value;
  const errGoogleIframe = document.querySelector("#eGoogleIframe");

  let errDeEnvio = document.querySelector("#errDeEnvio");

  if (errGoogleIframe.value != "ok" || errImagen.value != "ok"){/*compruevo que esten ok */
  errDeEnvio.textContent = "Error: revise los datos a enviar."
  errDeEnvio.classList.remove("hidden");
  } else { /*hago el proceso de envio*/

  const formData = new FormData(); /*constructor FormData(), no requiere importación. El constructor se encuentra en el ámbito global de JavaScript */
  formData.append('titulo', titulo);
  formData.append('txtBreve', txtBreve);
  formData.append('txtExtendido', txtExtendido);
  formData.append('inputSelectImagen', inputSelectImagen);
  formData.append('inputGoogleIframe', inputGoogleIframe);


    const respuesta = await fetch('https://www.ejemplos.co/', {
        method: 'POST',
        body: formData
        // body: JSON.stringify(datos),
        // headers: {
        //     'Content-Type': 'application/json'
        // }
    });

    if (respuesta.ok) {
        console.log('Datos enviados correctamente');
    } else {
        console.error('Error al enviar datos:', respuesta.statusText);
    }
  }

  cerrarContParaForm();
}