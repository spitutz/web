var target = [
"https://twitter.com/noke_sp/status/1606018305088946176?s=20&t=lj2l_TQVaDHD8zme8Y9pwg",
"https://tokopedia.link/cMPBfayqcwb"
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
