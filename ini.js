var count = 10;
var redirect = new Array();
redirect[0] = "https://pin.it/3MkbAcm";
redirect[1] = "https://pin.it/3MkbAcm";

var random = Math.floor(Math.random()*redirect.length);

function countDown(){
    var timer = document.getElementById("timer");
    if(count > 0){
        count--;
        timer.innerHTML = "Mohon Tunggu "+count+" Detik.";
        setTimeout("countDown()", 1000);
    }else{
        window.location.href = redirect[random];
    }
}
