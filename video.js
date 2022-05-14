var target = [
"https://youtu.be/t1eEWj6aUcY",
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
