var target = [
"http://google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwjLhNKWvuT4AhXkm1YBHcwyBXIQFnoECAoQAQ&url=https://www.youtube.com/shorts/vvTMRMpElnk/&usg=AOvVaw2nDKmHUtbeAr-fZOgxdjPU",
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
