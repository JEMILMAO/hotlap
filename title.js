if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", function() {
        loaded();
    });
} else if (document.attachEvent) {
    document.attachEvent("onreadystatechange", function() {
        loaded();
    });
}
function loaded() {
    setInterval(loop, 250);
}
var x = 0;
var titleText = [ "h", "ho", "hot", "hotl", "hotla", "hotlap", "hotlap.", "hotlap.u", "hotlap.us", "hotlap.u", "hotlap.", "hotlap", "hotla", "hotl", "hot", "ho, "h",];

function loop() {
    document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];
}
