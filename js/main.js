menu.onclick = function myFunction() {
    var x = document.getElementById("nav-btn");
    if(x.className === "main-nav") {
        x.className += "reponsive";
    }
    else {
        x.className = "main-nav"
    }
}