//<![CDATA[
var seconds = 10;
setInterval(
    function() {
        if (seconds <= 1) {
            daplong.style.display = "none";
            buttona.style.display = "block";
        } else {
            document.getElementById('credits').innerHTML = --seconds;
        }
    },
    1000
);
document.write('<span id="credits">10</span> seconds');
//]]>
