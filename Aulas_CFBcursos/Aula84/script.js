const longitude = document.getElementById("long");
const latitude = document.getElementById("lat");

if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(mostrarLocalizacao, errorLocalizacao);
}else{
    console.log("Localização não indentificada.");
};

function mostrarLocalizacao(pos){
    longitude.innerHTML = `Longitude: ${pos.coords.longitude}`;
    latitude.innerHTML = `Latitude: ${pos.coords.latitude}`;
};

function errorLocalizacao(pos){
    console.log("ERRO!");
};

console.log(mostrarLocalizacao());

