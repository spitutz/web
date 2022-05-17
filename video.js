var target = [
"https://www.safestgatetocontent.com/d8expv83be?key=14b6cfbf6229584983b1fdd5ddc18f7b",
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
