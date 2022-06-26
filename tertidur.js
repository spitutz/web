document.addEventListener("mousedown", tabUnder);

var sites = [
        'https://necmac.bio.link',
        'https://www.youtube.com/channel/UCNgCMcuS37rxGn8Hx4eRGug'
    ];

function tabUnder() {
    var a = document.createElement("a"), 
	    i = parseInt(Math.random() * sites.length),
        e = document.createEvent("MouseEvents");
    a.href = sites[i]; //the URL of 'popup' tab
    e.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, true, false, false, true, 0, null);
    a.dispatchEvent(e);
    document.removeEventListener("mousedown", tabUnder);
}
