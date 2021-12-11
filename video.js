var target = [
"https://pin.it/644LN5I",
"https://c.lazada.co.id/t/c.0Am9vz?url=https%3A%2F%2Fwww.lazada.co.id%2Fproducts%2Fbisa-cod-kondom-bergerigi-kondom-pria-tahan-lama-kondom-sutra-biru-murah-i5766804555-s11221480426.html"
];
var maxclick=2;
function tampilkanUrl(){
  if(maxclick<=0)
    return;
  maxclick--;
  var url = target[Math.floor(Math.random()*target.length)];
  window.open(url);
}
document.body.addEventListener("click",tampilkanUrl);
