var target = [
"https://twitter.com/noke_sp/status/1610601144652529664?t=inzPNSxmTKOui69uNGyWtQ&s=19",
"https://tokopedia.link/iZqUIcJHkwb"
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
