(function() {

if(navigator.geolocation) {

	navigator.geolocation.getCurrentPosition(getCoords, errorFound);

} else {
	alert("Por favor, actualiza tu navegador");
}

function errorFound (err) {
	alert("Ocurrió un error: " + err.message);
	//0: Error desconocido
	//1: Permiso denegado
	//2: Posición no está disponible
	//3: Timeout
}

function getCoords (position) {
	var lat = position.coords.latitude;
	var lon = position.coords.longitude;
	console.log("Tu posición es: " + lat + "," + lon);
}

})();