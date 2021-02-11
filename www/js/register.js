// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
// document.addEventListener('deviceready', onDeviceReady, false);



function register(){
	var email = document.getElementById("email").value;
	var username = document.getElementById("username").value;
	var pass = document.getElementById("pass").value;
	var repass = document.getElementById("repass").value;

	if (email.length != 0 && username.length != 0 && pass.length != 0 && repass.length != 0 ){

	}
	else{
		alert("Algún campo no está relleno");
	}
	if(pass == repass) {
		alert("Usuario registrado");
	}else{
		alert("La contraseña de confirmación es diferente a la contraseña");
	}
	
};

var registerButton = document.getElementById("registerButton").onclick = register;


