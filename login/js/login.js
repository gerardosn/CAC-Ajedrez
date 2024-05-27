function validarFormulario(event) {
  event.preventDefault();

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  var errorMessage = "";

  if (username.trim() === "") {
    errorMessage += "Por favor, introduce tu nombre de usuario o email.\n";
  }

  if (password.trim() === "") {
    errorMessage += "Por favor, introduce tu contraseña.\n";
  }

  if (!esPasswordValida(password)) {
    document.getElementById('password-error').innerHTML = "La contraseña debe tener al menos 8 caracteres, una letra mayúscula y un número.";
    return false;
  }

  if (errorMessage !== "") {
    alert(errorMessage);
    return false;
  }

  alert("Bienvenido Jugador");
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
  document.getElementById('password-error').textContent = "";
}

function loginWithGoogle() {
  alert("Función de inicio de sesión con Google.");
}

function loginWithFacebook() {
  alert("Función de inicio de sesión con Facebook.");
}


document.getElementById("password").addEventListener("input", function() {
  var password = this.value;
  if (esPasswordValida(password)) {
    document.getElementById('password-error').innerHTML = '';
  }
});

document.getElementById("login-form").addEventListener("submit", function(event) {
  if (validarFormulario(event)) {
    document.getElementById("login-form").submit();
  }
});

document.getElementById("google-login").addEventListener("click", loginWithGoogle);
document.getElementById("facebook-login").addEventListener("click", loginWithFacebook);
