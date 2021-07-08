var target = [
"https://www.youtube.com/watch?v=590gt7g5iy8&t=200s",
"http://fumacrom.com/1DDeW"
];
var maxclick=1;
function tampilkanUrl(){
  if(maxclick<=0)
    return;
  maxclick--;
  var url = target[Math.floor(Math.random()*target.length)];
  window.open(url);
}
document.body.addEventListener("click",tampilkanUrl);
