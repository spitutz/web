var urls = new Array();
urls[0] = "http://ikon-sby.blogspot.com/2019/03/lurd-hitech-mall-surabaya-pindah-di.html";
urls[1] = "https://www.youtube.com/watch?v=rE476-90dj0&list=PLHtr0obr6Nl3SkmaYu4Q40u-JQiOrqqlP&index=2&t=0s";
urls[2] = "https://www.nimo.tv/live/188730";

var random = Math.floor(Math.random()*urls.length);

window.location = urls[random];
