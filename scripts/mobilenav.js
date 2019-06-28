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