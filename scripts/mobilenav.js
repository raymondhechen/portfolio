function loadMobile() {
    if (checkMobile() == true) {
        document.getElementById("mNav").style.display = "block";
        document.getElementById("pcNav").style.display = "none"
    }
    else {
        document.getElementById("pcNav").style.display = "block";
        document.getElementById("mNav").style.display = "none";
    }  
}

function checkMobile() {
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    if (w < 600) {
        return true;
    }
    else {
        return false;
    }
}

window.addEventListener("resize", function () { 
    loadMobile()
}, true);


document.onclick = function (event) {
    if (event.target == document.getElementById("mmodal")) {
        fadeOut(document.getElementById("mmodal"));
    }
}

function fadeOut(element) {
    var op = 0.90;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0) {
            clearInterval(timer);
            element.style.display = "none";
        }
        element.style.opacity = op;
        op -= 0.1;
    }, 10);
}