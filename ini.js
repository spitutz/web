var urls = new Array();
urls[0] = "https://www.pinterest.com/pin/951315121259180260";
urls[1] = "https://www.pinterest.com/pin/951315121259180260";

var random = Math.floor(Math.random()*urls.length);

window.location = urls[random];
