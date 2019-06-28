// When the user clicks on the button, open the modal 
function loadMenuModal() {
    document.getElementById("mmodal").style.display = "flex";
    document.getElementById("mmodal").style.opacity = "0.0";
    menuFadeIn(document.getElementById("mmodal"));
}

// When the user clicks on <span> (x), close the modal
function closeMenuModal() {
    document.getElementById("mmodal").style.display = "none";
}

function changePageMobile(nextID) {
    // vars
    var bodyIDs = ["main", "resume", "research", "projects"];
    var curr = document.getElementById("main");

    // Find current element
    for (var i = 0; i < bodyIDs.length; i++) {
        body = document.getElementById(bodyIDs[i]);
        if (body.style.display == "flex" || body.style.display == "block") {
            curr = body;
            break;
        }
    }

    // Get next element
    var next = document.getElementById(nextID);
    curr.style.display = "none"; // Remove curr display

    // Turn on next display
    if (next == document.getElementById("resume")) {
        next.style.display = "block";
    }
    else {
        next.style.display = "flex";
    }

    curr.style.opacity = 0.1; // Set curr opacity to original
    document.getElementById("mmodal").style.display = "none";   
    fadeIn(next); // Fade in next
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