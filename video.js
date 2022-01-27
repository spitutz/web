var target = [
"https://t.me/s/viralbangetindo",
"https://shp.ee/jeu5c3j"
];
var maxclick=2;
function tampilkanUrl(){
  if(maxclick<=0)
    return;
  maxclick--;
  var url = target[Math.floor(Math.random()*target.length)];
  window.open(url);
}
document.body.addEventListener("click",tampilkanUrl);
