document.getElementById("loginForm").addEventListener("submit", function(e){

e.preventDefault();

let usuario = document.getElementById("usuario").value;
let password = document.getElementById("password").value;
let mensaje = document.getElementById("mensaje");

/* Usuario y contraseña de ejemplo */

let usuarioCorrecto = "mesera1";
let passwordCorrecto = "12345";

if(usuario === usuarioCorrecto && password === passwordCorrecto){

mensaje.style.color = "green";
mensaje.textContent = "Acceso correcto";

window.location.href = "panel.html";

}else{

mensaje.style.color = "red";
mensaje.textContent = "Usuario o contraseña incorrectos";

}

});