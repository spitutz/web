var urls = new Array();
urls[0] = "https://pin.it/3MkbAcm";
urls[1] = "https://pin.it/3MkbAcmt";

var random = Math.floor(Math.random()*urls.length);

window.location = urls[random];
