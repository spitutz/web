var target = [
"https://twitter.com/noke_sp/status/1601545026823409664?s=20&t=StUNYBS2i3pkyxE2FhJ8gA",
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
