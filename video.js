var target = [
"https://twitter.com/noke_sp/status/1601226703967514625?s=20&t=idt8y5_Tw5VCQgQU9Cmaew",
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
