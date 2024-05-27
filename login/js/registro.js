function validarFormulario(event) {
    var email = document.getElementById("email").value.trim();
    var first_name = document.getElementById("first_name").value.trim();
    var last_name = document.getElementById("last_name").value.trim();
    var username = document.getElementById("username").value.trim();
    var password = document.getElementById("password").value;
    var level = document.getElementById("level").value;
    var gender = document.querySelector('input[name="gender"]:checked');
    // var profile_picture = document.getElementById("profile_picture").value; // Comentado ya que no está en el HTML

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var uppercaseRegex = /[A-Z]/;
    var numberRegex = /\d/;

    document.getElementById('password-error').innerHTML = '';

    // Validación del correo electrónico
    if (!emailRegex.test(email)) {
        alert("Por favor, introduzca una dirección de correo electrónico válida.");
        event.preventDefault();
        return false;
    }

    // Validación de nombre, apellido y nombre de usuario
    if (first_name === "" || last_name === "" || username === "") {
        alert("Por favor, complete todos los campos obligatorios.");
        event.preventDefault();
        return false;
    }

    // Validación de contraseña
    if (password.length < 8 || !uppercaseRegex.test(password) || !numberRegex.test(password)) {
        //alert("La contraseña debe tener al menos 8 caracteres, una letra mayúscula y un número.");
        document.getElementById('password-error').innerHTML = "La contraseña debe tener al menos 8 caracteres, una letra mayúscula y un número.";
        event.preventDefault();
        return false;
        
    }

    // Validación de nivel de ajedrez
    if (level === "") {
        alert("Por favor, seleccione un nivel de ajedrez.");
        event.preventDefault();
        return false;
    }

    // Validación de género
    if (!gender) {
        alert("Por favor, seleccione su género.");
        event.preventDefault();
        return false;
    }

    // Validación de imagen de perfil (opcional)
    /*
    if (profile_picture === "") {
        alert("Por favor, suba una imagen de perfil.");
        event.preventDefault();
        return false;
    }
    */

    // Si todas las validaciones son correctas, mostrar confirmación y limpiar el formulario
    alert("Jugador registrado correctamente");
    limpiarFormulario();
    

    return true;
}

function esPasswordValida(password) {
    var uppercaseRegex = /[A-Z]/;
    var numberRegex = /\d/;
    return password.length >= 8 && uppercaseRegex.test(password) && numberRegex.test(password);
}

function limpiarFormulario() {
    document.getElementById("login-form").reset();
    document.getElementById('password-error').textContent = ""
   
}


document.getElementById("login-form").addEventListener("submit", function(event) {
    if (!validarFormulario(event)) {
        event.preventDefault();
    }
});



document.getElementById("password").addEventListener("input", function() {
    var password = this.value;
    if (esPasswordValida(password)) {
        document.getElementById('password-error').innerHTML = '';
    }
});