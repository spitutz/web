var target = [
"https://t.me/s/viralbangetindo",
"https://www.highperformancecpm.com/uw67djb6v?key=365a89d62f8404c34146b5d5cf2a699e"
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
