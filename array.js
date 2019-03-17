var urls = new Array();
urls[0] = "http://urlreturns.cf/golek";
urls[1] = "https://www.facebook.com/tulisanpenadiary/posts/3104094899616045";

var random = Math.floor(Math.random()*urls.length);

window.location = urls[random];
