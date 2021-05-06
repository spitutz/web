var target = [
"https://www.instagram.com/p/COGgS5bHOJF/",
"https://blog.catet.my.id",
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
