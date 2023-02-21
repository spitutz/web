var target = [
"https://czp.page.link/tnrV",
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
