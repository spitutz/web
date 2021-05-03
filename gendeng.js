var target = [
"https://korankompi.blogspot.com/2021/05/monetary-plans-wht-ar-americans-banking.html",
"https://korankompi.blogspot.com/2021/05/dollar-saving-tips-n-ur-nxt-car-rental.html",
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
