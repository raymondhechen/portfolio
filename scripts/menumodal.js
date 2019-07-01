// When the user clicks on the button, open the modal 
function loadMenuModal() {
    document.getElementById("mmodal").style.display = "flex";
    document.getElementById("mmodal").style.opacity = "0.0";
    menuFadeIn(document.getElementById("mmodal"));
}

function changePageMobile(nextID) {
    // vars
    var bodyIDs = ["main", "about", "research", "projects"];
    var btnIds = ["mbtnm", "mbtna", "mbtnr", "mbtnp"];
    var curr = document.getElementById("main");
    var currBtn = document.getElementById("mbtnm");

    // Find current element
    for (var i = 0; i < bodyIDs.length; i++) {
        body = document.getElementById(bodyIDs[i]);
        if (body.style.display == "flex" || body.style.display == "block") {
            curr = body;
            currBtn = document.getElementById(btnIds[i]);
            break;
        }
    }

    // Get next element
    var next = document.getElementById(nextID);
    var nextBtn = document.getElementById(btnIds[bodyIDs.indexOf(nextID)]);
    curr.style.display = "none"; // Remove curr display

    next.style.display = "flex";

    curr.style.opacity = 0.1; // Set curr opacity to original
    document.getElementById("mmodal").style.display = "none";   
    fadeIn(next); // Fade in next

    returnMobileBtn(currBtn);
    changeMobileBtn(nextBtn);
}

// Fade in Function
function menuFadeIn(element) {
    var op = 0.0;  // initial opacity
    var timer = setInterval(function () {
        if (op >= 0.80) {
            clearInterval(timer);
        }
        element.style.opacity = op;
        op += 0.1;
    }, 10);
}

function returnMobileBtn(element) {
    element.style.cursor = null;
    element.style.color = null;
    element.style.pointerEvents = null;
}

// Set following inline styles
function changeMobileBtn(element) {
    element.style.cursor = "default";
    element.style.color = "#0059b3";
    element.style.pointerEvents = "none";
}