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
var titleText = [ "o", "on", "oni", "onik", "oniky", "onikya", "onikyan", "onikyan.", "onikyan.j", "onikyan.jp", "onikyan.j", "onikyan.", "onikyan", "onikya", "oniky", "onik", "oni", "on", "o",];

function loop() {
    document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];
}
